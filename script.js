// ================================================================
// i18n — ÇOKLU DİL SİSTEMİ
// ================================================================

const LANG_KEY = 'cvBuilderLang';

const i18n = {

    tr: {
        // Navbar
        navPageTitle: 'cvobotu.com — Ücretsiz CV Oluşturucu',
        navBadge: '100% Ücretsiz & Gizli',
        // Hero
        heroBadge: '✦ Tarayıcı tabanlı · Kayıt yok · Veri gönderilmez',
        heroTitle1: 'Profesyonel CV\'nizi',
        heroTitle2: '3 Dakikada',
        heroTitle3: 'Hazırlayın',
        heroSub: 'Ücretsiz, hızlı ve tamamen tarayıcınızda çalışır.\nHiçbir veriniz sunucuya gönderilmez.',
        heroF1: 'Kayıt gerektirmez',
        heroF2: 'PDF indirme',
        heroF3: 'Canlı önizleme',
        heroF4: '6 profesyonel tema',
        // Kayıtlı banner
        savedTitle: 'Kayıtlı bir CV\'niz bulunuyor!',
        savedSub: 'Kaldığınız yerden devam edebilirsiniz.',
        savedDevam: '▶ Kaldığın Yerden Devam Et',
        savedSifirla: 'Sıfırla ve Yeni CV Oluştur',
        // Şablonlar
        templatesLabel: 'ŞABLON SEÇ',
        templatesTitle: 'Bir şablonla başla',
        templatesSub: 'Tüm şablonlar PDF olarak indirilebilir ve 6 farklı renk temasını destekler.',
        templateBtn: 'Bu Şablonla Başla →',
        t1name: 'Minimalist', t1desc: 'Temiz ve sade. Her sektöre uygun.',
        t2name: 'Modern Zümrüt', t2desc: 'Doğal ve modern. Dikkat çekici profil.',
        t3name: 'Kreatif Bordo', t3desc: 'Güçlü ve özgün. Yaratıcı sektörler için.',
        t4name: 'Teknoloji Karbon', t4desc: 'Minimalist ve tech. IT & yazılım için.',
        t5name: 'Elegant Vizon', t5desc: 'Sofistike ve zarif. Üst düzey profiller için.',
        t6name: 'Saf Safir', t6desc: 'Kurumsal ve güvenilir. Finans & hukuk için.',
        editorBadge: '✦ Editörün Seçimi',
        // Footer
        footerSub: 'Tüm veriler yalnızca tarayıcınızda saklanır. Sunucuya hiçbir şey gönderilmez.',
        footerPrivacy: 'Gizlilik & KVKK',
        footerCookie: 'Çerez Politikası',
        footerTerms: 'Kullanım Koşulları',
        footerQuick: 'Hızlı Özet',
        footerCopy: '© 2025 cvobotu.com. Tüm hakları saklıdır.',
        // Sol panel
        panelTitle: 'CV Bilgileri',
        btnBack: '← Ana Sayfa',
        // Accordion
        accKisisel: 'Kişisel Bilgiler',
        accDeneyim: 'İş Deneyimi',
        accEgitim: 'Eğitim',
        accYetenek: 'Yetenekler',
        accIlgi: 'İlgi Alanları',
        accDiller: 'Diller',
        accReferans: 'Referanslar',
        // Form placeholder
        phAd: 'Ad',
        phSoyad: 'Soyad',
        phEmail: 'E-posta',
        phTelefon: 'Telefon (isteğe bağlı)',
        phAdres: 'Adres (isteğe bağlı)',
        phLinkedin: 'LinkedIn URL (isteğe bağlı)',
        phUnvan: 'Unvan / Pozisyon (isteğe bağlı)',
        phOzet: 'Kısa profil özeti...',
        phYetenek: 'Bir yetenek yazıp Enter\'a basın',
        phIlgi: 'Örn: Kitap Okumak, Satranç (Yazıp Enter\'a basın)',
        phDil: 'Örn: İngilizce',
        btnFotoEkle: '+ Fotoğraf Ekle',
        btnFotoDegistir: 'Fotoğrafı Değiştir',
        btnYeniEkle: '+ Yeni Ekle',
        btnYeniDil: '+ Yeni Dil Ekle',
        btnYeniReferans: '+ Yeni Referans Ekle',
        // Toolbar
        themeLabel: 'Minimalist',
        btnPdf: 'PDF İndir',
        // Modal deneyim
        modalDeneyimBaslik: 'İş Deneyimi',
        modalEgitimBaslik: 'Eğitim',
        modalReferansBaslik: 'Referans',
        phSirket: 'Şirket adı',
        phPozisyon: 'Pozisyon',
        phBaslangic: 'Başlangıç (örn: 2020)',
        phBitis: 'Bitiş (örn: 2023 veya Devam)',
        phOkul: 'Okul adı',
        phBolum: 'Bölüm',
        phYil: 'Yıl (örn: 2018-2022)',
        phRefAd: 'Ad Soyad',
        phRefUnvan: 'Şirket / Unvan',
        phRefEmail: 'E-posta',
        phRefTelefon: 'Telefon',
        btnIptal: 'İptal',
        btnEkle: 'Ekle',
        btnGuncelle: 'Güncelle',
        btnDuzenle: 'Düzenle',
        alertSirket: 'Şirket ve pozisyon zorunludur.',
        alertOkul: 'Okul ve bölüm zorunludur.',
        alertRefAd: 'Ad Soyad zorunludur.',
        // CV önizleme
        cvAdSoyad: 'Ad Soyad',
        cvKisiselBilgiler: 'Kişisel Bilgiler',
        cvIlgiAlanlari: 'İlgi Alanları',
        cvDiller: 'Diller',
        cvIsDeneyimi: 'İŞ DENEYİMİ',
        cvEgitim: 'EĞİTİM',
        cvYetenekler: 'Yetenekler',
        cvReferanslar: 'Referanslar',
        // Sorumluluk onayı
        onayTitle: 'Bilgi Doğrulama Onayı',
        onayText1: 'CV\'nizde yer alan tüm bilgilerin (ad, soyad, iletişim bilgileri, iş deneyimi, eğitim ve diğer içerikler) doğru, güncel ve gerçeği yansıtır nitelikte olduğunu beyan etmektesiniz.',
        onayText2: 'cvobotu.com platform yöneticisi, belgede yer alan bilgilerin doğruluğundan veya bu bilgilerden kaynaklanan herhangi bir zarardan sorumlu tutulamaz. Tüm hukuki ve ahlaki sorumluluk münhasıran size aittir.',
        onayCheck: 'Yukarıdaki koşulları okudum, anladım ve kabul ediyorum.',
        onayVazgec: 'Vazgeç',
        onayOnayla: 'Onayla ve Devam Et',
        // Disclaimer
        disclaimer: 'Bu CV belgesi cvobotu.com aracılığıyla oluşturulmuştur. Belgede yer alan tüm bilgilerin doğruluğu, gerçekliği ve güncelliği yalnızca belge sahibine aittir. cvobotu.com platform yöneticisi, içerikteki herhangi bir bilgiden kaynaklanan doğrudan veya dolaylı zararlardan sorumlu tutulamaz.',
        // Kırpma modal
        cropTitle: 'Fotoğrafı Kırp',
        cropIptal: 'İptal',
        cropKaydet: 'Kırp ve Kaydet',
        // Yasal modal
        legalKvkk: 'KVKK',
        legalSorumluluk: 'Sorumluluk',
        legalCerez: 'Çerez',
        legalKullanim: 'Kullanım',
        legalTamMetin: 'Tam Yasal Metni Görüntüle ↗',
        legalKapat: 'Anladım, Kapat',
        // Rotate warning
        rotateTitle: 'Lütfen cihazınızı yatay çevirin',
        rotateSub: 'Daha iyi bir deneyim için tabletinizi veya telefonunuzu yan çevirin.',
        // PDF hazırlanıyor
        pdfLoading: 'Hazırlanıyor...',
        // Adres / tel placeholder CV
        cvAdres: 'Adres bilgisi',
        cvTel: 'Telefon bilgisi',
        cvEmail: 'E-posta bilgisi',
        cvOlusturBtn: 'CV Oluştur',
    },

    en: {
        navPageTitle: 'cvobotu.com — Free CV Builder',
        navBadge: '100% Free & Private',
        heroBadge: '✦ Browser-based · No signup · No data sent',
        heroTitle1: 'Create Your Professional',
        heroTitle2: 'CV in 3 Minutes',
        heroTitle3: '',
        heroSub: 'Free, fast and runs entirely in your browser.\nNone of your data is sent to any server.',
        heroF1: 'No registration required',
        heroF2: 'PDF download',
        heroF3: 'Live preview',
        heroF4: '6 professional themes',
        savedTitle: 'You have a saved CV!',
        savedSub: 'You can continue where you left off.',
        savedDevam: '▶ Continue Where You Left Off',
        savedSifirla: 'Reset and Create New CV',
        templatesLabel: 'CHOOSE TEMPLATE',
        templatesTitle: 'Start with a template',
        templatesSub: 'All templates can be downloaded as PDF and support 6 color themes.',
        templateBtn: 'Start with This Template →',
        t1name: 'Minimalist', t1desc: 'Clean and simple. Suitable for every sector.',
        t2name: 'Modern Emerald', t2desc: 'Natural and modern. Eye-catching profile.',
        t3name: 'Creative Bordeaux', t3desc: 'Bold and unique. For creative sectors.',
        t4name: 'Tech Carbon', t4desc: 'Minimalist and tech. For IT & software.',
        t5name: 'Elegant Mink', t5desc: 'Sophisticated and elegant. For senior profiles.',
        t6name: 'Pure Sapphire', t6desc: 'Corporate and reliable. For finance & law.',
        editorBadge: '✦ Editor\'s Choice',
        footerSub: 'All data is stored only in your browser. Nothing is sent to the server.',
        footerPrivacy: 'Privacy & GDPR',
        footerCookie: 'Cookie Policy',
        footerTerms: 'Terms of Use',
        footerQuick: 'Quick Summary',
        footerCopy: '© 2025 cvobotu.com. All rights reserved.',
        panelTitle: 'CV Information',
        btnBack: '← Home',
        accKisisel: 'Personal Information',
        accDeneyim: 'Work Experience',
        accEgitim: 'Education',
        accYetenek: 'Skills',
        accIlgi: 'Interests',
        accDiller: 'Languages',
        accReferans: 'References',
        phAd: 'First Name',
        phSoyad: 'Last Name',
        phEmail: 'Email',
        phTelefon: 'Phone (optional)',
        phAdres: 'Address (optional)',
        phLinkedin: 'LinkedIn URL (optional)',
        phUnvan: 'Title / Position (optional)',
        phOzet: 'Short profile summary...',
        phYetenek: 'Type a skill and press Enter',
        phIlgi: 'e.g. Reading, Chess (press Enter)',
        phDil: 'e.g. English',
        btnFotoEkle: '+ Add Photo',
        btnFotoDegistir: 'Change Photo',
        btnYeniEkle: '+ Add New',
        btnYeniDil: '+ Add New Language',
        btnYeniReferans: '+ Add New Reference',
        themeLabel: 'Minimalist',
        btnPdf: 'Download PDF',
        modalDeneyimBaslik: 'Work Experience',
        modalEgitimBaslik: 'Education',
        modalReferansBaslik: 'Reference',
        phSirket: 'Company name',
        phPozisyon: 'Position',
        phBaslangic: 'Start (e.g. 2020)',
        phBitis: 'End (e.g. 2023 or Present)',
        phOkul: 'School name',
        phBolum: 'Department',
        phYil: 'Year (e.g. 2018-2022)',
        phRefAd: 'Full Name',
        phRefUnvan: 'Company / Title',
        phRefEmail: 'Email',
        phRefTelefon: 'Phone',
        btnIptal: 'Cancel',
        btnEkle: 'Add',
        btnGuncelle: 'Update',
        btnDuzenle: 'Edit',
        alertSirket: 'Company and position are required.',
        alertOkul: 'School and department are required.',
        alertRefAd: 'Full name is required.',
        cvAdSoyad: 'Full Name',
        cvKisiselBilgiler: 'Personal Information',
        cvIlgiAlanlari: 'Interests',
        cvDiller: 'Languages',
        cvIsDeneyimi: 'WORK EXPERIENCE',
        cvEgitim: 'EDUCATION',
        cvYetenekler: 'Skills',
        cvReferanslar: 'References',
        onayTitle: 'Information Verification',
        onayText1: 'You declare that all information in your CV (name, contact details, work experience, education and other content) is accurate, current and truthful.',
        onayText2: 'cvobotu.com platform manager cannot be held responsible for the accuracy of the information or any damage arising from it. All legal and moral responsibility belongs solely to you.',
        onayCheck: 'I have read, understood and accept the above terms.',
        onayVazgec: 'Cancel',
        onayOnayla: 'Confirm and Continue',
        disclaimer: 'This CV was created via cvobotu.com. The accuracy, authenticity and currency of all information in this document belongs solely to the document owner. The cvobotu.com platform manager cannot be held responsible for any direct or indirect damages arising from the content.',
        cropTitle: 'Crop Photo',
        cropIptal: 'Cancel',
        cropKaydet: 'Crop & Save',
        legalKvkk: 'GDPR',
        legalSorumluluk: 'Disclaimer',
        legalCerez: 'Cookies',
        legalKullanim: 'Terms',
        legalTamMetin: 'View Full Legal Text ↗',
        legalKapat: 'Got it, Close',
        rotateTitle: 'Please rotate your device',
        rotateSub: 'For a better experience, rotate your tablet or phone to landscape.',
        pdfLoading: 'Preparing...',
        cvAdres: 'Address',
        cvTel: 'Phone',
        cvEmail: 'Email',
        cvOlusturBtn: 'Create CV',
    },

    de: {
        navPageTitle: 'cvobotu.com — Kostenloser Lebenslauf-Builder',
        navBadge: '100% Kostenlos & Privat',
        heroBadge: '✦ Browserbasiert · Keine Anmeldung · Keine Daten gesendet',
        heroTitle1: 'Erstellen Sie Ihren',
        heroTitle2: 'Lebenslauf in 3 Minuten',
        heroTitle3: '',
        heroSub: 'Kostenlos, schnell und läuft vollständig in Ihrem Browser.\nKeine Ihrer Daten wird an einen Server gesendet.',
        heroF1: 'Keine Registrierung erforderlich',
        heroF2: 'PDF-Download',
        heroF3: 'Live-Vorschau',
        heroF4: '6 professionelle Themen',
        savedTitle: 'Sie haben einen gespeicherten Lebenslauf!',
        savedSub: 'Sie können dort weitermachen, wo Sie aufgehört haben.',
        savedDevam: '▶ Weiter machen',
        savedSifirla: 'Zurücksetzen und neu erstellen',
        templatesLabel: 'VORLAGE WÄHLEN',
        templatesTitle: 'Mit einer Vorlage beginnen',
        templatesSub: 'Alle Vorlagen können als PDF heruntergeladen werden und unterstützen 6 Farbthemen.',
        templateBtn: 'Mit dieser Vorlage starten →',
        t1name: 'Minimalistisch', t1desc: 'Sauber und einfach. Für jeden Sektor geeignet.',
        t2name: 'Modern Smaragd', t2desc: 'Natürlich und modern. Auffälliges Profil.',
        t3name: 'Kreativ Bordeaux', t3desc: 'Mutig und einzigartig. Für kreative Branchen.',
        t4name: 'Tech Karbon', t4desc: 'Minimalistisch und tech. Für IT & Software.',
        t5name: 'Elegant Nerz', t5desc: 'Sophisticated und elegant. Für Führungskräfte.',
        t6name: 'Reiner Saphir', t6desc: 'Korporativ und zuverlässig. Für Finanzen & Recht.',
        editorBadge: '✦ Redaktionsauswahl',
        footerSub: 'Alle Daten werden nur in Ihrem Browser gespeichert.',
        footerPrivacy: 'Datenschutz & DSGVO',
        footerCookie: 'Cookie-Richtlinie',
        footerTerms: 'Nutzungsbedingungen',
        footerQuick: 'Schnellübersicht',
        footerCopy: '© 2025 cvobotu.com. Alle Rechte vorbehalten.',
        panelTitle: 'Lebenslauf-Informationen',
        btnBack: '← Startseite',
        accKisisel: 'Persönliche Daten',
        accDeneyim: 'Berufserfahrung',
        accEgitim: 'Ausbildung',
        accYetenek: 'Fähigkeiten',
        accIlgi: 'Interessen',
        accDiller: 'Sprachen',
        accReferans: 'Referenzen',
        phAd: 'Vorname',
        phSoyad: 'Nachname',
        phEmail: 'E-Mail',
        phTelefon: 'Telefon (optional)',
        phAdres: 'Adresse (optional)',
        phLinkedin: 'LinkedIn URL (optional)',
        phUnvan: 'Titel / Position (optional)',
        phOzet: 'Kurzes Profil...',
        phYetenek: 'Fähigkeit eingeben und Enter drücken',
        phIlgi: 'z.B. Lesen, Schach (Enter drücken)',
        phDil: 'z.B. Deutsch',
        btnFotoEkle: '+ Foto hinzufügen',
        btnFotoDegistir: 'Foto ändern',
        btnYeniEkle: '+ Neu hinzufügen',
        btnYeniDil: '+ Neue Sprache',
        btnYeniReferans: '+ Neue Referenz',
        themeLabel: 'Minimalistisch',
        btnPdf: 'PDF herunterladen',
        modalDeneyimBaslik: 'Berufserfahrung',
        modalEgitimBaslik: 'Ausbildung',
        modalReferansBaslik: 'Referenz',
        phSirket: 'Firmenname',
        phPozisyon: 'Position',
        phBaslangic: 'Beginn (z.B. 2020)',
        phBitis: 'Ende (z.B. 2023 oder Aktuell)',
        phOkul: 'Schulname',
        phBolum: 'Abteilung',
        phYil: 'Jahr (z.B. 2018-2022)',
        phRefAd: 'Vor- und Nachname',
        phRefUnvan: 'Firma / Titel',
        phRefEmail: 'E-Mail',
        phRefTelefon: 'Telefon',
        btnIptal: 'Abbrechen',
        btnEkle: 'Hinzufügen',
        btnGuncelle: 'Aktualisieren',
        btnDuzenle: 'Bearbeiten',
        alertSirket: 'Firma und Position sind erforderlich.',
        alertOkul: 'Schule und Abteilung sind erforderlich.',
        alertRefAd: 'Vor- und Nachname ist erforderlich.',
        cvAdSoyad: 'Vor- und Nachname',
        cvKisiselBilgiler: 'Persönliche Daten',
        cvIlgiAlanlari: 'Interessen',
        cvDiller: 'Sprachen',
        cvIsDeneyimi: 'BERUFSERFAHRUNG',
        cvEgitim: 'AUSBILDUNG',
        cvYetenekler: 'Fähigkeiten',
        cvReferanslar: 'Referenzen',
        onayTitle: 'Informationsbestätigung',
        onayText1: 'Sie erklären, dass alle Informationen in Ihrem Lebenslauf korrekt, aktuell und wahrheitsgemäß sind.',
        onayText2: 'Der cvobotu.com-Plattformmanager haftet nicht für die Richtigkeit der Informationen. Die gesamte rechtliche Verantwortung liegt bei Ihnen.',
        onayCheck: 'Ich habe die obigen Bedingungen gelesen, verstanden und akzeptiert.',
        onayVazgec: 'Abbrechen',
        onayOnayla: 'Bestätigen und fortfahren',
        disclaimer: 'Dieser Lebenslauf wurde über cvobotu.com erstellt. Die Richtigkeit aller Informationen liegt ausschließlich beim Dokumentinhaber. Der cvobotu.com Plattformmanager haftet nicht für direkte oder indirekte Schäden aus dem Inhalt.',
        cropTitle: 'Foto zuschneiden',
        cropIptal: 'Abbrechen',
        cropKaydet: 'Zuschneiden & Speichern',
        legalKvkk: 'DSGVO',
        legalSorumluluk: 'Haftungsausschluss',
        legalCerez: 'Cookies',
        legalKullanim: 'Nutzung',
        legalTamMetin: 'Vollständigen Text anzeigen ↗',
        legalKapat: 'Verstanden, Schließen',
        rotateTitle: 'Bitte drehen Sie Ihr Gerät',
        rotateSub: 'Für eine bessere Erfahrung drehen Sie Ihr Gerät ins Querformat.',
        pdfLoading: 'Wird vorbereitet...',
        cvAdres: 'Adresse',
        cvTel: 'Telefon',
        cvEmail: 'E-Mail',
        cvOlusturBtn: 'Lebenslauf erstellen',
    },

    nl: {
        navPageTitle: 'cvobotu.com — Gratis CV-builder',
        navBadge: '100% Gratis & Privé',
        heroBadge: '✦ Browsergebaseerd · Geen registratie · Geen data verstuurd',
        heroTitle1: 'Maak uw professionele',
        heroTitle2: 'CV in 3 minuten',
        heroTitle3: '',
        heroSub: 'Gratis, snel en volledig in uw browser.\nGeen van uw gegevens wordt naar een server gestuurd.',
        heroF1: 'Geen registratie vereist',
        heroF2: 'PDF downloaden',
        heroF3: 'Live preview',
        heroF4: '6 professionele thema\'s',
        savedTitle: 'U heeft een opgeslagen CV!',
        savedSub: 'U kunt verdergaan waar u gebleven was.',
        savedDevam: '▶ Verdergaan',
        savedSifirla: 'Opnieuw beginnen',
        templatesLabel: 'KIES SJABLOON',
        templatesTitle: 'Begin met een sjabloon',
        templatesSub: 'Alle sjablonen kunnen als PDF worden gedownload en ondersteunen 6 kleurthema\'s.',
        templateBtn: 'Begin met dit sjabloon →',
        t1name: 'Minimalistisch', t1desc: 'Schoon en eenvoudig. Geschikt voor elke sector.',
        t2name: 'Modern Smaragd', t2desc: 'Natuurlijk en modern. Opvallend profiel.',
        t3name: 'Creatief Bordeaux', t3desc: 'Gedurfd en uniek. Voor creatieve sectoren.',
        t4name: 'Tech Carbon', t4desc: 'Minimalistisch en tech. Voor IT & software.',
        t5name: 'Elegant Nerts', t5desc: 'Gesofisticeerd en elegant. Voor senior profielen.',
        t6name: 'Puur Saffier', t6desc: 'Zakelijk en betrouwbaar. Voor financiën & recht.',
        editorBadge: '✦ Redacteurskeuze',
        footerSub: 'Alle gegevens worden alleen in uw browser opgeslagen.',
        footerPrivacy: 'Privacy & AVG',
        footerCookie: 'Cookiebeleid',
        footerTerms: 'Gebruiksvoorwaarden',
        footerQuick: 'Snelle samenvatting',
        footerCopy: '© 2025 cvobotu.com. Alle rechten voorbehouden.',
        panelTitle: 'CV-informatie',
        btnBack: '← Startpagina',
        accKisisel: 'Persoonlijke gegevens',
        accDeneyim: 'Werkervaring',
        accEgitim: 'Opleiding',
        accYetenek: 'Vaardigheden',
        accIlgi: 'Interesses',
        accDiller: 'Talen',
        accReferans: 'Referenties',
        phAd: 'Voornaam',
        phSoyad: 'Achternaam',
        phEmail: 'E-mail',
        phTelefon: 'Telefoon (optioneel)',
        phAdres: 'Adres (optioneel)',
        phLinkedin: 'LinkedIn URL (optioneel)',
        phUnvan: 'Titel / Functie (optioneel)',
        phOzet: 'Korte profielomschrijving...',
        phYetenek: 'Typ een vaardigheid en druk op Enter',
        phIlgi: 'bijv. Lezen, Schaken (druk Enter)',
        phDil: 'bijv. Nederlands',
        btnFotoEkle: '+ Foto toevoegen',
        btnFotoDegistir: 'Foto wijzigen',
        btnYeniEkle: '+ Nieuw toevoegen',
        btnYeniDil: '+ Nieuwe taal',
        btnYeniReferans: '+ Nieuwe referentie',
        themeLabel: 'Minimalistisch',
        btnPdf: 'PDF downloaden',
        modalDeneyimBaslik: 'Werkervaring',
        modalEgitimBaslik: 'Opleiding',
        modalReferansBaslik: 'Referentie',
        phSirket: 'Bedrijfsnaam',
        phPozisyon: 'Functie',
        phBaslangic: 'Begin (bijv. 2020)',
        phBitis: 'Einde (bijv. 2023 of Huidig)',
        phOkul: 'Schoolnaam',
        phBolum: 'Afdeling',
        phYil: 'Jaar (bijv. 2018-2022)',
        phRefAd: 'Voor- en achternaam',
        phRefUnvan: 'Bedrijf / Titel',
        phRefEmail: 'E-mail',
        phRefTelefon: 'Telefoon',
        btnIptal: 'Annuleren',
        btnEkle: 'Toevoegen',
        btnGuncelle: 'Bijwerken',
        btnDuzenle: 'Bewerken',
        alertSirket: 'Bedrijf en functie zijn verplicht.',
        alertOkul: 'School en afdeling zijn verplicht.',
        alertRefAd: 'Voor- en achternaam is verplicht.',
        cvAdSoyad: 'Voor- en achternaam',
        cvKisiselBilgiler: 'Persoonlijke gegevens',
        cvIlgiAlanlari: 'Interesses',
        cvDiller: 'Talen',
        cvIsDeneyimi: 'WERKERVARING',
        cvEgitim: 'OPLEIDING',
        cvYetenekler: 'Vaardigheden',
        cvReferanslar: 'Referenties',
        onayTitle: 'Informatiebevestiging',
        onayText1: 'U verklaart dat alle informatie in uw CV correct, actueel en waarheidsgetrouw is.',
        onayText2: 'De cvobotu.com-platformbeheerder kan niet aansprakelijk worden gesteld voor de juistheid van de informatie. Alle juridische verantwoordelijkheid ligt bij u.',
        onayCheck: 'Ik heb de bovenstaande voorwaarden gelezen, begrepen en geaccepteerd.',
        onayVazgec: 'Annuleren',
        onayOnayla: 'Bevestigen en doorgaan',
        disclaimer: 'Dit CV is gemaakt via cvobotu.com. De nauwkeurigheid van alle informatie in dit document berust uitsluitend bij de documenteigenaar. De cvobotu.com platformbeheerder is niet aansprakelijk voor directe of indirecte schade uit de inhoud.',
        cropTitle: 'Foto bijsnijden',
        cropIptal: 'Annuleren',
        cropKaydet: 'Bijsnijden & Opslaan',
        legalKvkk: 'AVG',
        legalSorumluluk: 'Disclaimer',
        legalCerez: 'Cookies',
        legalKullanim: 'Gebruik',
        legalTamMetin: 'Volledige tekst bekijken ↗',
        legalKapat: 'Begrepen, Sluiten',
        rotateTitle: 'Draai uw apparaat',
        rotateSub: 'Draai uw tablet of telefoon voor een betere ervaring.',
        pdfLoading: 'Voorbereiden...',
        cvAdres: 'Adres',
        cvTel: 'Telefoon',
        cvEmail: 'E-mail',
        cvOlusturBtn: 'CV maken',
    },

    fr: {
        navPageTitle: 'cvobotu.com — Créateur de CV gratuit',
        navBadge: '100% Gratuit & Privé',
        heroBadge: '✦ Basé sur navigateur · Sans inscription · Aucune donnée envoyée',
        heroTitle1: 'Créez votre CV',
        heroTitle2: 'professionnel en 3 minutes',
        heroTitle3: '',
        heroSub: 'Gratuit, rapide et entièrement dans votre navigateur.\nAucune de vos données n\'est envoyée à un serveur.',
        heroF1: 'Sans inscription',
        heroF2: 'Téléchargement PDF',
        heroF3: 'Aperçu en direct',
        heroF4: '6 thèmes professionnels',
        savedTitle: 'Vous avez un CV sauvegardé !',
        savedSub: 'Vous pouvez continuer là où vous vous êtes arrêté.',
        savedDevam: '▶ Continuer',
        savedSifirla: 'Réinitialiser et créer un nouveau CV',
        templatesLabel: 'CHOISIR UN MODÈLE',
        templatesTitle: 'Commencer avec un modèle',
        templatesSub: 'Tous les modèles peuvent être téléchargés en PDF et supportent 6 thèmes de couleurs.',
        templateBtn: 'Commencer avec ce modèle →',
        t1name: 'Minimaliste', t1desc: 'Propre et simple. Adapté à tous les secteurs.',
        t2name: 'Émeraude Moderne', t2desc: 'Naturel et moderne. Profil accrocheur.',
        t3name: 'Bordeaux Créatif', t3desc: 'Audacieux et unique. Pour les secteurs créatifs.',
        t4name: 'Carbone Tech', t4desc: 'Minimaliste et tech. Pour IT & logiciels.',
        t5name: 'Vison Élégant', t5desc: 'Sophistiqué et élégant. Pour profils seniors.',
        t6name: 'Saphir Pur', t6desc: 'Institutionnel et fiable. Pour finance & droit.',
        editorBadge: '✦ Choix de l\'éditeur',
        footerSub: 'Toutes les données sont stockées uniquement dans votre navigateur.',
        footerPrivacy: 'Confidentialité & RGPD',
        footerCookie: 'Politique de cookies',
        footerTerms: 'Conditions d\'utilisation',
        footerQuick: 'Résumé rapide',
        footerCopy: '© 2025 cvobotu.com. Tous droits réservés.',
        panelTitle: 'Informations CV',
        btnBack: '← Accueil',
        accKisisel: 'Informations personnelles',
        accDeneyim: 'Expérience professionnelle',
        accEgitim: 'Formation',
        accYetenek: 'Compétences',
        accIlgi: 'Centres d\'intérêt',
        accDiller: 'Langues',
        accReferans: 'Références',
        phAd: 'Prénom',
        phSoyad: 'Nom',
        phEmail: 'E-mail',
        phTelefon: 'Téléphone (optionnel)',
        phAdres: 'Adresse (optionnelle)',
        phLinkedin: 'URL LinkedIn (optionnel)',
        phUnvan: 'Titre / Poste (optionnel)',
        phOzet: 'Résumé de profil court...',
        phYetenek: 'Tapez une compétence et appuyez sur Entrée',
        phIlgi: 'ex. Lecture, Échecs (appuyez sur Entrée)',
        phDil: 'ex. Français',
        btnFotoEkle: '+ Ajouter une photo',
        btnFotoDegistir: 'Changer la photo',
        btnYeniEkle: '+ Ajouter nouveau',
        btnYeniDil: '+ Nouvelle langue',
        btnYeniReferans: '+ Nouvelle référence',
        themeLabel: 'Minimaliste',
        btnPdf: 'Télécharger PDF',
        modalDeneyimBaslik: 'Expérience professionnelle',
        modalEgitimBaslik: 'Formation',
        modalReferansBaslik: 'Référence',
        phSirket: 'Nom de l\'entreprise',
        phPozisyon: 'Poste',
        phBaslangic: 'Début (ex. 2020)',
        phBitis: 'Fin (ex. 2023 ou En cours)',
        phOkul: 'Nom de l\'école',
        phBolum: 'Département',
        phYil: 'Année (ex. 2018-2022)',
        phRefAd: 'Nom complet',
        phRefUnvan: 'Entreprise / Titre',
        phRefEmail: 'E-mail',
        phRefTelefon: 'Téléphone',
        btnIptal: 'Annuler',
        btnEkle: 'Ajouter',
        btnGuncelle: 'Mettre à jour',
        btnDuzenle: 'Modifier',
        alertSirket: 'L\'entreprise et le poste sont obligatoires.',
        alertOkul: 'L\'école et le département sont obligatoires.',
        alertRefAd: 'Le nom complet est obligatoire.',
        cvAdSoyad: 'Nom complet',
        cvKisiselBilgiler: 'Informations personnelles',
        cvIlgiAlanlari: 'Centres d\'intérêt',
        cvDiller: 'Langues',
        cvIsDeneyimi: 'EXPÉRIENCE PROFESSIONNELLE',
        cvEgitim: 'FORMATION',
        cvYetenekler: 'Compétences',
        cvReferanslar: 'Références',
        onayTitle: 'Confirmation des informations',
        onayText1: 'Vous déclarez que toutes les informations de votre CV sont exactes, actuelles et véridiques.',
        onayText2: 'Le gestionnaire de la plateforme cvobotu.com ne peut être tenu responsable de l\'exactitude des informations. Toute responsabilité juridique vous incombe.',
        onayCheck: 'J\'ai lu, compris et accepté les conditions ci-dessus.',
        onayVazgec: 'Annuler',
        onayOnayla: 'Confirmer et continuer',
        disclaimer: 'Ce CV a été créé via cvobotu.com. L\'exactitude de toutes les informations appartient uniquement au propriétaire du document. Le gestionnaire de la plateforme cvobotu.com ne peut être tenu responsable des dommages directs ou indirects découlant du contenu.',
        cropTitle: 'Recadrer la photo',
        cropIptal: 'Annuler',
        cropKaydet: 'Recadrer & Enregistrer',
        legalKvkk: 'RGPD',
        legalSorumluluk: 'Avertissement',
        legalCerez: 'Cookies',
        legalKullanim: 'Utilisation',
        legalTamMetin: 'Voir le texte complet ↗',
        legalKapat: 'Compris, Fermer',
        rotateTitle: 'Veuillez faire pivoter votre appareil',
        rotateSub: 'Pour une meilleure expérience, tournez votre appareil en mode paysage.',
        pdfLoading: 'Préparation...',
        cvAdres: 'Adresse',
        cvTel: 'Téléphone',
        cvEmail: 'E-mail',
        cvOlusturBtn: 'Créer mon CV',
    },

    ar: {
        navPageTitle: 'cvobotu.com — منشئ سيرة ذاتية مجاني',
        navBadge: '١٠٠٪ مجاني وخاص',
        heroBadge: '✦ يعمل في المتصفح · بدون تسجيل · لا ترسل بيانات',
        heroTitle1: 'أنشئ سيرتك الذاتية',
        heroTitle2: 'الاحترافية في 3 دقائق',
        heroTitle3: '',
        heroSub: 'مجاني وسريع ويعمل بالكامل في متصفحك.\nلا يتم إرسال أي من بياناتك إلى أي خادم.',
        heroF1: 'لا يتطلب تسجيلاً',
        heroF2: 'تحميل PDF',
        heroF3: 'معاينة مباشرة',
        heroF4: '6 قوالب احترافية',
        savedTitle: 'لديك سيرة ذاتية محفوظة!',
        savedSub: 'يمكنك الاستمرار من حيث توقفت.',
        savedDevam: '▶ الاستمرار',
        savedSifirla: 'إعادة تعيين وإنشاء سيرة جديدة',
        templatesLabel: 'اختر القالب',
        templatesTitle: 'ابدأ بقالب',
        templatesSub: 'يمكن تحميل جميع القوالب بصيغة PDF وتدعم 6 ألوان.',
        templateBtn: 'ابدأ بهذا القالب →',
        t1name: 'بسيط', t1desc: 'نظيف وبسيط. مناسب لكل القطاعات.',
        t2name: 'زمرد حديث', t2desc: 'طبيعي وعصري. ملف شخصي لافت.',
        t3name: 'بوردو إبداعي', t3desc: 'جريء وفريد. للقطاعات الإبداعية.',
        t4name: 'كربون تقني', t4desc: 'بسيط وتقني. لتكنولوجيا المعلومات.',
        t5name: 'أنيق فاخر', t5desc: 'متطور وأنيق. للملفات الرفيعة.',
        t6name: 'ياقوت أزرق', t6desc: 'مؤسسي وموثوق. للمالية والقانون.',
        editorBadge: '✦ اختيار المحرر',
        footerSub: 'جميع البيانات مخزنة فقط في متصفحك.',
        footerPrivacy: 'الخصوصية',
        footerCookie: 'سياسة الكوكيز',
        footerTerms: 'شروط الاستخدام',
        footerQuick: 'ملخص سريع',
        footerCopy: '© 2025 cvobotu.com. جميع الحقوق محفوظة.',
        panelTitle: 'معلومات السيرة الذاتية',
        btnBack: '→ الصفحة الرئيسية',
        accKisisel: 'المعلومات الشخصية',
        accDeneyim: 'الخبرة المهنية',
        accEgitim: 'التعليم',
        accYetenek: 'المهارات',
        accIlgi: 'الاهتمامات',
        accDiller: 'اللغات',
        accReferans: 'المراجع',
        phAd: 'الاسم',
        phSoyad: 'اللقب',
        phEmail: 'البريد الإلكتروني',
        phTelefon: 'الهاتف (اختياري)',
        phAdres: 'العنوان (اختياري)',
        phLinkedin: 'رابط LinkedIn (اختياري)',
        phUnvan: 'المسمى الوظيفي (اختياري)',
        phOzet: 'ملخص قصير...',
        phYetenek: 'اكتب مهارة واضغط Enter',
        phIlgi: 'مثال: القراءة، الشطرنج',
        phDil: 'مثال: العربية',
        btnFotoEkle: '+ إضافة صورة',
        btnFotoDegistir: 'تغيير الصورة',
        btnYeniEkle: '+ إضافة جديد',
        btnYeniDil: '+ إضافة لغة',
        btnYeniReferans: '+ إضافة مرجع',
        themeLabel: 'بسيط',
        btnPdf: 'تحميل PDF',
        modalDeneyimBaslik: 'الخبرة المهنية',
        modalEgitimBaslik: 'التعليم',
        modalReferansBaslik: 'مرجع',
        phSirket: 'اسم الشركة',
        phPozisyon: 'المنصب',
        phBaslangic: 'البداية (مثال: 2020)',
        phBitis: 'النهاية (مثال: 2023)',
        phOkul: 'اسم المدرسة',
        phBolum: 'القسم',
        phYil: 'السنة (مثال: 2018-2022)',
        phRefAd: 'الاسم الكامل',
        phRefUnvan: 'الشركة / المسمى',
        phRefEmail: 'البريد الإلكتروني',
        phRefTelefon: 'الهاتف',
        btnIptal: 'إلغاء',
        btnEkle: 'إضافة',
        btnGuncelle: 'تحديث',
        btnDuzenle: 'تعديل',
        alertSirket: 'الشركة والمنصب مطلوبان.',
        alertOkul: 'المدرسة والقسم مطلوبان.',
        alertRefAd: 'الاسم الكامل مطلوب.',
        cvAdSoyad: 'الاسم الكامل',
        cvKisiselBilgiler: 'المعلومات الشخصية',
        cvIlgiAlanlari: 'الاهتمامات',
        cvDiller: 'اللغات',
        cvIsDeneyimi: 'الخبرة المهنية',
        cvEgitim: 'التعليم',
        cvYetenekler: 'المهارات',
        cvReferanslar: 'المراجع',
        onayTitle: 'تأكيد المعلومات',
        onayText1: 'تقر بأن جميع المعلومات في سيرتك الذاتية صحيحة وحديثة وصادقة.',
        onayText2: 'لا يتحمل مدير منصة cvobotu.com أي مسؤولية عن دقة المعلومات. تقع جميع المسؤولية القانونية عليك.',
        onayCheck: 'لقد قرأت وفهمت وقبلت الشروط أعلاه.',
        onayVazgec: 'إلغاء',
        onayOnayla: 'تأكيد والمتابعة',
        disclaimer: 'تم إنشاء هذه السيرة الذاتية عبر cvobotu.com. تقع مسؤولية دقة جميع المعلومات على عاتق صاحب الوثيقة حصراً. لا يتحمل مدير منصة cvobotu.com أي مسؤولية عن الأضرار المباشرة أو غير المباشرة الناجمة عن المحتوى.',
        cropTitle: 'قص الصورة',
        cropIptal: 'إلغاء',
        cropKaydet: 'قص وحفظ',
        legalKvkk: 'الخصوصية',
        legalSorumluluk: 'إخلاء المسؤولية',
        legalCerez: 'الكوكيز',
        legalKullanim: 'الاستخدام',
        legalTamMetin: 'عرض النص الكامل ↗',
        legalKapat: 'حسناً، إغلاق',
        rotateTitle: 'يرجى تدوير جهازك',
        rotateSub: 'للحصول على تجربة أفضل، أدر جهازك أفقياً.',
        pdfLoading: 'جاري التحضير...',
        cvAdres: 'العنوان',
        cvTel: 'الهاتف',
        cvEmail: 'البريد الإلكتروني',
        cvOlusturBtn: 'إنشاء السيرة الذاتية',
    },

    ru: {
        navPageTitle: 'cvobotu.com — Бесплатный конструктор резюме',
        navBadge: '100% Бесплатно и Конфиденциально',
        heroBadge: '✦ Работает в браузере · Без регистрации · Данные не отправляются',
        heroTitle1: 'Создайте профессиональное',
        heroTitle2: 'резюме за 3 минуты',
        heroTitle3: '',
        heroSub: 'Бесплатно, быстро и полностью в вашем браузере.\nНи одни из ваших данных не отправляются на сервер.',
        heroF1: 'Без регистрации',
        heroF2: 'Скачать PDF',
        heroF3: 'Живой предпросмотр',
        heroF4: '6 профессиональных тем',
        savedTitle: 'У вас есть сохранённое резюме!',
        savedSub: 'Вы можете продолжить с того места, где остановились.',
        savedDevam: '▶ Продолжить',
        savedSifirla: 'Сбросить и создать новое',
        templatesLabel: 'ВЫБРАТЬ ШАБЛОН',
        templatesTitle: 'Начните с шаблона',
        templatesSub: 'Все шаблоны можно скачать в PDF и поддерживают 6 цветовых тем.',
        templateBtn: 'Начать с этим шаблоном →',
        t1name: 'Минималист', t1desc: 'Чистый и простой. Подходит для любой отрасли.',
        t2name: 'Современный Изумруд', t2desc: 'Естественный и современный. Яркий профиль.',
        t3name: 'Креативный Бордо', t3desc: 'Смелый и уникальный. Для творческих отраслей.',
        t4name: 'Технологичный Карбон', t4desc: 'Минималистичный и технологичный. Для IT.',
        t5name: 'Элегантная Норка', t5desc: 'Изысканный и элегантный. Для топ-менеджеров.',
        t6name: 'Чистый Сапфир', t6desc: 'Корпоративный и надёжный. Для финансов и права.',
        editorBadge: '✦ Выбор редактора',
        footerSub: 'Все данные хранятся только в вашем браузере.',
        footerPrivacy: 'Конфиденциальность',
        footerCookie: 'Политика cookies',
        footerTerms: 'Условия использования',
        footerQuick: 'Краткое изложение',
        footerCopy: '© 2025 cvobotu.com. Все права защищены.',
        panelTitle: 'Информация о резюме',
        btnBack: '← Главная',
        accKisisel: 'Личная информация',
        accDeneyim: 'Опыт работы',
        accEgitim: 'Образование',
        accYetenek: 'Навыки',
        accIlgi: 'Интересы',
        accDiller: 'Языки',
        accReferans: 'Рекомендации',
        phAd: 'Имя',
        phSoyad: 'Фамилия',
        phEmail: 'Эл. почта',
        phTelefon: 'Телефон (необязательно)',
        phAdres: 'Адрес (необязательно)',
        phLinkedin: 'LinkedIn URL (необязательно)',
        phUnvan: 'Должность (необязательно)',
        phOzet: 'Краткое описание профиля...',
        phYetenek: 'Введите навык и нажмите Enter',
        phIlgi: 'напр. Чтение, Шахматы (Enter)',
        phDil: 'напр. Русский',
        btnFotoEkle: '+ Добавить фото',
        btnFotoDegistir: 'Изменить фото',
        btnYeniEkle: '+ Добавить новый',
        btnYeniDil: '+ Новый язык',
        btnYeniReferans: '+ Новая рекомендация',
        themeLabel: 'Минималист',
        btnPdf: 'Скачать PDF',
        modalDeneyimBaslik: 'Опыт работы',
        modalEgitimBaslik: 'Образование',
        modalReferansBaslik: 'Рекомендация',
        phSirket: 'Название компании',
        phPozisyon: 'Должность',
        phBaslangic: 'Начало (напр. 2020)',
        phBitis: 'Конец (напр. 2023 или По н.в.)',
        phOkul: 'Название школы',
        phBolum: 'Факультет',
        phYil: 'Год (напр. 2018-2022)',
        phRefAd: 'Полное имя',
        phRefUnvan: 'Компания / Должность',
        phRefEmail: 'Эл. почта',
        phRefTelefon: 'Телефон',
        btnIptal: 'Отмена',
        btnEkle: 'Добавить',
        btnGuncelle: 'Обновить',
        btnDuzenle: 'Редактировать',
        alertSirket: 'Компания и должность обязательны.',
        alertOkul: 'Школа и факультет обязательны.',
        alertRefAd: 'Полное имя обязательно.',
        cvAdSoyad: 'Полное имя',
        cvKisiselBilgiler: 'Личная информация',
        cvIlgiAlanlari: 'Интересы',
        cvDiller: 'Языки',
        cvIsDeneyimi: 'ОПЫТ РАБОТЫ',
        cvEgitim: 'ОБРАЗОВАНИЕ',
        cvYetenekler: 'Навыки',
        cvReferanslar: 'Рекомендации',
        onayTitle: 'Подтверждение информации',
        onayText1: 'Вы заявляете, что все сведения в вашем резюме являются точными, актуальными и правдивыми.',
        onayText2: 'Администратор платформы cvobotu.com не несёт ответственности за точность информации. Вся юридическая ответственность лежит на вас.',
        onayCheck: 'Я прочитал(а), понял(а) и принимаю вышеуказанные условия.',
        onayVazgec: 'Отмена',
        onayOnayla: 'Подтвердить и продолжить',
        disclaimer: 'Это резюме создано с помощью cvobotu.com. Точность всей информации в документе лежит исключительно на владельце документа. Администратор платформы cvobotu.com не несёт ответственности за прямой или косвенный ущерб, возникший из содержания.',
        cropTitle: 'Обрезать фото',
        cropIptal: 'Отмена',
        cropKaydet: 'Обрезать и сохранить',
        legalKvkk: 'Конфиденциальность',
        legalSorumluluk: 'Отказ от ответственности',
        legalCerez: 'Cookies',
        legalKullanim: 'Использование',
        legalTamMetin: 'Просмотреть полный текст ↗',
        legalKapat: 'Понятно, Закрыть',
        rotateTitle: 'Пожалуйста, поверните устройство',
        rotateSub: 'Для лучшего опыта поверните устройство горизонтально.',
        pdfLoading: 'Подготовка...',
        cvAdres: 'Адрес',
        cvTel: 'Телефон',
        cvEmail: 'Эл. почта',
        cvOlusturBtn: 'Создать резюме',
    }
};

