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
const TEMPLATE_KEY = 'cvBuildTemplate';
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
    // Kayıtlı şablonu yükle
    const savedTemplate = localStorage.getItem(TEMPLATE_KEY);
    if (savedTemplate) {
        sablonDegistir(savedTemplate);
    }
});

sifirlaBtn.addEventListener('click', function () {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TEMPLATE_KEY);
    localStorage.removeItem(PHOTO_KEY);
    savedAlert.classList.add('hidden');
    landingPage.classList.add('hidden');
    appContainer.classList.remove('hidden');
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

const cvContent = document.getElementById('cvContent');
const yazdirBtn = document.getElementById('yazdirBtn');
const pdfBtn    = document.getElementById('pdfBtn');

const canliAlanlar = ['ad', 'soyad', 'email', 'telefon', 'adres', 'ozet'];

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
    const ozet      = document.getElementById('ozet').value;

    const data = {
        ad: ad.trim(),
        soyad: soyad.trim(),
        email: email.trim(),
        telefon: telefon.trim(),
        adres: adres.trim(),
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

    // === SAĞ SÜTUN: İsim + Unvan ===
    const nameEl = document.querySelector('#cvPreview .cv-main-name');
    if (nameEl) {
        nameEl.textContent = (ad || soyad) ? (ad + ' ' + soyad) : 'Ad Soyad';
    }

    // === SAĞ SÜTUN: Profil Özeti (Hakkımda) ===
    const ozetEl = document.getElementById('cvMainOzet');
    const ozetMetin = document.getElementById('ozet').value.trim();
    if (ozetEl) {
        if (ozetMetin) {
            ozetEl.textContent = ozetMetin;
            ozetEl.style.display = 'block';
        } else {
            ozetEl.textContent = '';
            ozetEl.style.display = 'none';
        }
    }



    // === SİDEBAR: Kişisel Bilgiler ===
    const sidebarAdres = document.getElementById('cvSidebarAdres');
    const sidebarTel   = document.getElementById('cvSidebarTel');
    const sidebarEmail = document.getElementById('cvSidebarEmail');

    if (sidebarAdres) sidebarAdres.innerHTML = adres ? '&#9906; ' + adres : '&#9906; Adres bilgisi';
    if (sidebarTel)   sidebarTel.innerHTML   = telefon ? '&#9742; ' + telefon : '&#9742; Telefon bilgisi';
    if (sidebarEmail) sidebarEmail.innerHTML = email ? '&#9993; ' + email : '&#9993; E-posta bilgisi';

    // === SİDEBAR: İlgi Alanları ===
    const sidebarIlgiler = document.getElementById('cvSidebarIlgiler');
    if (sidebarIlgiler) {
        let html = '';
        if (ilgiAlanlari.length > 0) {
            ilgiAlanlari.forEach(function (ilgi) {
                html += `<p class="cv-sidebar-item">&#8226; ${ilgi}</p>`;
            });
        } else {
            html = `<p class="cv-sidebar-item" style="color:#8e9db0;">Henüz eklenmedi</p>`;
        }
        sidebarIlgiler.innerHTML = html;
    }

    // === SİDEBAR: Diller ===
    const sidebarDiller = document.getElementById('cvSidebarDiller');
    if (sidebarDiller) {
        let html = '';
        if (diller.length > 0) {
            diller.forEach(function (d) {
                const dolu = '&#9679;'.repeat(d.seviye);
                const bos = '&#9675;'.repeat(5 - d.seviye);
                html += `<div class="cv-sidebar-lang"><span>${d.ad}</span><span class="cv-dots">${dolu}${bos}</span></div>`;
            });
        } else {
            html = `<p class="cv-sidebar-item" style="color:#8e9db0;">Henüz eklenmedi</p>`;
        }
        sidebarDiller.innerHTML = html;
    }

    // === SİDEBAR: Profil Fotoğrafı ===
    const previewImg = document.getElementById('preview-profile-img');
    if (previewImg) {
        if (fotoDataURL) {
            previewImg.src = fotoDataURL;
            previewImg.style.setProperty('display', 'block', 'important');
        } else {
            previewImg.src = '';
            previewImg.style.setProperty('display', 'none', 'important');
        }
    }


    // === SAĞ SÜTUN: İş Deneyimi ===
    const deneyimContainer = document.getElementById('cvMainDeneyim');
    if (deneyimContainer) {
        let html = '';
        if (deneyimler.length > 0) {
            deneyimler.forEach(function (d) {
                html += `<div class="cv-timeline-item">`;
                html += `<div class="cv-timeline-dot"></div>`;
                html += `<div class="cv-timeline-content">`;
                html += `<div class="cv-timeline-title">${d.sirket}</div>`;
                html += `<div class="cv-timeline-sub">${d.pozisyon}${d.baslangic ? ' · ' + d.baslangic + (d.bitis ? ' - ' + d.bitis : '') : ''}</div>`;
                html += `</div></div>`;
            });
        } else {
            html = `<p style="color:#aaa;font-size:8.5pt;">Henüz deneyim eklenmedi.</p>`;
        }
        deneyimContainer.innerHTML = html;
    }

    // === SAĞ SÜTUN: Eğitim ===
    const egitimContainer = document.getElementById('cvMainEgitim');
    if (egitimContainer) {
        let html = '';
        if (egitimler.length > 0) {
            egitimler.forEach(function (e) {
                html += `<div class="cv-timeline-item">`;
                html += `<div class="cv-timeline-dot"></div>`;
                html += `<div class="cv-timeline-content">`;
                html += `<div class="cv-timeline-title">${e.okul}</div>`;
                html += `<div class="cv-timeline-sub">${e.bolum}${e.yil ? ' · ' + e.yil : ''}</div>`;
                html += `</div></div>`;
            });
        } else {
            html = `<p style="color:#aaa;font-size:8.5pt;">Henüz eğitim eklenmedi.</p>`;
        }
        egitimContainer.innerHTML = html;
    }

    // === SAĞ SÜTUN: Yetenekler ===
    const yetenekContainer = document.getElementById('cvMainYetenek');
    if (yetenekContainer) {
        let html = '';
        if (yetenekler.length > 0) {
            yetenekler.forEach(function (y) {
                html += `<div class="cv-skill-row">`;
                html += `<span class="cv-skill-name">${y}</span>`;
                html += `<span class="cv-skill-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>`;
                html += `</div>`;
            });
        } else {
            html = `<p style="color:#aaa;font-size:8.5pt;">Henüz yetenek eklenmedi.</p>`;
        }
        yetenekContainer.innerHTML = html;
    }

    // === SAĞ SÜTUN: Referanslar ===
    const referansContainer = document.getElementById('cvMainReferans');
    if (referansContainer) {
        let html = '';
        if (referanslar.length > 0) {
            referanslar.forEach(function (r) {
                html += `<div class="cv-timeline-item">`;
                html += `<div class="cv-timeline-dot"></div>`;
                html += `<div class="cv-timeline-content">`;
                html += `<div class="cv-timeline-title">${r.ad}</div>`;
                html += `<div class="cv-timeline-sub">${r.unvan}${r.email ? ' · ' + r.email : ''}${r.telefon ? ' · ' + r.telefon : ''}</div>`;
                html += `</div></div>`;
            });
        } else {
            html = `<p style="color:#aaa;font-size:8.5pt;">Henüz referans eklenmedi.</p>`;
        }
        referansContainer.innerHTML = html;
    }
}



// ================================================================
// FORM SUBMIT
// ================================================================

document.getElementById('cvForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('cvPreview').scrollIntoView({ behavior: 'smooth' });
});


