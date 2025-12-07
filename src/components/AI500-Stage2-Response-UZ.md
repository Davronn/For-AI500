# AI500! 2-bosqich - Demo taqdimoti

**Xakaton:** Agrobank va O'zbekiston IT-hamjamiyati - AI500!
**Bosqich:** 2
**Jamoa:** Drone University

---

## 1. Nimani namoyish qilmoqdamiz

**Drone University** — bu qishloq xo'jaligi dronlari uchun pilotlarni o'qitish brauzerdagi platforma:

### Demo asosiy funksiyalari

| Funksiya | Tavsif |
|----------|--------|
| **3D WebGL parvoz simulyatori** | Brauzerda real vaqtda 60fps tezlikda dron parvozi |
| **Haqiqiy PX4 fizikasi** | Ochiq kodli avtopilot dasturining satr-satr porti |
| **Sun'iy intellekt parvoz instruktori** | GPT-4 telemetriyani tahlil qiladi va shaxsiy fikr-mulohaza beradi |
| **O'quv missiyalari** | 4 ta qiyinlik darajasi: Asosiy hovering → Kontur bo'ylab parvoz → Aniq purkash → Favqulodda qo'nish |
| **Real vaqt HUD** | Balandlik, tezlik, batareya zaryadi va pozitsiyani ko'rsatish |
| **Ikki tomonlama soat hisobi** | Simulyator soatlari + instruktor tasdiqlashi bilan haqiqiy parvoz jurnali |

### Mahsulot namoyishi

```
1. Bosh sahifa       → Platformaga umumiy ko'rinish va qiymat taklifi
2. Boshqaruv paneli  → Foydalanuvchi progressi, statistika, tezkor navigatsiya
3. Simulyator        → Klaviatura boshqaruvi bilan interaktiv 3D parvoz
4. Parvozdan keyin   → Sun'iy intellekt tahlili bilan baholar va tavsiyalar
5. Progress          → Ko'nikmalar taqsimoti va sertifikatlashni kuzatish
6. Sertifikatlar     → Boshlang'ich pilotdan instruktorgacha yo'l
```

### Simulyator boshqaruvi

| Tugma | Harakat |
|-------|---------|
| W/S yoki ↑/↓ | Pitch (oldinga/orqaga) |
| A/D yoki ←/→ | Yaw (chapga/o'ngga burilish) |
| Q/E | Roll (chapga/o'ngga og'ish) |
| Bo'sh joy/Shift | Gaz (ko'tarilish/tushish) |
| Sichqoncha | Orbital kamera |
| R | Kamerani qayta o'rnatish |

---

## 2. Muammo va yechim bilan bog'liqlik

### Muammo

| Qiyinchilik | Ta'siri |
|-------------|---------|
| **Yuqori o'qitish narxi** | An'anaviy o'qitish uchun dron narxi 5,000-15,000 AQSh dollari |
| **Geografik to'siqlar** | Ixtisoslashtirilgan markazlarda yuzma-yuz o'qitish talab qilinadi |
| **Masshtablash muammolari** | 1 instruktor faqat bir necha talabani o'qita oladi |
| **Standartlashtirish yo'qligi** | Qishloq xo'jaligi dron operatorlari uchun mintaqaviy sertifikatsiya yo'q |
| **Talab va taklif orasidagi farq** | Dronlarni qo'llash yiliga 35% o'sadi, ammo sertifikatlangan pilotlar kam |

### Nega bu muammo muhim

- Qishloq xo'jaligi dronlari aniq purkash orqali hosildorlikni 15-20% ga oshiradi
- Markaziy Osiyo agrar sektori texnologik modernizatsiyaga muhtoj
- O'qitilgan pilotsiz qimmatbaho uskunalar bekor turadi
- Oziq-ovqat xavfsizligi qishloq xo'jaligini modernizatsiya qilishga bog'liq

### Bizning yechim

