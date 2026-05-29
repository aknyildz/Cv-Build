// ================================================================
// LANDING PAGE & LOCALSTORAGE
// ================================================================

const landingPage  = document.getElementById('landingPage');
const appContainer = document.getElementById('appContainer');
const savedAlert   = document.getElementById('savedAlert');
const devamEtBtn   = document.getElementById('devamEtBtn');
const sifirlaBtn   = document.getElementById('sifirlaBtn');
const geriBtn      = document.getElementById('geriBtn');

const STORAGE_KEY = 'cvBuildData';
const PHOTO_KEY = 'cvBuildPhoto';


document.addEventListener('DOMContentLoaded', function () {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        savedAlert.classList.remove('hidden');
    }
});

devamEtBtn.addEventListener('click', function () {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            tumVeriyiYukle(data);
        } catch (e) {
            console.warn('localStorage verisi bozuk, temizleniyor.');
            localStorage.removeItem(STORAGE_KEY);
        }
    }
    landingPage.classList.add('hidden');
    appContainer.classList.remove('hidden');
    canliOnizlemeGuncelle();
    // Kayıtlı fotoğrafı yükle
    const savedPhoto = localStorage.getItem(PHOTO_KEY);
    if (savedPhoto) {
        fotoYukleVeGoster(savedPhoto);
    }
});

sifirlaBtn.addEventListener('click', function () {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PHOTO_KEY);

    // Tüm state dizilerini sıfırla
    deneyimler    = [];
    egitimler     = [];
    yetenekler    = [];
    ilgiAlanlari  = [];
    diller        = [];
    referanslar   = [];

    // Form alanlarını temizle
    ['ad','soyad','email','telefon','adres','ozet'].forEach(function(id) {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.classList.remove('input-filled'); }
    });

    // Liste container'larını temizle
    document.getElementById('deneyimList').innerHTML  = '';
    document.getElementById('egitimList').innerHTML   = '';
    document.getElementById('dilList').innerHTML      = '';
    document.getElementById('referansList').innerHTML = '';
    document.getElementById('yetenekTags').innerHTML  = '';
    document.getElementById('ilgiTags').innerHTML     = '';

    // Fotoğrafı kaldır
    fotoKaldir();

    savedAlert.classList.add('hidden');
    landingPage.classList.add('hidden');
    appContainer.classList.remove('hidden');

    canliOnizlemeGuncelle();
});

document.querySelectorAll('.template-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        landingPage.classList.add('hidden');
        appContainer.classList.remove('hidden');
    });
});

geriBtn.addEventListener('click', function () {
    appContainer.classList.add('hidden');
    landingPage.classList.remove('hidden');
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        savedAlert.classList.remove('hidden');
    } else {
        savedAlert.classList.add('hidden');
    }
});

// ================================================================
// ACCORDION
// ================================================================

document.querySelectorAll('.accordion-header').forEach(function (header) {
    header.addEventListener('click', function () {
        const parent = header.closest('.accordion-item');
        const isActive = parent.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(function (item) {
            item.classList.remove('active');
        });

        if (!isActive) {
            parent.classList.add('active');
        }
    });
});

// ================================================================
// FOTOĞRAF YÜKLEME & KIRPMA (Cropper.js + FileReader + Base64 + localStorage)
// ================================================================

const fotoInput      = document.getElementById('fotoInput');
const fotoEkleBtn    = document.getElementById('fotoEkleBtn');
const fotoKaldirBtn  = document.getElementById('fotoKaldirBtn');
const photoPreview   = document.getElementById('photoPreview');

const cropBackdrop   = document.getElementById('cropBackdrop');
const cropModal      = document.getElementById('cropModal');
const cropImage      = document.getElementById('cropImage');
const cropKaydetBtn  = document.getElementById('cropKaydetBtn');
const cropIptalBtn   = document.getElementById('cropIptalBtn');
const cropModalKapat = document.getElementById('cropModalKapat');

let fotoDataURL = null; // Kırpılmış Base64 verisi
let cropper = null;     // Cropper.js instance

// "+ Fotoğraf Ekle" butonuna tıklayınca file input'u aç
fotoEkleBtn.addEventListener('click', function () {
    fotoInput.click();
});

// Dosya seçildiğinde → Cropper.js modalını aç
fotoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    // Eski cropper varsa tamamen temizle
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const dataURL = event.target.result;

        // Resmi modal içindeki img'e ata
        cropImage.src = dataURL;

        // Resmin tamamen yüklenmesini BEKLE
        cropImage.onload = function () {
            // Modalı ve arka plan maskesini göster
            cropBackdrop.classList.remove('hidden');
            cropModal.classList.remove('hidden');

            // Cropper'ı başlat (1:1 kare)
            cropper = new Cropper(cropImage, {
                aspectRatio: 1,
                viewMode: 1,
                dragMode: 'move',
                autoCropArea: 0.8,
                restore: false,
                guides: true,
                center: true,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: false
            });
        };
    };

    reader.readAsDataURL(file);

    // Input'u sıfırla ki aynı dosya tekrar seçilebilsin
    fotoInput.value = '';
});

// "Kırp ve Kaydet" butonu
cropKaydetBtn.addEventListener('click', function () {
    if (!cropper) return;

    // Kırpılmış alanı 300x300 canvas'a çevir
    const canvas = cropper.getCroppedCanvas({
        width: 300,
        height: 300,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high'
    });

    // Canvas'ı Base64 Data URL'e çevir (JPEG)
    const croppedDataURL = canvas.toDataURL('image/jpeg', 0.92);

    // Cropper'ı temizle
    cropper.destroy();
    cropper = null;

    // Modalı ve arka planı kapat
    cropModal.classList.add('hidden');
    cropBackdrop.classList.add('hidden');
    cropImage.src = '';

    // 1. Hafızaya kaydet
    localStorage.setItem(PHOTO_KEY, croppedDataURL);

    // 2. Sağ taraftaki A4 önizleme resmini ANINDA güncelle
    const previewImg = document.getElementById('preview-profile-img');
    if (previewImg) {
        previewImg.src = croppedDataURL;
        previewImg.style.setProperty('display', 'block', 'important');
    }


    // 3. Sol taraftaki form içi küçük önizlemeyi de anında güncelle
    fotoYukleVeGoster(croppedDataURL);
});


// İptal / Kapat
function cropModalKapatVeTemizle() {
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    cropModal.classList.add('hidden');
    cropBackdrop.classList.add('hidden');
    cropImage.src = '';
}

