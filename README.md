[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c6ac0878fcd549999a249c4b7283bc0f)](https://www.codacy.com/app/serhanpw/Discord-Custom-RPC?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Serhann/Discord-Custom-RPC&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/Serhann/Discord-Custom-RPC.svg?branch=master)](https://travis-ci.org/Serhann/Discord-Custom-RPC)
[![Greenkeeper badge](https://badges.greenkeeper.io/Serhann/Discord-Custom-RPC.svg)](https://greenkeeper.io/)
[![Discord](https://discordapp.com/api/guilds/290706445781958658/embed.png)](https://discord.gg/GvfuXmE)

# Discord Custom RPC
RPC yapmasını kolaylaştıran bir uygulama.

**Discord içi görünüm:**
![Görünüm](http://serhan.pw/galeri/Discord-Custom-RPC.png)

## Gerekli olan programlar vb
  - NodeJS >=8
  - npm (>=5)
  - Discord (herhangi bir versiyon)
  - Git

## Nasıl çalışır?
  Çalıştırmak için öncelikle aşağıdaki işlemleri yapmalısınız.
  
  - https://discordapp.com/developers/applications/me adresine girin,
  - Bir "Application" (bot) oluşturun. (Discord'da "<bot ismi> Oynuyor" şeklinde gözükecektir),
  - "Enable Rich Presence"'e basın,
  - Altta açılan yerden "large" (büyük) ve "small" (küçük) olacak şekilde iki fotoğraf yükleyin,
  - Ardından config.json dosyasından ayarlarınızı yapın,
  - Ayarları yaptıktan sonra "start.bat" ile uygulamayı başlatın.
  
  ## Config'dekilerin açıklamaları
  
  - "id": oluşturduğumuz botun ID numarası,
  - "transport": transport tipi. (Varsayılan: ipc)
  - "details": ilk satırda çıkacak olan yazı,
  - "state": ikinci satırda çıkacak olan yazı,
  - "largeImageKey": large (büyük) olarak yüklediğimiz resme koyduğumuz ad,
  - "largeImageText": large (büyük) olarak yüklediğimiz resmin üstüne imleç getirince çıkacak yazı,
  - "smallImageKey": small olarak yüklediğimiz resme koyduğumuz ad,
  - "smallImageText": small (küçük) olarak yüklediğimiz resmin üstüne imleç getirince çıkacak yazı,
  - "delay": Kaç dakikada bir RPC ayarlarımızın Discord'a gönderileceği. (cinsi ms (milisaniye)'dir)