| An'anaviy o'qitish | Drone University |
|--------------------|------------------|
| Uskuna narxi $5K-15K | **Brauzerda, uskunasiz** |
| Har bir talabaga 1 instruktor | **Sun'iy intellekt instruktor cheksiz masshtablanadi** |
| Joylashuvga bog'liq | **Dunyoning istalgan nuqtasidan, 24/7** |
| Yagona sertifikatsiya yo'q | **Integratsiyalashgan sertifikatsiya yo'li** |
| Tugatish uchun haftalar/oylar | **O'z sur'atida, tezlashtirilgan o'qitish** |

### Yechim amalda (Demo)

Demo to'g'ridan-to'g'ri har bir muammoni hal qiladi:

1. **Narx to'sig'i** → Brauzer simulyatori uskunaga investitsiya talab qilmaydi
2. **Geografik cheklovlar** → Veb-brauzer orqali butun dunyo bo'ylab kirish
3. **Masshtablilik** → Sun'iy intellekt cheksiz talabalar soniga shaxsiy o'qitishni ta'minlaydi
4. **Standartlashtirish** → Progressni kuzatish bilan o'rnatilgan sertifikatsiya yo'li
5. **Samaradorlik** → Real vaqtda qayta aloqa ko'nikmalarni rivojlantirishni tezlashtiradi

---

## 3. Stack, texnologiyalar va sun'iy intellekt yechimlari

### Texnologik stack umumiy ko'rinishi

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js 16)                    │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│  Bosh       │  Panel      │  Simulyator │  O'qitish        │
│  sahifa     │  (Zustand)  │  (Three.js) │  (Kurslar)       │
└─────────────┴──────┬──────┴──────┬──────┴──────────────────┘
                     │             │
                     ▼             ▼
              ┌──────────┐  ┌─────────────┐
              │  Convex  │  │  PX4 Porti  │
              │  Backend │  │  (Klient)   │
              └────┬─────┘  └──────┬──────┘
                   │               │
                   ▼               ▼
              ┌──────────┐  ┌─────────────┐
              │  Ma'lu-  │  │  Telemetri- │
              │  motlar  │  │  ya yozish  │
              │  bazasi  │  └──────┬──────┘
              │(Foydala- │         │
              │ nuvchilar)│        ▼
              └──────────┘  ┌─────────────┐
                            │  OpenRouter │
                            │  (GPT-4)    │
                            └─────────────┘