cropIptalBtn.addEventListener('click', cropModalKapatVeTemizle);
cropModalKapat.addEventListener('click', cropModalKapatVeTemizle);

// Arka plan maskesine tıklayınca kapat
cropBackdrop.addEventListener('click', cropModalKapatVeTemizle);

// "Kaldır" butonu
fotoKaldirBtn.addEventListener('click', function () {
    fotoKaldir();
});

function fotoYukleVeGoster(dataURL) {
    fotoDataURL = dataURL;

    // Sol paneldeki yuvarlak alanı güncelle
    photoPreview.innerHTML = '<img src="' + dataURL + '" alt="Profil fotoğrafı">';
    photoPreview.classList.add('has-photo');

    // Butonları güncelle
    fotoEkleBtn.textContent = 'Fotoğrafı Değiştir';
    fotoKaldirBtn.classList.remove('hidden');
}

function fotoKaldir() {
    fotoDataURL = null;

    // Sol paneli sıfırla
    photoPreview.innerHTML = '<span class="photo-placeholder">&#128100;</span>';
    photoPreview.classList.remove('has-photo');
    fotoEkleBtn.textContent = '+ Fotoğraf Ekle';
    fotoKaldirBtn.classList.add('hidden');

    // localStorage'dan sil
    localStorage.removeItem(PHOTO_KEY);

    // Önizlemeyi güncelle
    canliOnizlemeGuncelle();
}



// ================================================================
// DENEYİM & EĞİTİM DİNAMİK YÖNETİMİ
// ================================================================

let deneyimler = [];
let referanslar = [];
let egitimler  = [];


document.getElementById('deneyimEkleBtn').addEventListener('click', function () {
    deneyimEklemeFormuGoster(null);
});

document.getElementById('egitimEkleBtn').addEventListener('click', function () {
    egitimEklemeFormuGoster(null);
});

function deneyimEklemeFormuGoster(editIndex) {
    const sirket = editIndex !== null ? deneyimler[editIndex].sirket : '';
    const pozisyon = editIndex !== null ? deneyimler[editIndex].pozisyon : '';
    const baslangic = editIndex !== null ? deneyimler[editIndex].baslangic : '';
    const bitis = editIndex !== null ? deneyimler[editIndex].bitis : '';

    const html = `
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal-card">
                <h4>${editIndex !== null ? 'Düzenle' : 'Yeni'} İş Deneyimi</h4>
                <div class="field-group">
                    <input type="text" id="modalSirket" placeholder="Şirket adı" value="${sirket}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalPozisyon" placeholder="Pozisyon" value="${pozisyon}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalBaslangic" placeholder="Başlangıç (örn: 2020)" value="${baslangic}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalBitis" placeholder="Bitiş (örn: 2023 veya Devam)" value="${bitis}">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn-modal-cancel" id="modalIptal">İptal</button>
                    <button type="button" class="btn-modal-save" id="modalKaydet">${editIndex !== null ? 'Güncelle' : 'Ekle'}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('modalIptal').addEventListener('click', function () {
        document.getElementById('modalOverlay').remove();
    });

    document.getElementById('modalKaydet').addEventListener('click', function () {
        const s = document.getElementById('modalSirket').value.trim();
        const p = document.getElementById('modalPozisyon').value.trim();
        const b = document.getElementById('modalBaslangic').value.trim();
        const bit = document.getElementById('modalBitis').value.trim();

        if (!s || !p) {
            alert('Şirket ve pozisyon zorunludur.');
            return;
        }

        if (editIndex !== null) {
            deneyimler[editIndex] = { sirket: s, pozisyon: p, baslangic: b, bitis: bit };
        } else {
            deneyimler.push({ sirket: s, pozisyon: p, baslangic: b, bitis: bit });
        }

        document.getElementById('modalOverlay').remove();
        deneyimListesiniGuncelle();
        veriKaydetVeOnizle();
    });
}

function egitimEklemeFormuGoster(editIndex) {
    const okul = editIndex !== null ? egitimler[editIndex].okul : '';
    const bolum = editIndex !== null ? egitimler[editIndex].bolum : '';
    const yil = editIndex !== null ? egitimler[editIndex].yil : '';

    const html = `
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal-card">
                <h4>${editIndex !== null ? 'Düzenle' : 'Yeni'} Eğitim</h4>
                <div class="field-group">
                    <input type="text" id="modalOkul" placeholder="Okul adı" value="${okul}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalBolum" placeholder="Bölüm" value="${bolum}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalYil" placeholder="Yıl (örn: 2018-2022)" value="${yil}">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn-modal-cancel" id="modalIptal">İptal</button>
                    <button type="button" class="btn-modal-save" id="modalKaydet">${editIndex !== null ? 'Güncelle' : 'Ekle'}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('modalIptal').addEventListener('click', function () {
        document.getElementById('modalOverlay').remove();
    });

    document.getElementById('modalKaydet').addEventListener('click', function () {
        const o = document.getElementById('modalOkul').value.trim();
        const b = document.getElementById('modalBolum').value.trim();
        const y = document.getElementById('modalYil').value.trim();

        if (!o || !b) {
            alert('Okul ve bölüm zorunludur.');
            return;
        }

        if (editIndex !== null) {
            egitimler[editIndex] = { okul: o, bolum: b, yil: y };
        } else {
            egitimler.push({ okul: o, bolum: b, yil: y });
        }

        document.getElementById('modalOverlay').remove();
        egitimListesiniGuncelle();
        veriKaydetVeOnizle();
    });
}

