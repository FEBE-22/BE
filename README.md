# API Documentation

---

## Authentication

All API except login registration must use this authentication.
**Request:**

- Header:
  X-Api-Key : "Your Secret Api Key"

---

## Registration

**Request:**

- Method: POST
- Endpoint: /user/regis
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
- Body:

```
  {
  "nama_depan": "Alya",
  "nama_belakang": "Lala",
  "email": "alya@gmail.com",
  "password": "alya123"
  }
```

**Response**

```
{
    "success": true,
    "data": {
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$fMGhqrE/vyXlKr7Q/FkQfeTnLB5ZCTe27tISKzOi2zN9S.pvN0IDm",
        "role": "user",
        "_id": "63815449b6b60c8a94c219d3",
        "__v": 0
    },
    "message": "Register Successfully.."
}
```

---

## Login

**Request:**

- Method: POST
- Endpoint: /user/login
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
- Body:

```
  {
  "email": "alya@gmail.com",
  "password": "alya123"
  }
```

**Response**

```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFseWFAZ21haWwuY29tIiwiaWF0IjoxNjY5NDIwMjg5fQ.9sCpbMADGlcipT0nU01avyXw5-8IEXu2YqJYSzWNFnc",
    "message": "login Successfully..",
    "role": "user"
}
```

---

## Get Profil

**Request:**

- Method: GET
- Endpoint: /user/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

**Response**

```
{
    "success": true,
    "data": {
        "_id": "63815449b6b60c8a94c219d3",
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$fMGhqrE/vyXlKr7Q/FkQfeTnLB5ZCTe27tISKzOi2zN9S.pvN0IDm",
        "role": "user",
        "__v": 0
    },
    "message": "User is get successfully"
}
```

---

## Update Profil

**Request:**

- Method: POST
- Endpoint: /user/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body:

```
{
    "nama_depan": "Alya",
    "nama_belakang": "Lala",
    "no_telp": "087737854004",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "Cilegon",
    "tanggal_lahir": "31 Desember 2001",
    "email": "alya@gmail.com",
    "alamat": "Jl. Kh. Abdullatif"
}
```

**Response**

```
{
    "data": {
        "_id": "6380c7ade1cd91fb64c6013f",
        "nama_depan": "Alya",
        "nama_belakang": "Lala",
        "email": "alya@gmail.com",
        "password": "$2b$10$K3t5i74Dd3papk71xlogU.F3pp5wJHwvN3Vd1EBMVWIIr.iq9qgAe",
        "role": "admin",
        "__v": 0,
        "alamat": "Jl. Kh. Abdullatif",
        "jenis_kelamin": "Perempuan",
        "no_telp": "087737854004",
        "tanggal_lahir": "31 Desember 2001",
        "tempat_lahir": "Cilegon"
    },
    "message": "Update data user is success"
}
```

---

## Create Dokter

**Request:**

- Method: POST
- Endpoint: /dokter
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]
- Body:

```
{
    "nama": "Dafa",
    "spesialis": "Umum",
    "pengalaman": "3 Tahun",
    "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
    "harga": "Rp. 250.000"
}
```

**Response**

```
{
    "success": true,
    "data": {
        "nama": "Dafa",
        "spesialis": "Umum",
        "pengalaman": "3 Tahun",
        "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
        "harga": "Rp. 250.000",
        "_id": "637ebb8b89882e3f26a4e122",
        "__v": 0
    },
    "message": "You Have Successfully Created Doctor Data"
}
```

---

## Get All Dokter

**Request:**

- Method: GET
- Endpoint: /dokter
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

**Response**

```
{
    "data": [
        {
            "_id": "637ebb8b89882e3f26a4e122",
            "nama": "Dafa",
            "spesialis": "Umum",
            "pengalaman": "3 Tahun",
            "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
            "harga": "Rp. 250.000",
            "__v": 0
        }
    ],
    "message": "Get All Dokter Successfully"
}
```

---

## Get Dokter By Id

**Request:**

- Method: GET
- Endpoint: /dokter/byId
- Header:
  - Content-Type: Application/json
  - Accept: Application/json
  - Authorization : bearer [jwt]

**Response**

```
{
    "success": true,
    "data": {
        "_id": "637ebb8b89882e3f26a4e122",
        "nama": "Dafa",
        "spesialis": "Umum",
        "pengalaman": "3 Tahun",
        "detail_info": "Dr. Dafa adalah Dokter Spesialis Umum yang aktif melayani pasien di RS FEBE Medika. Dr. Dafa mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.",
        "harga": "Rp. 250.000",
        "__v": 0
    },
    "message": "Dokter is Get Successfully"
}
```

---

##