```

### Batafsil texnologiya taqsimoti

| Qatlam | Texnologiya | Versiya | Maqsad |
|--------|-------------|---------|--------|
| **Framework** | Next.js | 16.0.3 | Server tomonida rendering, App Router |
| **UI kutubxonasi** | React | 19.2.0 | Komponentga asoslangan UI |
| **Til** | TypeScript | 5.x | Tip xavfsizligi |
| **Stil** | Tailwind CSS | 4.x | Utility CSS |
| **3D grafika** | Three.js | 0.181.1 | WebGL rendering |
| **3D React** | React Three Fiber | 9.4.0 | Three.js uchun React renderer |
| **3D yordamchilar** | @react-three/drei | 10.7.7 | Kamera, osmon, boshqaruv |
| **Holat** | Zustand | 5.0.8 | Yengil holat boshqaruvi |
| **Backend** | Convex | 1.29.1 | Serverless + real-time DB |
| **Sun'iy intellekt** | OpenRouter API | - | GPT-4 parvoz tahlili |
| **Sun'iy intellekt SDK** | OpenAI SDK | 6.9.0 | API klient |
| **i18n** | next-intl | 4.5.5 | Ko'p tillilik (EN/RU) |
| **Grafiklar** | Recharts | 3.4.1 | Analitika vizualizatsiyasi |
| **Test** | Puppeteer | 24.30.0 | Avtomatlashtirilgan brauzer testlari |

### Amalga oshirilgan sun'iy intellekt yechimlari

#### 1. Sun'iy intellekt parvoz instruktori (GPT-4)

**Qanday ishlaydi:**
```
Parvoz tugadi → Telemetriya yozildi → Sun'iy intellekt tahlili → Shaxsiy fikr-mulohaza
```

**Sun'iy intellekt imkoniyatlari:**

| Funksiya | Tavsif |
|----------|--------|
| **Ish samaradorligi tahlili** | Balandlik barqarorligi, tezlikni nazorat qilish, batareya samaradorligini baholash |
| **Xavfsizlik buzilishlarini aniqlash** | Real vaqtda 5 turdagi buzilishlarni aniqlash |
| **Baholash** | Maqsadlar + xavfsizlik + samaradorlik asosida 0-100 ball |
| **Kuchli tomonlar** | Talaba yaxshi bajargan 3-5 ta aniq narsa |
| **Yaxshilanishlar** | Texnikalar bilan 2-3 ta amaliy tavsiya |
| **Tayyorgarlikni baholash** | Keyingi qiyinlik darajasiga tayyorligini aniqlash |

#### 2. Xavfsizlik buzilishlarini aniqlash

```typescript
const safetyViolations = {
  overspeed:      speed > 15,              // m/s
  lowAltitude:    altitude < 0.8,          // metr
  lowBatteryFar:  battery < 20 && distance > 50,
  rapidDescent:   verticalSpeed < -5,      // m/s
  sharpTurn:      yawRate > 45             // daraja/sekund
};
```

#### 3. Telemetriya qayta ishlash

Sun'iy intellekt har bir parvozda 50+ ma'lumot nuqtasini tahlil qiladi:
- Pozitsiya (X, Y, Z koordinatalari)
- Yo'nalish (roll, pitch, yaw burchaklari)
- Tezlik va tezlanish
- Batareya zaryadi sarfi
- To'qnashuv hodisalari
- Missiya maqsadlarini bajarish

### Asosiy texnik innovatsiya: PX4 parvoz kontrolleri

Biz **haqiqiy PX4 avtopilot algoritmlarini (v1.14.3)** brauzerda ishlashi uchun portladik:

```
/lib/px4-port/
├── RateControl.ts          # Burchak tezliklari uchun PID kontroller
├── MotorMixer.ts           # Saturatsiya bilan Quad X motor mikseri
├── AttitudeControl.ts      # Avtomatik tekislash va barqarorlashtirish
├── PX4FlightController.ts  # Asosiy kontroller o'rami
└── math/
    ├── Vector3.ts          # 3D vektor operatsiyalari
    └── utils.ts            # wrap_pi, constrain funksiyalari
```

**Nega bu muhim:**
- Tijorat dronlarida (DJI Agras va boshqalar) ishlatiladigan algoritmlar bilan bir xil
- Realistik parvoz harakati (~88% gazda hovering)
- Motor saturatsiyasi agressiv manevrlarda realistik balandlik yo'qotishiga olib keladi
- Talabalar haqiqiy uskunaga o'xshash fizikada o'qitiladi
- Nol kechikish (klient tomonida 60fps da bajarish)

---

## 4. Yo'l xaritasi bosqichi va keyingi qadamlar

### Joriy bosqich: MVP (95% tayyor)

```
G'oya ──────> Prototip ──────> [MVP] ──────> Ishga tushirildi
                                ▲
                                │
                           BIZ SHU YERDAMIZ
