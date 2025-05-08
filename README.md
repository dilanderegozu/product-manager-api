# 🛒 Product Manager API

## 🇹🇷 Türkçe

**Product Manager API**, Node.js ve Express.js kullanılarak geliştirilmiş, ürünleri yönetmek ve filtrelemek için kullanılan bir backend API'sidir. API, ürünleri fiyat, kategori ve diğer kriterlere göre filtreleyebilmenizi sağlar.

### 🚀 Özellikler

- Ürün ekleme, güncelleme, silme işlemleri
- Fiyat aralığına göre filtreleme (`gt`, `gte`, `lt`, `lte`, `eq`, `ne`, `exists`)
- Kategori bazlı ürün listeleme
- Ürünleri belirli kriterlere göre sıralama
- MongoDB ile veri saklama

### 🛠️ Teknolojiler

- **Node.js** – JavaScript çalışma zamanı
- **Express.js** – Web uygulama çatısı
- **MongoDB & Mongoose** – Veritabanı ve ODM
- **dotenv** – Ortam değişkenleri yönetimi

### ⚙️ Kurulum

```bash
git clone https://github.com/dilanderegozu/product-manager-api.git
cd product-manager-api
npm install
cp .env.example .env
# .env dosyasına gerekli bilgileri girin: MONGO_URI
npm run dev
```

### 📁 Proje Yapısı

```
product-manager-api/
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── validations/
├── app.js
└── server.js
```

### ✅ API Uç Noktaları

| Yöntem | URL                  | Açıklama                 | Koruma |
|--------|----------------------|--------------------------|--------|
| GET    | `/products`          | Tüm ürünleri listele     | ❌     |
| GET    | `/products/:id`      | ID'ye göre ürün getir    | ❌     |
| POST   | `/products`          | Yeni ürün oluştur        | ✅ Admin |
| PUT    | `/products/:id`      | Ürünü güncelle           | ✅ Admin |
| DELETE | `/products/:id`      | Ürünü sil                | ✅ Admin |

### 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

### 📬 İletişim

GitHub üzerinden [@dilanderegozu](https://github.com/dilanderegozu) ile iletişime geçebilirsiniz.

---

## 🇬🇧 English

**Product Manager API** is a backend API developed using Node.js and Express.js for managing and filtering products. The API allows you to filter products by price, category, and other criteria.

### 🚀 Features

- Add, update, and delete products
- Price range filtering (`gt`, `gte`, `lt`, `lte`, `eq`, `ne`, `exists`)
- Category-based product listing
- Sort products by specific criteria
- Data storage with MongoDB

### 🛠️ Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB & Mongoose** – Database and ODM
- **dotenv** – Environment variable management

### ⚙️ Installation

```bash
git clone https://github.com/dilanderegozu/product-manager-api.git
cd product-manager-api
npm install
cp .env.example .env
# Fill in .env with: MONGO_URI
npm run dev
```

### 📁 Project Structure

```
product-manager-api/
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── validations/
├── app.js
└── server.js
```

### ✅ API Endpoints

| Method | URL                  | Description             | Protected |
|--------|----------------------|-------------------------|-----------|
| GET    | `/products`          | Get all products        | ❌        |
| GET    | `/products/:id`      | Get product by ID       | ❌        |
| POST   | `/products`          | Create a new product    | ✅ Admin  |
| PUT    | `/products/:id`      | Update a product        | ✅ Admin  |
| DELETE | `/products/:id`      | Delete a product        | ✅ Admin  |

### 📄 License

This project is licensed under the MIT License.

### 📬 Contact

Feel free to reach out via GitHub: [@dilanderegozu](https://github.com/dilanderegozu)
