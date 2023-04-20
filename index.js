const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5750338712:AAF_jNtnxgIhRY4h5j5WaPgZyj6CSzDTmjI";

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Global variable to store the last menu state
let lastMenuState = "main";

// Handle '/start' command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Yangiyo'l tumani maktablari haqida ma'lumotlar keltirilgan telegram bot 🤖\nKerakli bo'limni tanlang 📁",
    {
      reply_markup: {
        keyboard: [
          ["Maktablar ro'yxati 🏢"],
          ["Donat💸", "Baholash📊"],
          ["Qo'llab quvvatlash xizmati  📞"],
        ],
        resize_keyboard: true,
      },
    }
  );
});

// Handle menu button click
bot.onText(/Maktablar ro'yxati 🏢/, (msg) => {
  lastMenuState = "locations";
  bot.sendMessage(msg.chat.id, "Kerakli maktab lokatsiyasini tanlang📍", {
    reply_markup: {
      keyboard: [
        ["Yangiyo‘l tuman Maktabgacha va maktab ta'limi bo‘limi 📍"],
        ["1-maktab", "2-maktab", "3-maktab"],
        ["4-maktab", "5-maktab", "6-maktab"],
        ["7-maktab", "8-maktab", "9-maktab"],
        ["10-maktab", "11-maktab", "12-maktab"],
        ["13-maktab", "14-maktab", "15-maktab"],
        ["16-maktab", "17-maktab", "18-maktab"],
        ["19-maktab", "20-maktab", "21-maktab"],
        ["22-maktab", "23-maktab", "24-maktab"],
        ["25-maktab", "26-maktab", "27-maktab"],
        ["28-maktab", "29-maktab", "30-maktab"],
        ["31-maktab", "32-maktab", "33-maktab"],
        ["34-maktab", "35-maktab", "36-maktab"],
        ["37-maktab", "38-maktab", "39-maktab"],
        ["40-maktab", "41-maktab", "42-maktab"],
        ["43-maktab", "44-maktab", "45-maktab"],
        ["46-maktab", "47-maktab", "48-maktab"],
        ["49-maktab", "50-maktab", "51-maktab"],
        ["52-maktab", "53-maktab", "54-maktab"],
        ["55-maktab", "56-maktab", "57-maktab"],
        ["58-maktab"],

        ["🔙 Ortga"],
      ],
      resize_keyboard: true,
    },
  });
});
bot.onText(/Baholash📊/, (msg) => {
  lastMenuState = "locations";
  bot.sendMessage(
    msg.chat.id,
    "Izohingizni like👍 va dislike👎 ko'rinishida joylang",
    {
      reply_markup: {
        keyboard: [["👍", "👎"], ["🔙 Ortga"]],
        resize_keyboard: true,
      },
    }
  );
});
bot.onText(/Donat💸/, (msg) => {
  lastMenuState = "main";
  bot.sendMessage(
    msg.chat.id,
    "💳 Donat \n\n Agar sizga ushbu botning foydasi tegayotgan bo‘lsa va uning kelgusi faoliyatiga o‘z hissangizni qo‘shishni istasangiz, bizni moddiy qo‘llab-quvvatlashingiz mumkin. \n\n Donat uchun telefon raqami:\n +998 93-598-05-39"
  );
});
bot.onText(/Qo'llab quvvatlash xizmati  📞/, (msg) => {
  lastMenuState = "locations";
  bot.sendMessage(
    msg.chat.id,
    " Assalomu alaykum Qo'llab quvvatlash xizmatiga xush kelibsiz!📝\nQandaydir savol va takliflar uchun bizga murojaat qilishingiz mumkin📩\n\n+998 88-879-89-89 \nMadrimov Shuhrat Ruzmatovich"
  );
});

