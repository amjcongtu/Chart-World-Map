## Tên dự án

Jaxtina

Để bắt đầu với dự án này, bạn cần cài đặt [Node.js](https://nodejs.org/) và [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

Yêu cầu node >= 16 , react >= 16

### Cài Đặt

1. Clone repository:

   git clone https://github.com/amjcongtu/JaxTina.git

Di chuyển vào thư mục dự án:

cd Jaxtina

## Cài đặt

yarn install hoặc npm install

## Tạo file .env

VITE_APP_BASE_API_URL=https://restcountries.com


## Chạy ứng dụng

yarn dev

## Build ứng dụng

yarn build


## Cấu Trúc Thư Mục

src

   assets  


   components

      Layout
      Loading
      Menu
      ...

   helper

      helper.ts

   pages

      Chart
      WorldMap
      ...

   service
      queries
             useCountries
      apiClient

   theme

   utils

App