function deneyimListesiniGuncelle() {
    const container = document.getElementById('deneyimList');
    container.innerHTML = '';

    deneyimler.forEach(function (d, i) {
        const div = document.createElement('div');
        div.className = 'entry-item';
        div.innerHTML = `
            <div class="dynamic-form-row">
                <input type="text" class="company-input" placeholder="Şirket Adı" value="${d.sirket}" data-index="${i}" data-field="sirket">
                <input type="text" class="position-input" placeholder="Pozisyon" value="${d.pozisyon}" data-index="${i}" data-field="pozisyon">
                <input type="text" class="date-input" placeholder="Yıl Aralığı" value="${d.baslangic}${d.baslangic && d.bitis ? ' - ' : ''}${d.bitis}" data-index="${i}" data-field="tarih">
            </div>
            <div class="entry-actions">
                <button type="button" class="btn-icon btn-delete" data-index="${i}" data-type="deneyim">&#10005;</button>
            </div>
        `;
        container.appendChild(div);
    });

    // Input değişikliklerini canlı olarak deneyimler dizisine yansıt
    container.querySelectorAll('.company-input, .position-input, .date-input').forEach(function (input) {
        input.addEventListener('input', function () {
            const idx = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (field === 'sirket') {
                deneyimler[idx].sirket = input.value;
            } else if (field === 'pozisyon') {
                deneyimler[idx].pozisyon = input.value;
            } else if (field === 'tarih') {
                const parts = input.value.split('-').map(function (s) { return s.trim(); });
                deneyimler[idx].baslangic = parts[0] || '';
                deneyimler[idx].bitis = parts[1] || '';
            }
            veriKaydetVeOnizle();
        });
    });

    container.querySelectorAll('.btn-delete').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const idx = parseInt(btn.dataset.index);
            deneyimler.splice(idx, 1);
            deneyimListesiniGuncelle();
            veriKaydetVeOnizle();
        });
    });

    refreshAllInputStates();
}
function egitimListesiniGuncelle() {
    const container = document.getElementById('egitimList');
    container.innerHTML = '';

    egitimler.forEach(function (e, i) {
        const div = document.createElement('div');
        div.className = 'entry-item';
        div.innerHTML = `
            <div class="dynamic-form-row">
                <input type="text" class="school-input" placeholder="Okul Adı" value="${e.okul}" data-index="${i}" data-field="okul">
                <input type="text" class="department-input" placeholder="Bölüm" value="${e.bolum}" data-index="${i}" data-field="bolum">
                <input type="text" class="date-input" placeholder="Yıl" value="${e.yil}" data-index="${i}" data-field="yil">
            </div>
            <div class="entry-actions">
                <button type="button" class="btn-icon btn-delete" data-index="${i}" data-type="egitim">&#10005;</button>
            </div>
        `;
        container.appendChild(div);
    });

    container.querySelectorAll('.school-input, .department-input, .date-input').forEach(function (input) {
        input.addEventListener('input', function () {
            const idx = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (field === 'okul') {
                egitimler[idx].okul = input.value;
            } else if (field === 'bolum') {
                egitimler[idx].bolum = input.value;
            } else if (field === 'yil') {
                egitimler[idx].yil = input.value;
            }
            veriKaydetVeOnizle();
        });
    });

    container.querySelectorAll('.btn-delete').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const idx = parseInt(btn.dataset.index);
            egitimler.splice(idx, 1);
            egitimListesiniGuncelle();
            veriKaydetVeOnizle();
        });
    });

    refreshAllInputStates();
}
function referansListesiniGuncelle() {
    const container = document.getElementById('referansList');
    container.innerHTML = '';

    referanslar.forEach(function (r, i) {
        const div = document.createElement('div');
        div.className = 'entry-item';
        div.innerHTML = `
            <div class="dynamic-form-row">
                <input type="text" class="ref-name-input" placeholder="Ad Soyad" value="${r.ad}" data-index="${i}" data-field="ad">
                <input type="text" class="ref-title-input" placeholder="Şirket / Unvan" value="${r.unvan}" data-index="${i}" data-field="unvan">
                <input type="email" class="ref-email-input" placeholder="E-posta" value="${r.email}" data-index="${i}" data-field="email">
                <input type="tel" class="ref-phone-input" placeholder="Telefon" value="${r.telefon}" data-index="${i}" data-field="telefon">
            </div>
            <div class="entry-actions">
                <button type="button" class="btn-icon btn-delete" data-index="${i}" data-type="referans">&#10005;</button>
            </div>
        `;
        container.appendChild(div);
    });

    container.querySelectorAll('.ref-name-input, .ref-title-input, .ref-email-input, .ref-phone-input').forEach(function (input) {
        input.addEventListener('input', function () {
            const idx = parseInt(input.dataset.index);
            const field = input.dataset.field;
            if (field === 'ad') {
                referanslar[idx].ad = input.value;
            } else if (field === 'unvan') {
                referanslar[idx].unvan = input.value;
            } else if (field === 'email') {
                referanslar[idx].email = input.value;
            } else if (field === 'telefon') {
                referanslar[idx].telefon = input.value;
            }
            veriKaydetVeOnizle();
        });
    });

    container.querySelectorAll('.btn-delete').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const idx = parseInt(btn.dataset.index);
            referanslar.splice(idx, 1);
            referansListesiniGuncelle();
            veriKaydetVeOnizle();
        });
    });

    refreshAllInputStates();
}


// ================================================================
// REFERANSLAR DİNAMİK YÖNETİMİ (modal ile ekleme)
// ================================================================

document.getElementById('referansEkleBtn').addEventListener('click', function () {
    referansEklemeFormuGoster(null);
});

