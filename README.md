### Pastikan sebelumnya terinstal :
- node js
- npm

### Instal Typescript

```properties
npm i -g typescript
```

<h1>Cek Typescript</h1>

```properties
tsc --v
```

<h1>init project</h1>

```properties
tsc --init
```

## Set Config

<p>Masuk ke tsconfig.json</p>

Aktifkan dan ubah

```properties
"rootDir": "./src"
"outDir": "./bundle"

"noImplicitReturns": true,
"noImplicitOverride": true,
```

### Run Typescript

```properties
tsc && node bundle/index.js
```

### Reference

```properties
https://youtu.be/TZ87Hyqvy10?si=jF5XZ-W_hA5rsvm-
```

### Catatan

sebaiknya ketika membuat state declare dulu biar jelas