// ================================================================
// ŞABLON DROPDOWN
// ================================================================

const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu   = document.getElementById('dropdownMenu');
const cvPreview      = document.getElementById('cvPreview');


dropdownToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', function () {
    dropdownMenu.classList.add('hidden');
});

dropdownMenu.addEventListener('click', function (e) {
    e.stopPropagation();
});

document.querySelectorAll('.dropdown-item').forEach(function (item) {
    item.addEventListener('click', function () {
        const template = item.dataset.template;
        sablonDegistir(template);
        dropdownMenu.classList.add('hidden');
    });
});

function sablonDegistir(template) {
    cvPreview.className = 'template-' + template;
    const names = {
        minimalist: 'Minimalist',
        modern: 'Modern',
        akademik: 'Akademik'
    };
    dropdownToggle.innerHTML = names[template] + ' &#9660;';
    localStorage.setItem(TEMPLATE_KEY, template);
}


// ================================================================
// YAZDIR (window.print)
// ================================================================

yazdirBtn.addEventListener('click', function () {
    window.print();
});

// ================================================================
// PDF İNDİR (html2pdf.js)
// ================================================================

pdfBtn.addEventListener('click', function () {
    const element = document.getElementById('cvPreview');

    // Dinamik dosya adı oluştur
    const ad    = (document.getElementById('ad').value || '').trim();
    const soyad = (document.getElementById('soyad').value || '').trim();
    let dosyaAdi = 'cv-sablonu.pdf';

    if (ad || soyad) {
        const tamIsim = (ad + ' ' + soyad).trim();
        // Küçük harfe çevir, Türkçe karakterleri temizle, boşlukları tire yap
        dosyaAdi = tamIsim
            .toLowerCase()
            .replace(/[ğ]/g, 'g')
            .replace(/[ü]/g, 'u')
            .replace(/[ş]/g, 's')
            .replace(/[ı]/g, 'i')
            .replace(/[ö]/g, 'o')
            .replace(/[ç]/g, 'c')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '') + '-cv.pdf';
    }

    const originalText = pdfBtn.textContent;
    pdfBtn.textContent = 'İndiriliyor...';
    pdfBtn.disabled = true;

    const opt = {
        margin: 0,
        filename: dosyaAdi,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: [210, 298], orientation: 'portrait' },


        pagebreak: { mode: 'avoid-all' }
    };



    html2pdf().set(opt).from(element).save().then(function () {
        pdfBtn.textContent = originalText;
        pdfBtn.disabled = false;
    }).catch(function (err) {
        console.error('PDF hatası:', err);
        pdfBtn.textContent = originalText;
        pdfBtn.disabled = false;
        alert('PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
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