// ================================================================
// AKTİF DİL YÖNETİMİ
// ================================================================

const DESTEKLENEN_DILLER = ['tr', 'en', 'de', 'nl', 'fr', 'ar', 'ru'];

function tarayicDiliniAl() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && DESTEKLENEN_DILLER.includes(saved)) return saved;

    const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    const kod = nav.split('-')[0];

    if (DESTEKLENEN_DILLER.includes(kod)) return kod;
    return 'en';
}

function t(key) {
    const lang = localStorage.getItem(LANG_KEY) || tarayicDiliniAl();
    const sozluk = i18n[lang] || i18n['en'];
    return sozluk[key] || i18n['en'][key] || key;
}

function dilAyarla(langKod) {
    localStorage.setItem(LANG_KEY, langKod);

    // RTL desteği (Arapça)
    if (langKod === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', langKod);
    }
}

// Sayfa yüklenince dili uygula
(function() {
    const lang = tarayicDiliniAl();
    dilAyarla(lang);
})();

function uiGuncelle() {
    const lang = localStorage.getItem(LANG_KEY) || tarayicDiliniAl();

    // ── NAVBAR ──
    const navBadgeEl = document.querySelector('.landing-nav-badge');
    if (navBadgeEl) navBadgeEl.textContent = t('navBadge');

    // ── HERO ──
    const heroBadgeEl = document.querySelector('.hero-badge');
    if (heroBadgeEl) heroBadgeEl.textContent = t('heroBadge');

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const title3 = t('heroTitle3');
        heroTitle.innerHTML =
            t('heroTitle1') + '<br>' +
            '<span class="hero-title-accent">' + t('heroTitle2') + '</span>' +
            (title3 && title3 !== 'heroTitle3' ? '<br>' + title3 : '');
    }

    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) heroSub.innerHTML = t('heroSub').replace('\n', '<br>');

    const heroFeatures = document.querySelectorAll('.hero-feature');
    const featureKeys = ['heroF1','heroF2','heroF3','heroF4'];
    heroFeatures.forEach(function(el, i) {
        const iconEl = el.querySelector('.hero-feature-icon');
        if (iconEl) {
            el.innerHTML = '';
            el.appendChild(iconEl);
            el.appendChild(document.createTextNode(' ' + t(featureKeys[i])));
        }
    });

    // ── KAYITLI BANNER ──
    const savedTitleEl = document.querySelector('.saved-banner strong');
    if (savedTitleEl) savedTitleEl.textContent = t('savedTitle');
    const savedSubEl = document.querySelector('.saved-banner span:last-child');
    if (savedSubEl) savedSubEl.innerHTML = '<strong>' + t('savedTitle') + '</strong> ' + t('savedSub');

    const devamBtn = document.getElementById('devamEtBtn');
    if (devamBtn) devamBtn.textContent = t('savedDevam');
    const sifirlaButton = document.getElementById('sifirlaBtn');
    if (sifirlaButton) sifirlaButton.textContent = t('savedSifirla');

    // ── ŞABLONLAR BÖLÜMÜ ──
    const templatesLabelEl = document.querySelector('.templates-label');
    if (templatesLabelEl) templatesLabelEl.textContent = t('templatesLabel');
    const templatesTitleEl = document.querySelector('.templates-title');
    if (templatesTitleEl) templatesTitleEl.textContent = t('templatesTitle');
    const templatesSubEl = document.querySelector('.templates-sub');
    if (templatesSubEl) templatesSubEl.textContent = t('templatesSub');

    // Şablon kartları
    const tCards = document.querySelectorAll('.template-card');
    const tKeys = [        {name:'t1name', desc:'t1desc'},        {name:'t2name', desc:'t2desc'},        {name:'t3name', desc:'t3desc'},        {name:'t4name', desc:'t4desc'},        {name:'t5name', desc:'t5desc'},        {name:'t6name', desc:'t6desc'},    ];
    tCards.forEach(function(card, i) {
        if (!tKeys[i]) return;
        const labelEl = card.querySelector('.template-label');
        if (labelEl) labelEl.textContent = t(tKeys[i].name);
        const descEl = card.querySelector('.template-desc');
        if (descEl) descEl.textContent = t(tKeys[i].desc);
        const btnEl = card.querySelector('.template-btn');
        if (btnEl) btnEl.textContent = t('templateBtn');
        const badgeEl = card.querySelector('.template-card-badge');
        if (badgeEl) badgeEl.textContent = t('editorBadge');
    });

    // ── FOOTER ──
    const footerSubEl = document.querySelector('.landing-footer > p:first-child');
    if (footerSubEl) footerSubEl.textContent = t('footerSub');
    const footerCopyEl = document.querySelector('.footer-copy');
    if (footerCopyEl) footerCopyEl.textContent = t('footerCopy');

    const footerLinks = document.querySelectorAll('.footer-legal-link');
    const footerKeys = ['footerPrivacy','footerCookie','footerTerms','footerQuick'];
    footerLinks.forEach(function(el, i) {
        if (footerKeys[i]) el.textContent = t(footerKeys[i]);
    });

    // ── SOL PANEL ──
    const panelTitleEl = document.querySelector('#leftPanel .panel-header h2');
    if (panelTitleEl) panelTitleEl.textContent = t('panelTitle');
    const backBtnEl = document.getElementById('geriBtn');
    if (backBtnEl) backBtnEl.textContent = t('btnBack');

    // Accordion başlıkları
    const accHeaders = document.querySelectorAll('.accordion-header span:first-child');
    const accKeys = ['accKisisel','accDeneyim','accEgitim','accYetenek','accIlgi','accDiller','accReferans'];
    accHeaders.forEach(function(el, i) {
        if (accKeys[i]) el.textContent = t(accKeys[i]);
    });

    // Form placeholder'ları
    const phMap = {
        'ad': 'phAd', 'soyad': 'phSoyad', 'email': 'phEmail',
        'telefon': 'phTelefon', 'adres': 'phAdres',
        'linkedin': 'phLinkedin', 'unvan': 'phUnvan',
        'ozet': 'phOzet', 'yetenekInput': 'phYetenek',
        'ilgiInput': 'phIlgi'
    };
    Object.keys(phMap).forEach(function(id) {
        const el = document.getElementById(id);
        if (el) el.placeholder = t(phMap[id]);
    });

    // Fotoğraf butonu
    const fotoBtn = document.getElementById('fotoEkleBtn');
    if (fotoBtn) {
        fotoBtn.textContent = fotoDataURL ? t('btnFotoDegistir') : t('btnFotoEkle');
    }

    // Ekle butonları
    const deneyimEkleEl = document.getElementById('deneyimEkleBtn');
    if (deneyimEkleEl) deneyimEkleEl.textContent = t('btnYeniEkle');
    const egitimEkleEl = document.getElementById('egitimEkleBtn');
    if (egitimEkleEl) egitimEkleEl.textContent = t('btnYeniEkle');
    const dilEkleEl = document.getElementById('dilEkleBtn');
    if (dilEkleEl) dilEkleEl.textContent = t('btnYeniDil');
    const referansEkleEl = document.getElementById('referansEkleBtn');
    if (referansEkleEl) referansEkleEl.textContent = t('btnYeniReferans');

    // PDF butonu
    const pdfBtnEl = document.getElementById('pdfBtn');
    if (pdfBtnEl && !pdfBtnEl.disabled) pdfBtnEl.textContent = t('btnPdf');

    // ── KIRPMA MODALI ──
    const cropTitleEl = document.querySelector('.crop-modal-header h4');
    if (cropTitleEl) cropTitleEl.textContent = t('cropTitle');
    if (cropIptalBtn) cropIptalBtn.textContent = t('cropIptal');
    if (cropKaydetBtn) cropKaydetBtn.textContent = t('cropKaydet');

    // ── YASAL MODAL SEKME BAŞLIKLARI ──
    const legalTabs = document.querySelectorAll('.legal-tab');
    const legalTabKeys = ['legalKvkk','legalSorumluluk','legalCerez','legalKullanim'];
    legalTabs.forEach(function(tab, i) {
        if (legalTabKeys[i]) tab.textContent = t(legalTabKeys[i]);
    });
    const legalFullEl = document.querySelector('.legal-full-link');
    if (legalFullEl) legalFullEl.textContent = t('legalTamMetin');
    const legalKapatEl = document.getElementById('legalModalKapatBtn');
    if (legalKapatEl) legalKapatEl.textContent = t('legalKapat');

    // ── ROTATE WARNING ──
    const rotateP = document.querySelector('#rotateWarning p');
    if (rotateP) rotateP.textContent = t('rotateTitle');
    const rotateSpan = document.querySelector('#rotateWarning span');
    if (rotateSpan) rotateSpan.textContent = t('rotateSub');

    // ── CV ÖNİZLEME YENİLE ──
    if (!appContainer.classList.contains('hidden')) {
        canliOnizlemeGuncelle();
    }

    // data-i18n attribute ile toplu güncelleme
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t(key)) el.textContent = t(key);
    });

    // Tarayıcı sekmesi başlığını güncelle
    const pageTitleEl = document.getElementById('pageTitle');
    if (pageTitleEl) pageTitleEl.textContent = t('navPageTitle');
    document.title = t('navPageTitle');
}

