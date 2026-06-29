// ============ INTERNATIONALIZATION (i18n) ============
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.team": "Team",
    "nav.reviews": "Reviews",
    "nav.book": "Book Now",

    // Hero
    "hero.badge": "Premium Beauty Salon",
    "hero.title": 'Where Beauty Meets <em>Expertise</em>',
    "hero.book": "Book Now",
    "hero.services": "Our Services",
    "hero.desc": "Experience the art of transformation at Alan Beauty Salon. Our expert team specializes in hair styling, nail art, skincare treatments, and professional makeup — crafted to reveal your most radiant self.",
    "hero.stat1.value": "10K+",
    "hero.stat1.label": "Happy Clients",
    "hero.stat2.value": "5",
    "hero.stat2.label": "Expert Stylists",
    "hero.stat3.value": "90+",
    "hero.stat3.label": "Services",
    "hero.scroll": "Scroll",

    // About
    "about.label": "About Us",
    "about.title": 'Crafting <em>Beauty</em><br>With Passion',
    "about.location": "Muscat, Oman",
    "about.story.title": 'Where beauty meets <em>expertise</em>',
    "about.story.desc": "A premier beauty destination in Oman delivering exceptional results through premium products and the latest techniques — tailored to every client.",
    "about.story.btn": "Book Appointment",
    "about.stat.value": '10K<span>+</span>',
    "about.stat.label": "Happy Clients",
    "about.expertise.label": "Our Expertise",
    "about.pill.hair": "Hair",
    "about.pill.nails": "Nails",
    "about.pill.makeup": "Makeup & Beauty",
    "about.years": 'Years of <em>Excellence</em>',
    "about.quote": '"Every client deserves to feel like the most beautiful version of themselves."',
    "about.quote.author": "— Alan Beauty Team",

    // Services
    "svc.label": "What We Offer",
    "svc.title": 'Our <em>Price List</em>',
    "svc.tab.hair": "Hair Services",
    "svc.tab.nails": "Nail Studio",
    "svc.tab.beauty": "Makeup & Beauty",
    "svc.book.text": "All prices in Omani Rial (OMR). Contact us to book your appointment.",
    "svc.book.btn": "Book via WhatsApp",

    // Service Groups — Hair
    "svc.hair.group1": "Haircuts, Wash & Blowdry",
    "svc.hair.group1.badge": "9 Services",
    "svc.hair.group2": "Hair Coloring & Highlights",
    "svc.hair.group2.badge": "15 Services",
    "svc.hair.group3": "Hair Treatments & Botox",
    "svc.hair.group3.badge": "9 Services",
    "svc.hair.group4": "Hair Extensions",
    "svc.hair.group4.badge": "3 Services",
    "svc.hair.group5": "Hairstyling & Braids",
    "svc.hair.group5.badge": "5 Services",

    // Service Groups — Nails
    "svc.nails.group1": "Manicure & Pedicure",
    "svc.nails.group1.badge": "9 Services",
    "svc.nails.group2": "Gel Polish Services",
    "svc.nails.group2.badge": "11 Services",
    "svc.nails.group3": "Nail Extensions & Overlay",
    "svc.nails.group3.badge": "9 Services",
    "svc.nails.group4": "Nail Packages & Add-ons",
    "svc.nails.group4.badge": "9 Services",

    // Service Groups — Beauty
    "svc.beauty.group1": "Make-up Services",
    "svc.beauty.group1.badge": "4 Services",
    "svc.beauty.group2": "Threading & Facial",
    "svc.beauty.group2.badge": "6 Services",
    "svc.beauty.group3": "Waxing Services",
    "svc.beauty.group3.badge": "5 Services",

    // Gallery
    "gallery.label": "Our Work",
    "gallery.title": 'Beauty <em>Gallery</em>',
    "gallery.tag.hair": "Hair",
    "gallery.tag.makeup": "Makeup",
    "gallery.tag.nails": "Nails",
    "gallery.tag.skincare": "Skincare",
    "gallery.tag.grooming": "Grooming",

    // Team
    "team.label": "Meet The Team",
    "team.title": 'Our <em>Experts</em>',
    "team.nada.role": "Receptionist",
    "team.sara.role": "Manicurist & Pedicurist",
    "team.nadia.role": "Hairdresser",
    "team.daniel.role": "Hairdresser",
    "team.hanee.role": "Manicurist & Pedicurist",

    // Reviews
    "reviews.label": "Testimonials",
    "reviews.title": 'What Our Clients <em>Say</em>',
    "review.1.text": '"The best salon experience I\'ve ever had in Oman! Nadia transformed my hair beautifully. The ambiance is luxurious and the staff are incredibly professional."',
    "review.1.author": "— Sarah M.",
    "review.2.text": '"Amazing nail art and attention to detail. The team at Alan Salon truly understands what clients want. I always leave feeling like a queen!"',
    "review.2.author": "— Fatima A.",
    "review.3.text": '"My bridal makeup was absolutely flawless. The team went above and beyond to make my special day even more beautiful. Highly recommended!"',
    "review.3.author": "— Maryam K.",

    // Contact
    "contact.label": "Get In Touch",
    "contact.title": 'Book Your <em>Appointment</em>',
    "contact.heading": 'Let\'s Create Your <em>Look</em>',
    "contact.desc": "Book & glow with us! Contact us to schedule your appointment or visit our salon for a consultation.",
    "contact.phone.label": "Phone",
    "contact.phone.value": "+968 9690 0022",
    "contact.location.label": "Location",
    "contact.location.value": "Muscat, Oman",
    "contact.hours.label": "Working Hours",
    "contact.hours.value": "Daily: 10:00 AM – 10:00 PM",
    "contact.form.name": "Your Name",
    "contact.form.phone": "Phone Number",
    "contact.form.service": "Select Service",
    "contact.form.service.hair": "Hair Styling",
    "contact.form.service.nails": "Nail Art & Care",
    "contact.form.service.skincare": "Skincare",
    "contact.form.service.makeup": "Makeup",
    "contact.form.service.packages": "Packages",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send via WhatsApp",

    // Footer
    "footer.desc": "Where beauty meets expertise. Premium hair, nails, skincare and makeup services in Oman.",
    "footer.links": "Quick Links",
    "footer.services": "Services",
    "footer.services.hair": "Hair Services",
    "footer.services.nails": "Nail Studio",
    "footer.services.makeup": "Makeup & Beauty",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 Alan Beauty Salon. All rights reserved.",
    "footer.powered": "Powered by Land Of Fire Enterprisess",
  },

  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.gallery": "المعرض",
    "nav.team": "فريقنا",
    "nav.reviews": "آراء العملاء",
    "nav.book": "احجزي الآن",

    // Hero
    "hero.badge": "صالون تجميل فاخر",
    "hero.title": 'حيث يلتقي الجمال <em>بالخبرة</em>',
    "hero.book": "احجزي الآن",
    "hero.services": "خدماتنا",
    "hero.desc": "اكتشفي فن التحوّل في صالون آلان للتجميل. فريقنا المتخصص يقدم أفضل خدمات تصفيف الشعر، فن الأظافر، العناية بالبشرة، والمكياج الاحترافي — لإبراز أجمل نسخة منكِ.",
    "hero.stat1.value": "+10 آلاف",
    "hero.stat1.label": "عميلة سعيدة",
    "hero.stat2.value": "5",
    "hero.stat2.label": "خبراء تصفيف",
    "hero.stat3.value": "+90",
    "hero.stat3.label": "خدمة",
    "hero.scroll": "مرر للأسفل",

    // About
    "about.label": "من نحن",
    "about.title": 'نصنع <em>الجمال</em><br>بشغف',
    "about.location": "مسقط، عُمان",
    "about.story.title": 'حيث يلتقي الجمال <em>بالخبرة</em>',
    "about.story.desc": "وجهة تجميل رائدة في عُمان تقدم نتائج استثنائية من خلال منتجات فاخرة وأحدث التقنيات — مصممة خصيصاً لكل عميلة.",
    "about.story.btn": "احجزي موعد",
    "about.stat.value": '10 آلاف<span>+</span>',
    "about.stat.label": "عميلة سعيدة",
    "about.expertise.label": "خبراتنا",
    "about.pill.hair": "الشعر",
    "about.pill.nails": "الأظافر",
    "about.pill.makeup": "المكياج والتجميل",
    "about.years": 'سنوات من <em>التميّز</em>',
    "about.quote": '"كل عميلة تستحق أن تشعر بأنها النسخة الأجمل من نفسها."',
    "about.quote.author": "— فريق آلان للتجميل",

    // Services
    "svc.label": "ما نقدمه",
    "svc.title": '<em>قائمة الأسعار</em>',
    "svc.tab.hair": "خدمات الشعر",
    "svc.tab.nails": "استوديو الأظافر",
    "svc.tab.beauty": "المكياج والتجميل",
    "svc.book.text": "جميع الأسعار بالريال العماني. تواصلي معنا لحجز موعدكِ.",
    "svc.book.btn": "احجزي عبر واتساب",

    // Service Groups — Hair
    "svc.hair.group1": "قص الشعر، الغسيل والسشوار",
    "svc.hair.group1.badge": "9 خدمات",
    "svc.hair.group2": "صبغ الشعر والهايلايت",
    "svc.hair.group2.badge": "15 خدمة",
    "svc.hair.group3": "علاجات الشعر والبوتوكس",
    "svc.hair.group3.badge": "9 خدمات",
    "svc.hair.group4": "وصلات الشعر",
    "svc.hair.group4.badge": "3 خدمات",
    "svc.hair.group5": "تسريحات وضفائر",
    "svc.hair.group5.badge": "5 خدمات",

    // Service Groups — Nails
    "svc.nails.group1": "مانيكير وبديكير",
    "svc.nails.group1.badge": "9 خدمات",
    "svc.nails.group2": "خدمات جل بوليش",
    "svc.nails.group2.badge": "11 خدمة",
    "svc.nails.group3": "تركيب الأظافر والأوفرلاي",
    "svc.nails.group3.badge": "9 خدمات",
    "svc.nails.group4": "باقات الأظافر والإضافات",
    "svc.nails.group4.badge": "9 خدمات",

    // Service Groups — Beauty
    "svc.beauty.group1": "خدمات المكياج",
    "svc.beauty.group1.badge": "4 خدمات",
    "svc.beauty.group2": "تنظيف الوجه بالخيط والفيشل",
    "svc.beauty.group2.badge": "6 خدمات",
    "svc.beauty.group3": "خدمات إزالة الشعر بالشمع",
    "svc.beauty.group3.badge": "5 خدمات",

    // Gallery
    "gallery.label": "أعمالنا",
    "gallery.title": 'معرض <em>الجمال</em>',
    "gallery.tag.hair": "شعر",
    "gallery.tag.makeup": "مكياج",
    "gallery.tag.nails": "أظافر",
    "gallery.tag.skincare": "عناية بالبشرة",
    "gallery.tag.grooming": "عناية",

    // Team
    "team.label": "تعرّفي على الفريق",
    "team.title": '<em>خبراؤنا</em>',
    "team.nada.role": "موظفة استقبال",
    "team.sara.role": "أخصائية مانيكير وبديكير",
    "team.nadia.role": "مصففة شعر",
    "team.daniel.role": "مصفف شعر",
    "team.hanee.role": "أخصائية مانيكير وبديكير",

    // Reviews
    "reviews.label": "آراء العملاء",
    "reviews.title": 'ماذا تقول <em>عميلاتنا</em>',
    "review.1.text": '"أفضل تجربة صالون مررت بها في عُمان! نادية حوّلت شعري بشكل رائع. الأجواء فاخرة والموظفون محترفون للغاية."',
    "review.1.author": "— سارة م.",
    "review.2.text": '"فن أظافر مذهل واهتمام بالتفاصيل. فريق صالون آلان يفهم حقاً ما تريده العميلات. دائماً أغادر وأنا أشعر كالملكة!"',
    "review.2.author": "— فاطمة أ.",
    "review.3.text": '"مكياج زفافي كان مثالياً تماماً. الفريق بذل قصارى جهده لجعل يومي المميز أكثر جمالاً. أنصح بشدة!"',
    "review.3.author": "— مريم ك.",

    // Contact
    "contact.label": "تواصلي معنا",
    "contact.title": 'احجزي <em>موعدكِ</em>',
    "contact.heading": 'لنصنع <em>إطلالتكِ</em>',
    "contact.desc": "احجزي وتألقي معنا! تواصلي معنا لحجز موعدكِ أو زوري صالوننا للاستشارة.",
    "contact.phone.label": "الهاتف",
    "contact.phone.value": "+968 9690 0022",
    "contact.location.label": "الموقع",
    "contact.location.value": "مسقط، عُمان",
    "contact.hours.label": "ساعات العمل",
    "contact.hours.value": "يومياً: 10:00 صباحاً – 10:00 مساءً",
    "contact.form.name": "اسمكِ",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.service": "اختاري الخدمة",
    "contact.form.service.hair": "تصفيف الشعر",
    "contact.form.service.nails": "فن الأظافر والعناية",
    "contact.form.service.skincare": "العناية بالبشرة",
    "contact.form.service.makeup": "المكياج",
    "contact.form.service.packages": "الباقات",
    "contact.form.message": "رسالتكِ",
    "contact.form.submit": "أرسلي عبر واتساب",

    // Footer
    "footer.desc": "حيث يلتقي الجمال بالخبرة. خدمات شعر وأظافر وعناية بالبشرة ومكياج فاخرة في عُمان.",
    "footer.links": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.services.hair": "خدمات الشعر",
    "footer.services.nails": "استوديو الأظافر",
    "footer.services.makeup": "المكياج والتجميل",
    "footer.contact": "التواصل",
    "footer.copyright": "© 2026 صالون آلان للتجميل. جميع الحقوق محفوظة.",
    "footer.powered": "تشغيل بواسطة Land Of Fire Enterprisess",
  }
};

// ============ LANGUAGE SWITCHER LOGIC ============
function setLanguage(lang) {
  const html = document.documentElement;
  
  // Set direction and lang attribute
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang]?.[key];
    if (translation !== undefined) {
      el.innerHTML = translation;
    }
  });

  // Update all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[lang]?.[key];
    if (translation !== undefined) {
      el.setAttribute('placeholder', translation);
    }
  });

  // Update language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? 'عربي' : 'EN';
    btn.setAttribute('data-current-lang', lang);
  });

  // Save preference
  localStorage.setItem('alan-lang', lang);
}

function toggleLanguage() {
  const current = document.documentElement.getAttribute('lang') || 'en';
  const next = current === 'en' ? 'ar' : 'en';
  setLanguage(next);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Attach click handlers to all language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });

  // Load saved language preference
  const saved = localStorage.getItem('alan-lang') || 'en';
  if (saved === 'ar') {
    setLanguage('ar');
  }
});
