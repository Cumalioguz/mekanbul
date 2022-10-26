var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res) {
  res.render("anasayfa", {
    baslik: "Ana Sayfa",
    sayfaBaslik: {
      siteAd: "MekanBul",
      slogan: "Civardaki Mekanları Keşfet!",
    },
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "4",
        imkanlar: ["Dünya Kahveleri", "Yiyecek", "Hızlı Wifi Bağlantısı"],
        mesafe: "100m",
      },
      {
        ad: "Gloria Jeans",
        adres: "Sdü Doğu Kampüsü",
        puan: "3",
        imkanlar: ["Kahve", "Çay", "Pasta"],
        mesafe: "5km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res) {
  res.render("mekanbilgisi", {
    baslik: "Mekan Bilgisi",
    mekanBaslik: "Starbucks",
    mekanDetay: {
      ad: "Starbucks",
      adres: "Centrum Garden AVM",
      puan: "4",
      imkanlar: ["Dünya Kahveleri", "Kekler", "Pastalar"],
      koordinatlar: {
        enlem: "37.7",
        boylam: "30.5",
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "9:00-23:00",
          kapali: "false",
        },
        {
          gunler: "Cumartesi-Pazar",
          acilis: "10:00-22:00",
          kapali: "false",
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Cumali Oğuz",
          puan: "4",
          tarih: "20 Ekim 2022",
          yorumMetni: "Kahveler güzel.",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