function dilSeciciOlustur() {
    if (document.getElementById('langSelector')) return;

    const diller = [        { kod: 'tr', ad: 'Türkçe',    bayrak: '🇹🇷' },        { kod: 'en', ad: 'English',    bayrak: '🇬🇧' },        { kod: 'de', ad: 'Deutsch',    bayrak: '🇩🇪' },        { kod: 'nl', ad: 'Nederlands', bayrak: '🇳🇱' },        { kod: 'fr', ad: 'Français',   bayrak: '🇫🇷' },        { kod: 'ar', ad: 'العربية',    bayrak: '🇸🇦' },        { kod: 'ru', ad: 'Русский',    bayrak: '🇷🇺' },    ];

    const mevcutLang = localStorage.getItem(LANG_KEY) || tarayicDiliniAl();
    const mevcutDil  = diller.find(function(d) { return d.kod === mevcutLang; }) || diller[0];

    // Ana wrapper — sayfanın sağ altına fixed
    const wrapper = document.createElement('div');
    wrapper.id = 'langSelector';
    wrapper.className = 'lang-selector';

    // Seçili dili gösteren buton
    const toggle = document.createElement('button');
    toggle.className = 'lang-toggle';
    toggle.setAttribute('aria-haspopup', 'listbox');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML =
        '<span class="lang-flag">' + mevcutDil.bayrak + '</span>' +
        '<span class="lang-name">' + mevcutDil.ad + '</span>' +
        '<span class="lang-arrow">&#9650;</span>';

    // Dropdown listesi (yukarı açılır)
    const dropdown = document.createElement('ul');
    dropdown.className = 'lang-dropdown';
    dropdown.setAttribute('role', 'listbox');
    dropdown.classList.add('hidden');

    diller.forEach(function(dil) {
        const li = document.createElement('li');
        li.className = 'lang-item' + (dil.kod === mevcutLang ? ' active' : '');
        li.setAttribute('role', 'option');
        li.innerHTML =
            '<span class="lang-item-flag">' + dil.bayrak + '</span>' +
            '<span class="lang-item-name">' + dil.ad + '</span>' +
            (dil.kod === mevcutLang ? '<span class="lang-item-check">&#10003;</span>' : '');

        li.addEventListener('click', function() {
            // Aktif işaretini güncelle
            dropdown.querySelectorAll('.lang-item').forEach(function(el) {
                el.classList.remove('active');
                const check = el.querySelector('.lang-item-check');
                if (check) check.remove();
            });
            li.classList.add('active');
            const checkSpan = document.createElement('span');
            checkSpan.className = 'lang-item-check';
            checkSpan.innerHTML = '&#10003;';
            li.appendChild(checkSpan);

            // Toggle butonunu güncelle
            toggle.innerHTML =
                '<span class="lang-flag">' + dil.bayrak + '</span>' +
                '<span class="lang-name">' + dil.ad + '</span>' +
                '<span class="lang-arrow">&#9650;</span>';

            // Dropdown kapat
            dropdown.classList.add('hidden');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('open');

            // Dili uygula ve UI güncelle
            dilAyarla(dil.kod);
            uiGuncelle();
        });

        dropdown.appendChild(li);
    });

    // Toggle tıklaması
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = !dropdown.classList.contains('hidden');
        if (isOpen) {
            dropdown.classList.add('hidden');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('open');
        } else {
            dropdown.classList.remove('hidden');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.classList.add('open');
        }
    });

    // Dışarı tıklanınca kapat
    document.addEventListener('click', function() {
        dropdown.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
    });

    // ESC ile kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdown.classList.add('hidden');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('open');
        }
    });

    wrapper.appendChild(dropdown);
    wrapper.appendChild(toggle);

    // Body'ye ekle (fixed konumlandırma için)
    document.body.appendChild(wrapper);
}

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

    // Kayıtlı fotoğrafı ÖNCE yükle (fotoDataURL set edilsin)
    const savedPhoto = localStorage.getItem(PHOTO_KEY);
    if (savedPhoto) {
        fotoYukleVeGoster(savedPhoto);
    }

    landingPage.classList.add('hidden');
    appContainer.classList.remove('hidden');

    // DOM yerleştikten sonra önizlemeyi güncelle
    requestAnimationFrame(function () {
        canliOnizlemeGuncelle();
        setTimeout(autoFitCV, 150);
    });
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
        html: '<h1 class="cv-main-name">' + ((ad || soyad) ? (ad + ' ' + soyad) : t('cvAdSoyad')) + '</h1>' + (unvanMetin ? '<p class="cv-main-title">' + unvanMetin + '</p>' : '')
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
        html += '<h6 class="cv-main-heading"><span class="heading-icon">&#128188;</span>' + t('cvIsDeneyimi') + '</h6>';
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
        html += '<h6 class="cv-main-heading"><span class="heading-icon">&#127891;</span>' + t('cvEgitim') + '</h6>';
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
        html += '<h6 class="cv-main-heading">&#128161; ' + t('cvYetenekler') + '</h6>';
        yetenekler.forEach(function (y) {
            html += '<div class="cv-skill-row"><span class="cv-skill-name">' + y + '</span></div>';
        });
        html += '</div>';
        bloklar.push({ type: 'section', html: html });
    }

    // Referanslar
    if (referanslar.length > 0) {
        let html = '<div class="cv-main-section" id="cvMainReferansSection">';
        html += '<h6 class="cv-main-heading">&#128101; ' + t('cvReferanslar') + '</h6>';
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

    // === SORUMLULUK REDDİ — Tüm sayfalara ekle ===
    const tumSayfalarRed = cvPreview.querySelectorAll('.cv-page');
    tumSayfalarRed.forEach(function (sayfaEl) {
        const redDiv = document.createElement('div');
        redDiv.className = 'cv-disclaimer';
        redDiv.innerHTML = t('disclaimer');
        sayfaEl.appendChild(redDiv);
    });
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
    html += '<h6 class="cv-sidebar-heading">' + t('cvKisiselBilgiler') + '</h6>';
    html += '<p class="cv-sidebar-item" id="cvSidebarAdres">&#9906; ' + (adres || t('cvAdres')) + '</p>';
    html += '<p class="cv-sidebar-item" id="cvSidebarTel">&#9742; ' + (telefon || t('cvTel')) + '</p>';
    html += '<p class="cv-sidebar-item" id="cvSidebarEmail">&#9993; ' + (email || t('cvEmail')) + '</p>';
    if (linkedin) {
        const linkedinGoster = linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//i, 'linkedin.com/');
        html += '<p class="cv-sidebar-item" id="cvSidebarLinkedin">&#128279; ' + linkedinGoster + '</p>';
    }
    html += '</div>';

    // İlgi Alanları
    if (ilgiAlanlari.length > 0) {
        html += '<div class="cv-sidebar-section" id="cvSidebarIlgiSection">';
        html += '<h6 class="cv-sidebar-heading">' + t('cvIlgiAlanlari') + '</h6>';
        ilgiAlanlari.forEach(function (ilgi) {
            html += '<p class="cv-sidebar-item">&#8226; ' + ilgi + '</p>';
        });
        html += '</div>';
    }

    // Diller
    if (diller.length > 0) {
        html += '<div class="cv-sidebar-section" id="cvSidebarDilSection">';
        html += '<h6 class="cv-sidebar-heading">' + t('cvDiller') + '</h6>';
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

// Dil sistemi başlat
document.addEventListener('DOMContentLoaded', function() {
    dilSeciciOlustur();
    uiGuncelle();
});

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
        <h3 class="sorumluluk-title">${t('onayTitle')}</h3>
        <p class="sorumluluk-text">${t('onayText1')}</p>
        <p class="sorumluluk-text">${t('onayText2')}</p>
        <div class="sorumluluk-checkbox-row">
            <input type="checkbox" id="sorumlulukCheck">
            <label for="sorumlulukCheck">${t('onayCheck')}</label>
        </div>
        <div class="sorumluluk-actions">
            <button class="sorumluluk-btn-iptal" id="sorumlulukIptal">${t('onayVazgec')}</button>
            <button class="sorumluluk-btn-onayla" id="sorumlulukOnayla" disabled>
                ${t('onayOnayla')}
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