function referansEklemeFormuGoster(editIndex) {
    const ad     = editIndex !== null ? referanslar[editIndex].ad : '';
    const unvan  = editIndex !== null ? referanslar[editIndex].unvan : '';
    const email  = editIndex !== null ? referanslar[editIndex].email : '';
    const telefon = editIndex !== null ? referanslar[editIndex].telefon : '';

    const html = `
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal-card">
                <h4>${editIndex !== null ? 'Düzenle' : 'Yeni'} Referans</h4>
                <div class="field-group">
                    <input type="text" id="modalRefAd" placeholder="Ad Soyad" value="${ad}">
                </div>
                <div class="field-group">
                    <input type="text" id="modalRefUnvan" placeholder="Şirket / Unvan" value="${unvan}">
                </div>
                <div class="field-group">
                    <input type="email" id="modalRefEmail" placeholder="E-posta" value="${email}">
                </div>
                <div class="field-group">
                    <input type="tel" id="modalRefTelefon" placeholder="Telefon" value="${telefon}">
                </div>
                <div class="modal-actions">
                    <button type="button" class="btn-modal-cancel" id="modalIptal">İptal</button>
                    <button type="button" class="btn-modal-save" id="modalKaydet">${editIndex !== null ? 'Güncelle' : 'Ekle'}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('modalIptal').addEventListener('click', function () {
        document.getElementById('modalOverlay').remove();
    });

    document.getElementById('modalKaydet').addEventListener('click', function () {
        const a = document.getElementById('modalRefAd').value.trim();
        const u = document.getElementById('modalRefUnvan').value.trim();
        const e = document.getElementById('modalRefEmail').value.trim();
        const t = document.getElementById('modalRefTelefon').value.trim();

        if (!a) {
            alert('Ad Soyad zorunludur.');
            return;
        }

        if (editIndex !== null) {
            referanslar[editIndex] = { ad: a, unvan: u, email: e, telefon: t };
        } else {
            referanslar.push({ ad: a, unvan: u, email: e, telefon: t });
        }

        document.getElementById('modalOverlay').remove();
        referansListesiniGuncelle();
        veriKaydetVeOnizle();
    });
}



// ================================================================
// YETENEK TAG SİSTEMİ
// ================================================================


let yetenekler = [];

const yetenekInput = document.getElementById('yetenekInput');
const yetenekTags  = document.getElementById('yetenekTags');

yetenekInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const val = yetenekInput.value.trim();
        if (val && !yetenekler.includes(val)) {
            yetenekler.push(val);
            tagleriGuncelle();
            veriKaydetVeOnizle();
        }
        yetenekInput.value = '';
    }
});

function tagleriGuncelle() {
    yetenekTags.innerHTML = '';
    yetenekler.forEach(function (y, i) {
        const span = document.createElement('span');
        span.className = 'tag';
        span.innerHTML = `${y} <button type="button" class="tag-remove" data-index="${i}">&times;</button>`;
        yetenekTags.appendChild(span);
    });

    yetenekTags.querySelectorAll('.tag-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const idx = parseInt(btn.dataset.index);
            yetenekler.splice(idx, 1);
            tagleriGuncelle();
            veriKaydetVeOnizle();
        });
    });
}

// ================================================================
// İLGİ ALANLARI TAG SİSTEMİ
// ================================================================

let ilgiAlanlari = [];

const ilgiInput = document.getElementById('ilgiInput');
const ilgiTags  = document.getElementById('ilgiTags');

ilgiInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const val = ilgiInput.value.trim();
        if (val && !ilgiAlanlari.includes(val)) {
            ilgiAlanlari.push(val);
            ilgiTagleriGuncelle();
            veriKaydetVeOnizle();
        }
        ilgiInput.value = '';
    }
});

function ilgiTagleriGuncelle() {
    ilgiTags.innerHTML = '';
    ilgiAlanlari.forEach(function (ilgi, i) {
        const span = document.createElement('span');
        span.className = 'tag';
        span.innerHTML = `${ilgi} <button type="button" class="tag-remove" data-index="${i}">&times;</button>`;
        ilgiTags.appendChild(span);
    });

    ilgiTags.querySelectorAll('.tag-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const idx = parseInt(btn.dataset.index);
            ilgiAlanlari.splice(idx, 1);
            ilgiTagleriGuncelle();
            veriKaydetVeOnizle();
        });
    });
}

// ================================================================
// DİLLER SİSTEMİ
// ================================================================

let diller = [];

const dilEkleBtn = document.getElementById('dilEkleBtn');
const dilList    = document.getElementById('dilList');

dilEkleBtn.addEventListener('click', function () {
    dilEklemeSatiriGoster(null);
});

function dilEklemeSatiriGoster(editIndex) {
    const mevcutDil = editIndex !== null ? diller[editIndex] : { ad: '', seviye: 5 };

    const satir = document.createElement('div');
    satir.className = 'dil-entry';
    satir.dataset.index = editIndex !== null ? editIndex : '';

    satir.innerHTML = `
        <div class="field-group" style="margin:0;flex:1;">
            <input type="text" class="dil-ad-input" placeholder="Örn: İngilizce" value="${mevcutDil.ad}">
        </div>
        <input type="range" class="lang-level-slider" min="1" max="5" value="${mevcutDil.seviye}">
        <button type="button" class="btn-icon btn-delete" title="Sil">&#128465;</button>
    `;

    const adInput = satir.querySelector('.dil-ad-input');
    const slider  = satir.querySelector('.lang-level-slider');
    const silBtn  = satir.querySelector('.btn-delete');

    function guncelleVeKaydet() {
        const ad = adInput.value.trim();
        const seviye = parseInt(slider.value);
        const idx = satir.dataset.index;

        if (ad) {
            if (idx !== '') {
                diller[parseInt(idx)] = { ad: ad, seviye: seviye };
            } else {
                // Yeni satır — dizide yoksa ekle
                const existingIdx = diller.findIndex(function (d) { return d.ad === ad; });
                if (existingIdx === -1) {
                    diller.push({ ad: ad, seviye: seviye });
                    satir.dataset.index = diller.length - 1;
                } else {
                    diller[existingIdx].seviye = seviye;
                    satir.dataset.index = existingIdx;
                }
            }
            veriKaydetVeOnizle();
        }
    }

    adInput.addEventListener('input', guncelleVeKaydet);
    slider.addEventListener('input', guncelleVeKaydet);

    silBtn.addEventListener('click', function () {
        const idx = satir.dataset.index;
        if (idx !== '') {
            diller.splice(parseInt(idx), 1);
        }
        satir.remove();
        // Kalan satırların index'lerini yenile
        document.querySelectorAll('.dil-entry').forEach(function (el, i) {
            el.dataset.index = i;
        });
        veriKaydetVeOnizle();
    });

    dilList.appendChild(satir);
}


// ================================================================
// INPUT-FILLED SINIF YÖNETİMİ (Event Delegation — tüm sayfa)
// ================================================================

function checkInputState(element) {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.value.trim() !== '') {
            element.classList.add('input-filled');
        } else {
            element.classList.remove('input-filled');
        }
    }
}

// Tüm sayfadaki giriş ve odaktan çıkma hareketlerini dinle (dinamik alanlar dahil)
document.addEventListener('input', function (e) {
    checkInputState(e.target);
});
document.addEventListener('blur', function (e) {
    checkInputState(e.target);
}, true);

function refreshAllInputStates() {
    document.querySelectorAll('input, textarea').forEach(function (el) {
        checkInputState(el);
    });
}


// ================================================================
// CANLI VERİ BAĞLAMA (LIVE DATA BINDING)
// ================================================================

const yazdirBtn = document.getElementById('yazdirBtn');
const pdfBtn    = document.getElementById('pdfBtn');

const canliAlanlar = ['ad', 'soyad', 'email', 'telefon', 'adres', 'linkedin', 'unvan', 'ozet'];

canliAlanlar.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', function () {
            veriKaydetVeOnizle();
        });
        el.addEventListener('keyup', function () {
            veriKaydetVeOnizle();
        });
    }
});


function veriKaydetVeOnizle() {
    const ad        = document.getElementById('ad').value;
    const soyad     = document.getElementById('soyad').value;
    const email     = document.getElementById('email').value;
    const telefon   = document.getElementById('telefon').value;
    const adres     = document.getElementById('adres').value;
    const linkedin  = document.getElementById('linkedin').value;
    const unvan     = document.getElementById('unvan').value;
    const ozet      = document.getElementById('ozet').value;

    const data = {
        ad: ad.trim(),
        soyad: soyad.trim(),
        email: email.trim(),
        telefon: telefon.trim(),
        adres: adres.trim(),
        linkedin: linkedin.trim(),
        unvan: unvan.trim(),
        ozet: ozet.trim(),
        deneyimler: deneyimler,
        egitimler: egitimler,
        yetenekler: yetenekler,
        ilgiAlanlari: ilgiAlanlari,
        diller: diller,
        referanslar: referanslar
    };


    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    canliOnizlemeGuncelle();
}

function canliOnizlemeGuncelle() {
    const ad        = document.getElementById('ad').value.trim();
    const soyad     = document.getElementById('soyad').value.trim();
    const email     = document.getElementById('email').value.trim();
    const telefon   = document.getElementById('telefon').value.trim();
    const adres     = document.getElementById('adres').value.trim();
    const linkedin  = document.getElementById('linkedin').value.trim();
    const ozetMetin = document.getElementById('ozet').value.trim();
    const unvanMetin = document.getElementById('unvan').value.trim();

    // Mevcut tema sınıfını al
    const cvPreview = document.getElementById('cvPreview');
    const themeClass = cvPreview.className.split(' ').filter(function (c) {
        return c.startsWith('theme-');
    })[0] || 'theme-minimalist';

    // === SAYFA DAĞITICI: Tüm sayfaları baştan oluştur ===
    sayfalariOlustur(ad, soyad, email, telefon, adres, linkedin, ozetMetin, unvanMetin, themeClass);
}

// ================================================================
// SAYFA DAĞITICI (Page Distributor)
// ================================================================

function sayfalariOlustur(ad, soyad, email, telefon, adres, linkedin, ozetMetin, unvanMetin, themeClass) {
    const cvPreview = document.getElementById('cvPreview');

    // Eski tüm sayfaları temizle
    cvPreview.innerHTML = '';

    // === SAYFA 1: Sidebar (sol sütun) içeriğini oluştur ===
    const sidebarHTML = sidebarOlustur(ad, soyad, email, telefon, adres, linkedin);

    // === SAĞ SÜTUN BLOKLARI (görünür olanları topla) ===
    const bloklar = [];

    // İsim + Unvan (her zaman göster)
    bloklar.push({
        type: 'header',
        html: '<h1 class="cv-main-name">' + ((ad || soyad) ? (ad + ' ' + soyad) : 'Ad Soyad') + '</h1>' + (unvanMetin ? '<p class="cv-main-title">' + unvanMetin + '</p>' : '')
    });

    // Profil Özeti
    if (ozetMetin) {
        bloklar.push({
            type: 'section',
            html: '<div class="cv-main-section" id="cvMainOzetSection"><p class="cv-summary" id="cvMainOzet">' + ozetMetin + '</p></div>'
        });
    }

    // İş Deneyimi
    if (deneyimler.length > 0) {
        let html = '<div class="cv-main-section" id="cvMainDeneyimSection">';
        html += '<h6 class="cv-main-heading"><span class="heading-icon">&#128188;</span>İŞ DENEYİMİ</h6>';
        html += '<div class="timeline-container">';
        deneyimler.forEach(function (d) {
            const tarih = d.baslangic ? d.baslangic + (d.bitis ? ' - ' + d.bitis : '') : '';
            html += '<div class="timeline-item">';
            if (tarih) html += '<div class="timeline-date">' + tarih + '</div>';
            html += '<div class="timeline-title">' + d.pozisyon + '</div>';
            html += '<div class="timeline-sub">' + d.sirket + '</div>';
            html += '</div>';
        });
        html += '</div></div>';
        bloklar.push({ type: 'section', html: html });
    }

    // Eğitim
    if (egitimler.length > 0) {
        let html = '<div class="cv-main-section" id="cvMainEgitimSection">';
        html += '<h6 class="cv-main-heading"><span class="heading-icon">&#127891;</span>EĞİTİM</h6>';
        html += '<div class="timeline-container">';
        egitimler.forEach(function (e) {
            html += '<div class="timeline-item">';
            if (e.yil) html += '<div class="timeline-date">' + e.yil + '</div>';
            html += '<div class="timeline-title">' + e.bolum + '</div>';
            html += '<div class="timeline-sub">' + e.okul + '</div>';
            html += '</div>';
        });
        html += '</div></div>';
        bloklar.push({ type: 'section', html: html });
    }

    // Yetenekler
    if (yetenekler.length > 0) {
        let html = '<div class="cv-main-section" id="cvMainYetenekSection">';
        html += '<h6 class="cv-main-heading">&#128161; Yetenekler</h6>';
        yetenekler.forEach(function (y) {
            html += '<div class="cv-skill-row"><span class="cv-skill-name">' + y + '</span></div>';
        });
        html += '</div>';
        bloklar.push({ type: 'section', html: html });
    }

    // Referanslar
    if (referanslar.length > 0) {
        let html = '<div class="cv-main-section" id="cvMainReferansSection">';
        html += '<h6 class="cv-main-heading">&#128101; Referanslar</h6>';
        referanslar.forEach(function (r) {
            html += '<div class="cv-timeline-item"><div class="cv-timeline-dot"></div><div class="cv-timeline-content">';
            html += '<div class="cv-timeline-title">' + r.ad + '</div>';
            html += '<div class="cv-timeline-sub">' + r.unvan + (r.email ? ' · ' + r.email : '') + (r.telefon ? ' · ' + r.telefon : '') + '</div>';
            html += '</div></div>';
        });
        html += '</div>';
        bloklar.push({ type: 'section', html: html });
    }

    // === BLOKLARI SAYFALARA DAĞIT ===
    const SAYFA_YUKSEKLIK = 1123;
    let sayfaNo = 1;
    let mevcutSayfa = null;
    let mevcutMain = null;
    let mevcutYukseklik = 0;

    // Header bloğu (isim + unvan) her zaman ilk sayfada
    const headerBlok = bloklar.shift();

    function yeniSayfaOlustur() {
        const sayfa = document.createElement('div');
        sayfa.className = 'cv-page ' + themeClass;

        // Sol sütun
        const sol = document.createElement('div');
        sol.className = 'cv-sidebar';
        sol.innerHTML = sidebarHTML;

        // Sağ sütun
        const sag = document.createElement('div');
        sag.className = 'cv-main';

        sayfa.appendChild(sol);
        sayfa.appendChild(sag);

        // Sayfa numarası
        const numara = document.createElement('div');
        numara.className = 'cv-page-number';
        numara.textContent = sayfaNo + ' / ?';
        sayfa.appendChild(numara);

        cvPreview.appendChild(sayfa);
        return { sayfa: sayfa, main: sag };
    }

    // İlk sayfayı oluştur
    const ilk = yeniSayfaOlustur();
    mevcutSayfa = ilk.sayfa;
    mevcutMain = ilk.main;

    // Header'ı ekle (isim + unvan)
    mevcutMain.insertAdjacentHTML('beforeend', headerBlok.html);
    mevcutYukseklik = mevcutMain.scrollHeight;

    // Blokları sırayla ekle
    bloklar.forEach(function (blok) {
        // Geçici olarak bloğu ekle ve yüksekliği ölç
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = blok.html;
        const blokEl = tempDiv.firstElementChild;

        mevcutMain.appendChild(blokEl);
        const yeniYukseklik = mevcutMain.scrollHeight;

        if (yeniYukseklik > SAYFA_YUKSEKLIK) {
            // Taştı — bloğu sök, yeni sayfa oluştur
            mevcutMain.removeChild(blokEl);

            // Sayfa numarasını güncelle (geçici)
            sayfaNo++;
            const numaraEl = mevcutSayfa.querySelector('.cv-page-number');
            if (numaraEl) numaraEl.textContent = (sayfaNo - 1) + ' / ?';

            // Yeni sayfa oluştur
            const yeni = yeniSayfaOlustur();
            mevcutSayfa = yeni.sayfa;
            mevcutMain = yeni.main;
            mevcutYukseklik = 0;

            // Bloğu yeni sayfaya ekle
            mevcutMain.appendChild(blokEl);
            mevcutYukseklik = mevcutMain.scrollHeight;
        } else {
            mevcutYukseklik = yeniYukseklik;
        }
    });

    // === SON SAYFA NUMARALARINI GÜNCELLE ===
    const tumSayfalar = cvPreview.querySelectorAll('.cv-page');
    const toplamSayfa = tumSayfalar.length;
    tumSayfalar.forEach(function (s, i) {
        const numaraEl = s.querySelector('.cv-page-number');
        if (numaraEl) {
            numaraEl.textContent = (i + 1) + ' / ' + toplamSayfa;
        }
    });

    // === DİNAMİK ÇİZGİ KONTROLÜ ===
    tumSayfalar.forEach(function (s) {
        const sections = s.querySelectorAll('.cv-main .cv-main-section');
        sections.forEach(function (el) {
            el.style.borderBottom = '1px solid #e0e0e0';
        });
        const visibleSections = Array.from(sections);
        if (visibleSections.length > 0) {
            visibleSections[visibleSections.length - 1].style.borderBottom = 'none';
        }
    });

    // === SORUMLULUK REDDİ — Son sayfanın en altına sabit ===
    const sonSayfa = cvPreview.querySelectorAll('.cv-page');
    const sonSayfaEl = sonSayfa[sonSayfa.length - 1];
    if (sonSayfaEl) {
        const redDiv = document.createElement('div');
        redDiv.className = 'cv-disclaimer';
        redDiv.innerHTML =
            'Bu CV belgesi CVBuilder (cvbuilder) aracılığıyla oluşturulmuştur. ' +
            'Belgede yer alan tüm bilgilerin doğruluğu, gerçekliği ve güncelliği ' +
            'yalnızca belge sahibine aittir. CVBuilder platform yöneticisi, ' +
            'içerikteki herhangi bir bilgiden kaynaklanan doğrudan veya dolaylı ' +
            'zararlardan sorumlu tutulamaz.';
        sonSayfaEl.appendChild(redDiv);
    }
}

// ================================================================
// SİDEBAR OLUŞTURUCU (sol sütun HTML'i)
// ================================================================

function sidebarOlustur(ad, soyad, email, telefon, adres, linkedin) {
    let html = '';

    // Profil fotoğrafı
    html += '<div class="profile-image-container">';
    if (fotoDataURL) {
        html += '<img id="preview-profile-img" src="' + fotoDataURL + '" alt="Profil Fotoğrafı" style="width:100%;height:100%;border-radius:50%;border:3px solid #ffffff;object-fit:cover;display:block;">';
    } else {
        html += '<img id="preview-profile-img" src="" alt="Profil Fotoğrafı" style="display:none;">';
    }
    html += '</div>';

    // Kişisel Bilgiler
    html += '<div class="cv-sidebar-section">';
    html += '<h6 class="cv-sidebar-heading">Kişisel Bilgiler</h6>';
    html += '<p class="cv-sidebar-item" id="cvSidebarAdres">&#9906; ' + (adres || 'Adres bilgisi') + '</p>';
    html += '<p class="cv-sidebar-item" id="cvSidebarTel">&#9742; ' + (telefon || 'Telefon bilgisi') + '</p>';
    html += '<p class="cv-sidebar-item" id="cvSidebarEmail">&#9993; ' + (email || 'E-posta bilgisi') + '</p>';
    if (linkedin) {
        const linkedinGoster = linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//i, 'linkedin.com/');
        html += '<p class="cv-sidebar-item" id="cvSidebarLinkedin">&#128279; ' + linkedinGoster + '</p>';
    }
    html += '</div>';

    // İlgi Alanları
    if (ilgiAlanlari.length > 0) {
        html += '<div class="cv-sidebar-section" id="cvSidebarIlgiSection">';
        html += '<h6 class="cv-sidebar-heading">İlgi Alanları</h6>';
        ilgiAlanlari.forEach(function (ilgi) {
            html += '<p class="cv-sidebar-item">&#8226; ' + ilgi + '</p>';
        });
        html += '</div>';
    }

    // Diller
    if (diller.length > 0) {
        html += '<div class="cv-sidebar-section" id="cvSidebarDilSection">';
        html += '<h6 class="cv-sidebar-heading">Diller</h6>';
        diller.forEach(function (d) {
            const dolu = '&#9679;'.repeat(d.seviye);
            const bos = '&#9675;'.repeat(5 - d.seviye);
            html += '<div class="cv-sidebar-lang"><span>' + d.ad + '</span><span class="cv-dots">' + dolu + bos + '</span></div>';
        });
        html += '</div>';
    }

    return html;
}







// ================================================================
// FORM SUBMIT
// ================================================================

document.getElementById('cvForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('cvPreview').scrollIntoView({ behavior: 'smooth' });
});


// ================================================================
// RENK TEMASI SİSTEMİ (6 Tema)
// ================================================================

const themeSelect = document.getElementById('theme-select');
const cvPreview   = document.getElementById('cvPreview');
const THEME_KEY   = 'cv_selected_theme';

// Kayıtlı temayı yükle
(function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        // Tüm eski theme- sınıflarını temizle
        cvPreview.className = cvPreview.className.replace(/theme-\S+/g, '').trim();
        cvPreview.classList.add(savedTheme);
        themeSelect.value = savedTheme;
    } else {
        // Varsayılan: Minimalist
        cvPreview.classList.add('theme-minimalist');
        themeSelect.value = 'theme-minimalist';
    }
})();

// Tema değiştirme
themeSelect.addEventListener('change', function () {
    const selectedTheme = themeSelect.value;

    // Tüm eski theme- sınıflarını temizle
    cvPreview.className = cvPreview.className.replace(/theme-\S+/g, '').trim();

    // Yeni temayı ekle
    cvPreview.classList.add(selectedTheme);

    // localStorage'a kaydet
    localStorage.setItem(THEME_KEY, selectedTheme);
    canliOnizlemeGuncelle();
});



// ================================================================
// YAZDIR (window.print) — Ölçekleme sıfırlama + baskı

// ================================================================

yazdirBtn.addEventListener('click', function () {
    sorumlulukOnayGoster(function () {
        const cvPreview  = document.getElementById('cvPreview');
        const rightPanel = document.getElementById('rightPanel');
        const splitScreen = document.getElementById('splitScreen');

        window.removeEventListener('resize', autoFitCV);

        cvPreview.style.transform       = 'none';
        cvPreview.style.webkitTransform = 'none';
        cvPreview.style.transformOrigin = 'top left';
        cvPreview.style.display         = 'block';

        rightPanel.style.padding  = '0';
        rightPanel.style.overflow = 'visible';
        rightPanel.style.width    = '794px';

        splitScreen.style.display = 'block';

        const ad    = (document.getElementById('ad').value || '').trim();
        const soyad = (document.getElementById('soyad').value || '').trim();
        const name  = (ad || soyad) ? (ad + ' ' + soyad).trim() : 'cv';
        const slug  = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const originalTitle = document.title;
        document.title = slug + '-cv';

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                window.print();

                document.title = originalTitle;

                cvPreview.style.display         = '';
                cvPreview.style.transform       = '';
                cvPreview.style.webkitTransform = '';

                rightPanel.style.padding  = '';
                rightPanel.style.overflow = '';
                rightPanel.style.width    = '';

                splitScreen.style.display = '';

                window.addEventListener('resize', autoFitCV);
                autoFitCV();
            });
        });
    });
});





// ================================================================
// PDF İNDİR (html2canvas + jsPDF)
// ================================================================

pdfBtn.addEventListener('click', function () {
    sorumlulukOnayGoster(async function () {
        const cvPreview = document.getElementById('cvPreview');
        const sayfalar  = cvPreview.querySelectorAll('.cv-page');

        if (sayfalar.length === 0) {
            alert('Önce CV bilgilerini doldurun.');
            return;
        }

        const ad    = (document.getElementById('ad').value || '').trim();
        const soyad = (document.getElementById('soyad').value || '').trim();
        let dosyaAdi = 'cv.pdf';
        if (ad || soyad) {
            dosyaAdi = (ad + ' ' + soyad).trim()
                .toLowerCase()
                .replace(/[ğ]/g, 'g').replace(/[ü]/g, 'u')
                .replace(/[ş]/g, 's').replace(/[ı]/g, 'i')
                .replace(/[ö]/g, 'o').replace(/[ç]/g, 'c')
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-') + '-cv.pdf';
        }

        const originalText = pdfBtn.textContent;
        pdfBtn.textContent = 'Hazırlanıyor...';
        pdfBtn.disabled = true;

        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [794, 1122],
                hotfixes: ['px_scaling']
            });

            for (let i = 0; i < sayfalar.length; i++) {
                const sayfa = sayfalar[i];

                const imgEls = sayfa.querySelectorAll('img');
                imgEls.forEach(function(img) {
                    if (img.src && img.src.startsWith('data:')) {
                        img.setAttribute('crossorigin', 'anonymous');
                    }
                });

                const canvas = await html2canvas(sayfa, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    logging: false,
                    width: 794,
                    height: 1122,
                    windowWidth: 794,
                    windowHeight: 1122,
                    x: 0,
                    y: 0,
                    scrollX: 0,
                    scrollY: 0,
                    backgroundColor: '#ffffff'
                });

                const imgData = canvas.toDataURL('image/jpeg', 0.95);

                if (i > 0) {
                    pdf.addPage([794, 1122], 'portrait');
                }

                pdf.addImage(imgData, 'JPEG', 0, 0, 794, 1122);
            }

            pdf.save(dosyaAdi);

        } catch (err) {
            console.error('PDF hatası:', err);
            alert('PDF oluşturulurken bir hata oluştu: ' + err.message);
        } finally {
            pdfBtn.textContent = originalText;
            pdfBtn.disabled = false;
        }
    });
});



// ================================================================
// LOCALSTORAGE'DAN VERİ YÜKLE
// ================================================================

function tumVeriyiYukle(data) {
    if (data.ad)      document.getElementById('ad').value      = data.ad;
    if (data.soyad)   document.getElementById('soyad').value   = data.soyad;
    if (data.email)   document.getElementById('email').value   = data.email;
    if (data.telefon) document.getElementById('telefon').value = data.telefon;
    if (data.adres)   document.getElementById('adres').value   = data.adres;
    if (data.ozet)    document.getElementById('ozet').value    = data.ozet;
    if (data.unvan)   document.getElementById('unvan').value   = data.unvan;
    if (data.linkedin) document.getElementById('linkedin').value = data.linkedin;

    if (data.deneyimler && Array.isArray(data.deneyimler)) {
        deneyimler = data.deneyimler;
        deneyimListesiniGuncelle();
    }

    if (data.egitimler && Array.isArray(data.egitimler)) {
        egitimler = data.egitimler;
        egitimListesiniGuncelle();
    }

    if (data.yetenekler && Array.isArray(data.yetenekler)) {
        yetenekler = data.yetenekler;
        tagleriGuncelle();
    }

    if (data.ilgiAlanlari && Array.isArray(data.ilgiAlanlari)) {
        ilgiAlanlari = data.ilgiAlanlari;
        ilgiTagleriGuncelle();
    }

    if (data.diller && Array.isArray(data.diller)) {
        diller = data.diller;
        // Dilleri sol paneldeki satırlara geri yükle
        dilList.innerHTML = '';
        diller.forEach(function (dil, i) {
            dilEklemeSatiriGoster(i);
        });
    }

    if (data.referanslar && Array.isArray(data.referanslar)) {
        referanslar = data.referanslar;
        referansListesiniGuncelle();
    }

    // Dolu alanları işaretle (100ms gecikme ile DOM'un oturmasını bekle)
    setTimeout(refreshAllInputStates, 100);

}

// ================================================================
// RESPONSIVE AUTOFIT — A4 önizlemesini ekrana sığdır
// ================================================================

function autoFitCV() {
    const rightPanel = document.getElementById('rightPanel');
    const cvPreview  = document.getElementById('cvPreview');
    if (!rightPanel || !cvPreview) return;

    const availableWidth = rightPanel.clientWidth - 48;
    const cvWidth = 794;

    if (availableWidth > 0 && availableWidth < cvWidth) {
        const scale = Math.max(availableWidth / cvWidth, 0.35);
        // Ölçeklenmiş yüksekliği hesapla — kaybolan boşluğu telafi et
        const sayfaSayisi = cvPreview.querySelectorAll('.cv-page').length || 1;
        const gercekYukseklik = (1123 * sayfaSayisi + 20 * (sayfaSayisi - 1)) * scale;
        cvPreview.style.transform       = 'scale(' + scale + ')';
        cvPreview.style.webkitTransform = 'scale(' + scale + ')';
        cvPreview.style.height          = (1123 * sayfaSayisi + 20 * (sayfaSayisi - 1)) + 'px';
        cvPreview.style.marginBottom    = (gercekYukseklik - (1123 * sayfaSayisi + 20 * (sayfaSayisi - 1))) + 'px';
    } else {
        cvPreview.style.transform       = 'scale(1)';
        cvPreview.style.webkitTransform = 'scale(1)';
        cvPreview.style.height          = '';
        cvPreview.style.marginBottom    = '0';
    }
}




// Sayfa tamamen hazır olduğunda ve tüm elementler (resimler dahil) çizildiğinde çalıştır
window.addEventListener('load', function() {
    // Elementlerin yerleşmesi için tarayıcıya 200 milisaniyelik güvenli bir pay bırak
    setTimeout(autoFitCV, 200);
});

// Pencere boyutu her değiştiğinde anlık çalıştır
window.addEventListener('resize', autoFitCV);

// ================================================================
// YASAL UYARI MODALI — Tab Sistemi
// ================================================================

(function() {
    const modalBackdrop  = document.getElementById('legalModalBackdrop');
    const modal          = document.getElementById('legalModal');
    const acBtn          = document.getElementById('gizlilikModalBtn');
    const kapatBtn       = document.getElementById('legalModalKapat');
    const kapatBtn2      = document.getElementById('legalModalKapatBtn');

    if (!modal) return;

    function modalAc() {
        modalBackdrop.classList.remove('hidden');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function modalKapat() {
        modalBackdrop.classList.add('hidden');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (acBtn)     acBtn.addEventListener('click', modalAc);
    if (kapatBtn)  kapatBtn.addEventListener('click', modalKapat);
    if (kapatBtn2) kapatBtn2.addEventListener('click', modalKapat);
    if (modalBackdrop) modalBackdrop.addEventListener('click', modalKapat);

    // ESC ile kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') modalKapat();
    });

    // Tab geçişi
    document.querySelectorAll('.legal-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.legal-tab').forEach(function(t) {
                t.classList.remove('active');
            });
            document.querySelectorAll('.legal-tab-content').forEach(function(c) {
                c.classList.remove('active');
            });
            tab.classList.add('active');
            const hedef = document.getElementById('tab-' + tab.dataset.tab);
            if (hedef) hedef.classList.add('active');
        });
    });
})();

// ================================================================
// SORUMLULUK ONAYI POPUP
// ================================================================

function sorumlulukOnayGoster(onayCallback) {
    // Zaten açıksa tekrar açma
    if (document.getElementById('sorumlulukModal')) return;

    const backdrop = document.createElement('div');
    backdrop.id = 'sorumlulukBackdrop';
    backdrop.className = 'sorumluluk-backdrop';

    const modal = document.createElement('div');
    modal.id = 'sorumlulukModal';
    modal.className = 'sorumluluk-modal';
    modal.innerHTML = `
        <div class="sorumluluk-icon">&#9888;</div>
        <h3 class="sorumluluk-title">Bilgi Doğrulama Onayı</h3>
        <p class="sorumluluk-text">
            CV'nizde yer alan tüm bilgilerin (ad, soyad, iletişim bilgileri,
            iş deneyimi, eğitim ve diğer içerikler) <strong>doğru, güncel ve
            gerçeği yansıtır</strong> nitelikte olduğunu beyan etmektesiniz.
        </p>
        <p class="sorumluluk-text">
            CVBuilder platform yöneticisi, belgede yer alan bilgilerin
            doğruluğundan veya bu bilgilerden kaynaklanan herhangi bir
            zarardan <strong>sorumlu tutulamaz.</strong> Tüm hukuki ve
            ahlaki sorumluluk münhasıran size aittir.
        </p>
        <div class="sorumluluk-checkbox-row">
            <input type="checkbox" id="sorumlulukCheck">
            <label for="sorumlulukCheck">
                Yukarıdaki koşulları okudum, anladım ve kabul ediyorum.
            </label>
        </div>
        <div class="sorumluluk-actions">
            <button class="sorumluluk-btn-iptal" id="sorumlulukIptal">Vazgeç</button>
            <button class="sorumluluk-btn-onayla" id="sorumlulukOnayla" disabled>
                Onayla ve Devam Et
            </button>
        </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Checkbox kontrolü
    const check   = modal.querySelector('#sorumlulukCheck');
    const onayBtn = modal.querySelector('#sorumlulukOnayla');
    const iptalBtn = modal.querySelector('#sorumlulukIptal');

    check.addEventListener('change', function () {
        onayBtn.disabled = !check.checked;
    });

    function kapat() {
        backdrop.remove();
        modal.remove();
        document.body.style.overflow = '';
    }

    iptalBtn.addEventListener('click', kapat);
    backdrop.addEventListener('click', kapat);

    document.addEventListener('keydown', function escKapat(e) {
        if (e.key === 'Escape') {
            kapat();
            document.removeEventListener('keydown', escKapat);
        }
    });

    onayBtn.addEventListener('click', function () {
        if (!check.checked) return;
        kapat();
        onayCallback();
    });
}