```

### Ishlab chiqish progressi

| Komponent | Holat | Tayyorlik |
|-----------|-------|-----------|
| 3D parvoz simulyatori | Tayyor | 100% |
| PX4 parvoz fizikasi | Tayyor | 100% |
| Sun'iy intellekt parvoz instruktori | Tayyor | 100% |
| O'quv missiyalari (4) | Tayyor | 100% |
| Progress kuzatish | Tayyor | 100% |
| Ko'p tillilik (EN/RU) | Tayyor | 100% |
| Foydalanuvchi autentifikatsiyasi | Jarayonda | 80% |
| To'lov integratsiyasi | Rejalashtirilgan | 0% |
| Mobil optimallashtirish | Rejalashtirilgan | 30% |
| **Umumiy MVP** | **Deyarli tayyor** | **95%** |

### Hozir nima ishlayapti

#### Asosiy platforma
- [x] Funksiyalar ko'rinishi bilan bosh sahifa
- [x] Foydalanuvchi personaları bilan interaktiv boshqaruv paneli
- [x] Internationalizatsiya (ingliz, rus)
- [x] Moslashuvchan dizayn

#### Parvoz simulyatori
- [x] 60fps da to'liq 3D WebGL muhit
- [x] PX4 parvoz kontrolleri (haqiqiy algoritmlar)
- [x] Professional dron modeli (PX4 Iris)
- [x] Blur effekti bilan animatsiyalangan pervanalar
- [x] Yer bilan to'qnashuvni aniqlash
- [x] Real vaqt telemetriya HUD
- [x] Klaviatura boshqaruvi
- [x] Bir nechta kamera rejimlari

#### Sun'iy intellekt integratsiyasi
- [x] Parvozdan keyingi tahlil endpoint
- [x] GPT-4 fikr-mulohaza generatsiyasi
- [x] Xavfsizlik buzilishlarini aniqlash
- [x] Ball hisoblash va tushuntirish
- [x] Shaxsiy tavsiyalar

#### O'qitish tizimi
- [x] 4 ta o'quv missiyasi (Boshlang'ich → Ilg'or)
- [x] Ko'nikmalar taqsimoti (6 ta asosiy ko'nikma)
- [x] Yutuqlar tizimi
- [x] Sertifikatsiya yo'li (4 daraja)
- [x] Haqiqiy parvoz jurnali interfeysi

### Keyingi qadamlar (Yaqin)

| Ustuvorlik | Vazifa | Muddat |
|------------|--------|--------|
| 1 | Production joylashtirish (AWS App Runner) | 1-hafta |
| 2 | Gamepad qo'llab-quvvatlash qo'shish | 2-hafta |
| 3 | FPV kamera rejimini amalga oshirish | 2-hafta |
| 4 | Stripe to'lov integratsiyasini tugatish | 3-hafta |
| 5 | O'zbek tilini qo'llab-quvvatlash qo'shish | 3-hafta |

### Yo'l xaritasi bosqichlari

| Bosqich | Holat | Asosiy natijalar |
|---------|-------|------------------|
| **1-bosqich - MVP** | **95%** | 3D simulyator, PX4 fizikasi, Sun'iy intellekt instruktor, progress kuzatish |
| **2-bosqich - Ishga tushirish** | Rejalashtirilgan | Production joylashtirish, to'lovlar, mobil ilova |
| **3-bosqich - Kengayish** | Rejalashtirilgan | Qozog'iston, Qirg'iziston, Tojikiston bozorlari |
| **4-bosqich - Ilg'or** | Rejalashtirilgan | VR qo'llab-quvvatlash, multiplayer, blockchain sertifikatlar |

### Biznes bosqichlari

| Bosqich | Maqsad |
|---------|--------|
| Beta ishga tushirish | O'zbekistonda 50 ta pilot-talaba |
| Korporativ pilotlar | 3-5 ta qishloq xo'jaligi kooperativi |
| Rasmiy tan olish | Qishloq xo'jaligi vazirligi bilan hamkorlik |
| 1-yillik ARR | $1.2M (1,000 talaba + 50 korporativ hisob) |
| 3-yillik ARR | Mintaqaviy kengayish bilan $5M |

---

## Xulosa

| Savol | Javob |
|-------|-------|
| **Nima namoyish qilinmoqda?** | Sun'iy intellekt instruktor bilan brauzerda 3D dron parvoz simulyatori |
| **Qanday muammo hal qilinmoqda?** | Markaziy Osiyoda dron pilotlarini qimmat va qiyin o'qitish |
| **Asosiy texnologiyalar?** | Next.js, Three.js, PX4 porti, GPT-4, Convex |
| **Sun'iy intellekt yechimlari?** | Parvoz tahlili, xavfsizlik buzilishlarini aniqlash, shaxsiy o'qitish |
| **Yo'l xaritasi bosqichi?** | MVP (95% tayyor) |
| **Keyingi qadamlar?** | Production joylashtirish, to'lovlar, mintaqaviy kengayish |

---

*Hujjat AI500! 2-bosqich uchun tayyorlangan - 2025-yil dekabr*
