# Product Manager API

Node.js ve Express.js ile geliştirilmiş, ürün yönetimini kolaylaştıran bir API uygulaması. CRUD (Create, Read, Update, Delete) işlemlerini destekler.  

## Özellikler  
- Ürün ekleme, listeleme, güncelleme ve silme işlemleri  
- Fiyat aralığına göre filtreleme (`gt`, `gte`, `lt`, `lte`)  
- Kategori bazlı ürün listeleme  

## Kurulum  
Projeyi klonlayın:  
```bash
git clone https://github.com/kullanici-adin/product-manager-api.git
```

Dizine gidin:  
```bash
cd product-manager-api
```

Gerekli bağımlılıkları yükleyin:  
```bash
npm install
```

## Ortam Değişkenleri  
Bir `.env` dosyası oluşturarak aşağıdaki değişkenleri ekleyin:  
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

## Çalıştırma  
Uygulamayı başlatın:  
```bash
npm run dev
```

API, [http://localhost:5000](http://localhost:5000) adresinde çalışacaktır.  

## API Dökümantasyonu  

| Metot | Endpoint            | Açıklama                 |
|--------|---------------------|--------------------------|
| GET    | `/products`        | Tüm ürünleri listele     |
| POST   | `/products`        | Yeni ürün ekle           |
| GET    | `/products/:id`    | ID'ye göre ürün getir    |
| PUT    | `/products/:id`    | Ürünü güncelle           |
| DELETE | `/products/:id`    | Ürünü sil                |

## Filtreleme  
Belirli kriterlere göre ürünleri filtreleyebilirsiniz:  
```bash
GET /products?price[gt]=100&price[lte]=500
GET /products?category=electronics
```

| Sorgu Parametresi | Açıklama                    |
|-------------------|-----------------------------|
| `gt`             | Belirtilen değerden büyük   |
| `gte`            | Belirtilen değerden büyük veya eşit |
| `lt`             | Belirtilen değerden küçük   |
| `lte`            | Belirtilen değerden küçük veya eşit |
| `eq`            | Belirtilen değerden eşit |
| `ne`             | Belirtilen değere eşit olmayan   |
| `exists`            | Alanın var olup olmadığını |

## Lisans  
Bu proje MIT Lisansı ile lisanslanmıştır.