// Handle button clicks
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
    case "Yangiyo‘l tuman Maktabgacha va maktab ta'limi bo‘limi 📍":
      bot.sendLocation(chatId, 41.07247397295575, 69.02613669639399);
      break;
    case "1-maktab":
      bot.sendLocation(chatId, 41.074436, 69.0294896);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Gulbaxor MFY, Sh.Rashidov koʼchasi, 6-uy"
      );
      break;
    case "2-maktab":
      bot.sendLocation(chatId, 41.181845, 69.110204);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Nurafshon MFY Oʼzbekiston koʼchasi 55-uy"
      );
      break;
    case "3-maktab":
      bot.sendLocation(chatId, 41.178784, 69.071641);
      bot.sendMessage(chatId, "Yangiyoʼl tumani Chamanzor MFY");
      break;
    case "4-maktab":
      bot.sendLocation(chatId, 41.169368, 69.054193);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Qora tepa MFY Gʼalaba koʼcha 27-uy"
      );
      break;
    case "5-maktab":
      bot.sendLocation(chatId, 41.170647, 69.090144);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Changtepa MFY Olmaliq koʼcha 100-uy"
      );
      break;
    case "6-maktab":
      bot.sendLocation(chatId, 41.207659, 69.106779);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Tuyaboʼgʼiz MFY Doʼstlik koʼchasi 5-uy"
      );
      break;
    case "7-maktab":
      bot.sendLocation(chatId, 41.100512, 69.028612);
      bot.sendMessage(
        chatId,
        "Yangiyo'l tumani Pistalik MFY Tinchlik ko'chasi"
      );
      break;
    case "8-maktab":
      bot.sendLocation(chatId, 41.044697, 68.961935);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Saxovat MFY Yangi turmush 17-uy"
      );
      break;
    case "9-maktab":
      bot.sendLocation(chatId, 41.128442, 68.851892);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Umid MFY Sobir Raximov koʼchasi, rakamsiz uy"
      );
      break;
    case "10-maktab":
      bot.sendLocation(chatId, 41.1594, 69.114368);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Yuksalish MFY, Nafrsat koʼchasi, 6-uy"
      );
      break;
    case "11-maktab":
      bot.sendLocation(chatId, 41.162345, 69.187956);
      bot.sendMessage(chatId, "Yangiyoʼl tumani Obod MFY, А.Temur koʼchasi");
      break;
    case "12-maktab":
      bot.sendLocation(chatId, 41.154665, 69.112485);
      bot.sendMessage(chatId, "Afsus, hech nima topilmadi😐");
      break;
    case "13-maktab":
      bot.sendLocation(chatId, 41.102609, 69.092885);
      bot.sendMessage(chatId, "Guliston MFY N.Avazov kuchasi 1-A uy");
      break;
    case "14-maktab":
      bot.sendLocation(chatId, 41.099154, 69.083412);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Madaniyat MFY Maʼrifat koʼcha 42-uy"
      );
      break;
    case "15-maktab":
      bot.sendLocation(chatId, 41.149108, 69.109764);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Xoʼjaobod MFY, Mirzo Ulugʼbek koʼchasi, 42-uy"
      );
      break;
    case "16-maktab":
      bot.sendLocation(chatId, 41.10839, 69.09613);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Gulbogʼ MFY А.Navoiy koʼchasi 87-uy"
      );
      break;
    case "17-maktab":
      bot.sendLocation(chatId, 41.163845, 69.066762);
      bot.sendMessage(
        chatId,
        "Toshkent viloyati Yangiyoʼl tumani Qora repa MFY Guliston 35"
      );
      break;
    case "18-maktab":
      bot.sendLocation(chatId, 41.126986, 69.042538);
      bot.sendMessage(chatId, "Yangiyoʼl tuman Dexqonobod MFY Bodomzor 10-uy");
      break;
    case "19-maktab":
      bot.sendLocation(chatId, 41.19083, 69.027992);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Mirishkor MFY, Beruniy koʼchasi, 2-uy"
      );
      break;
    case "20-maktab":
      bot.sendLocation(chatId, 41.1098, 68.978211);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Yangiyoʼl MFY, Zafarobod koʼchasi, 1-uy"
      );
      break;
    case "21-maktab":
      bot.sendLocation(chatId, 41.091688, 69.06028);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Qirsadaq MFY, Madaniyat koʼchasi"
      );
      break;
    case "22-maktab":
      bot.sendLocation(chatId, 41.069823, 69.045241);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Xaqiqat M.F.Y Oltin obod koʼchasi"
      );
      break;
    case "23-maktab":
      bot.sendLocation(chatId, 41.107114, 69.075031);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Xaqiqat M.F.Y Oltin obod koʼchasi"
      );
      break;
    case "24-maktab":
      bot.sendLocation(chatId, 41.136042, 68.992361);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman Farovon MFY Doʼstlik koʼchasi 1-uy"
      );
      break;
    case "25-maktab":
      bot.sendLocation(chatId, 41.140407, 69.025599);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Registon MFY, Ma'rifat koʼchasi"
      );
      break;
    case "26-maktab":
      bot.sendLocation(chatId, 41.15894, 68.956119);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Iftixor MFY Obod koʼchasi 47-uy"
      );
      break;
    case "27-maktab":
      bot.sendLocation(chatId, 41.102769, 69.082833);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Binokor MFY, Navoiy koʼchasi, 1-uy"
      );
      break;
    case "28-maktab":
      bot.sendLocation(chatId, 41.160814, 69.012178);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Xalqobod MFY, Ziyo koʼchasi, 6-uy"
      );
      break;
    case "29-maktab":
      bot.sendLocation(chatId, 41.210003, 68.997897);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman, Nihol MFY, Nihol koʼchasi, 18-uy"
      );
      break;
    case "30-maktab":
      bot.sendLocation(chatId, 41.14515, 69.167258);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Samarkand Mfy A. Qodiriy koʼcha 2-uy"
      );
      break;
    case "31-maktab":
      bot.sendLocation(chatId, 41.095905, 69.00026);
      bot.sendMessage(
        chatId,
        "Toshkent viloyati, Yangiyoʼl tumani, Darxon MFY, Abay koʼchasi"
      );
      break;
    case "32-maktab":
      bot.sendLocation(chatId, 41.086273, 68.886634);
      bot.sendMessage(
        chatId,
        "Toshkent viloyati, Yangiyoʼl tumani, Darxon MFY, Аbay koʼchasi"
      );
      break;
    case "33-maktab":
      bot.sendLocation(chatId, 41.107851, 68.924468);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Ittifoq MFY, M.Ulugʼbek koʼchasi, 42-uy"
      );
      break;
    case "34-maktab":
      bot.sendLocation(chatId, 41.081246, 69.045515);
      bot.sendMessage(chatId, "Yangiyul tumani Bunyodkor MFY");
      break;
    case "35-maktab":
      bot.sendLocation(chatId, 41.146418, 69.09181);

      bot.sendMessage(msg.chat.id, "Afsus hech nima topilmadi 😐");
      bot.sendMessage(
        msg.chat.id,
        "Yangiyoʼl tumani 35-umumiy oʼrta maktab, Yangiyoʼl shahar 13-maktab boʼlib oʼtgan"
      );
      break;
    case "36-maktab":
      bot.sendLocation(msg.chat.id, 41.1568305, 69.0825811);
      bot.sendMessage(
        chatId,
        "Yangiyo'l tumani Qòshtepa MFY Totuvlik kòchasi 23-uy"
      );
      break;
    case "37-maktab":
      bot.sendLocation(chatId, 41.069836, 69.045202);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Soxibkor Mfy Uzumzor koʼchasi 51-uy"
      );
      break;
    case "38-maktab":
      bot.sendLocation(chatId, 41.159297, 68.989297);
      bot.sendMessage(chatId, "Yangiyul tumani Vatan maxallasi Obod kuchasi");
      break;
    case "39-maktab":
      bot.sendLocation(chatId, 41.157337, 68.908579);
      bot.sendMessage(chatId, "Yangiyul tuman Umid MFY");
      break;
    case "40-maktab":
      bot.sendLocation(chatId, 41.071845, 69.02698);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Koʼkalamzor MFY Yoshlik koʼchasi 4-uy"
      );
      break;
    case "41-maktab":
      bot.sendLocation(chatId, 41.002966, 69.002273);
      bot.sendMessage(
        chatId,
        "Toshkent viloyati, Yangiyoʼl tumani, Epkendi MFY, Doʼstlik koʼchasi, 1-uy"
      );
      break;
    case "42-maktab":
      bot.sendLocation(chatId, 41.123176, 68.934797);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Markaz MFY, Beshariq koʼchasi, 8-uy"
      );
      break;
    case "43-maktab":
      bot.sendLocation(chatId, 41.117121, 69.154013);
      bot.sendMessage(chatId, "Paxta MFY Yangiobod koʼchasi raqamsiz uy");
      break;
    case "44-maktab":
      bot.sendLocation(chatId, 41.091666, 69.030891);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Kovunchi MFY, Mustakillik koʼchasi, rakamsiz uy"
      );
      break;
    case "45-maktab":
      bot.sendLocation(chatId, 41.081586, 69.024952);
      bot.sendMessage(chatId, "Аxil MFY Samarkand kucha 2-uy");
      break;
    case "46-maktab":
      bot.sendLocation(chatId, 41.048302, 68.982987);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani, Jambul MFY, Jambul koʼchasi, 129-uy"
      );
      break;
    case "47-maktab":
      bot.sendLocation(chatId, 41.052338, 69.039497);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman Baytish mahallasi Julma Boʼxa koʼchasi"
      );
      break;
    case "48-maktab":
      bot.sendLocation(chatId, 41.038019, 69.029195);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Qoʼshyogʼoch MFY Ustozlar koʼcha 4-uy"
      );
      break;
    case "49-maktab":
      bot.sendLocation(chatId, 41.020115, 68.976232);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Yerkendi MFY, Epkendi ko'chasi"
      );
      break;
    case "50-maktab":
      bot.sendLocation(chatId, 41.065316, 68.922527);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tuman Mirzo Ulugʼbee MFY Nurziyo koʼchasi, raqamsiz uy"
      );
      break;
    case "51-maktab":
      bot.sendLocation(chatId, 41.081574, 68.946107);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Isloxat MFY, Isloxat koʼchasi, 40А-uy"
      );
      break;
    case "52-maktab":
      bot.sendLocation(chatId, 41.093312, 68.971782);
      bot.sendMessage(
        chatId,
        "Yangiyul tumani Mingbulok MFY, Istiklol koʼchasi, 67А-uy"
      );
      break;
    case "53-maktab":
      bot.sendLocation(chatId, 41.108844, 68.963438);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Markaz maxallasi Shoʼrolisoy koʼchasi 8 uy"
      );
      break;
    case "54-maktab":
      bot.sendLocation(chatId, 41.108646, 68.872364);
      bot.sendMessage(chatId, "Yangiyo'l tumani Do'stlik MFI");
      break;
    case "55-maktab":
      bot.sendLocation(chatId, 41.152462, 68.97448);
      bot.sendMessage(
        chatId,
        "Yangiyo'l tumani Vatan MFY Iqbol ko'chasi 36-uy"
      );
      break;
    case "56-maktab":
      bot.sendLocation(chatId, 41.151442, 69.019208);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani, Nurobod maxallasi, Nurafshon koʼchasi, 8-uy"
      );
      break;
    case "57-maktab":
      bot.sendLocation(chatId, 41.161063, 69.10834);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Oʼzbekiston MFY Oʼzbekiston koʼchasi 17-uy"
      );
      break;
    case "58-maktab":
      bot.sendLocation(chatId, 41.168462, 69.219182);
      bot.sendMessage(
        chatId,
        "Yangiyoʼl tumani Qirariq Mfy А. Loyihaviy koʼcha 2-uy"
      );
      break;

    case "👍":
    case "👎":
    case "🔙 Ortga":
    case "🔙 Ortga":
      switch (lastMenuState) {
        case "locations":
        case "main":
          bot.sendMessage(chatId, "Keraki bo'limni tanlang 🔍", {
            reply_markup: {
              keyboard: [
                ["Maktablar ro'yxati 🏢"],
                ["Donat💸", "Baholash📊"],
                ["Qo'llab quvvatlash xizmati  📞"],
              ],
              resize_keyboard: true,
            },
          });
          lastMenuState = "main";
          break;
      }
      break;
  }
});
