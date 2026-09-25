# Jacaré Amado — Landing Page

Site em Next.js (App Router) + Tailwind CSS para o consultório veterinário
**Jacaré Amado**. Feito pra ser simples de editar e fácil de publicar no
Vercel.

## Estrutura da página

1. Header — logo + "A Doutora", "Galeria", "Como chegar" (com a patinha)
2. Hero — headline + **dois CTAs**: WhatsApp e Instagram
3. A Doutora — foto, nome, CRMV, especializações
4. Faixa compacta de serviços
5. Galeria em carrossel (swipe no mobile, setas + indicadores, sem autoplay)
6. Vídeo/tour (play manual; o vídeo só carrega após o clique) + mosaico de fotos
7. Sobre
8. Como chegar (`#como-chegar`) — mapa, endereço, horário, telefones
9. Footer

## Como editar o conteúdo

Tudo o que aparece no site (textos, links, telefone, endereço, horário,
CRMV, especializações, fotos e vídeo) está em um único arquivo:

```
lib/site-config.ts
```

Itens ainda sem dado real estão marcados com `PLACEHOLDER` nesse arquivo e
aparecem no site como caixas pontilhadas com a etiqueta "placeholder".

### Trocar fotos e vídeo

1. Coloque os arquivos em `public/images/` (fotos) e `public/videos/` (vídeo).
2. Em `lib/site-config.ts`, troque o `null` pelo caminho, por exemplo:
   - `business.logo` → `"/images/logo.png"`
   - `hero.image` → `"/images/hero-arte.png"` (arte da doutora com os animais)
   - `doctor.photo` → `"/images/doutora.jpg"` (retrato 4:5)
   - `gallery.items[n].src` → fotos do carrossel (4:3) — ajuste também o `alt`
   - `mosaic[n].src` → fotos extras (a primeira aparece maior)
   - `video.src` → `"/videos/tour.mp4"` e `video.poster` → `"/images/tour-capa.jpg"` (16:9)

As fotos são otimizadas automaticamente pelo `next/image` (AVIF/WebP, lazy
load). Para o vídeo, prefira MP4 H.264 comprimido (idealmente até ~15 MB).

### Links

No bloco `contact`:

```ts
contact: {
  whatsappNumber: "5521982293526", // DDI + DDD + número, só dígitos
  whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
  instagramUrl: "https://www.instagram.com/SEU_USUARIO", // hoje vazio = placeholder
}
```

### Especializações

Em `doctor.specialties`, liste as áreas de atuação reais:

```ts
specialties: ["Área 1", "Área 2"],
```

## Patinha "Como chegar"

Qualquer link com `data-paw-trail` (hoje, o "Como chegar" do topo) dispara
pegadas pela lateral esquerda enquanto a página rola até a âncora. Lógica em
`components/PawTrail.tsx`, estilos em `app/globals.css`. Com
`prefers-reduced-motion` ativo, vai direto para a âncora sem animação; sem
JavaScript, funciona como link âncora comum.

## Rodar localmente

Precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou mais
recente).

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000 no navegador.

## Publicar no Vercel

**Opção mais simples (sem precisar de GitHub):**

1. Crie uma conta grátis em https://vercel.com
2. Instale a CLI: `npm i -g vercel`
3. Dentro da pasta do projeto, rode: `vercel`
4. Siga as perguntas (aceite os padrões) — em poucos segundos você recebe um
   link `https://....vercel.app` já no ar.
5. Quando quiser atualizar o site no ar depois de editar algo, rode `vercel
   --prod`.

**Opção via GitHub (recomendada se for continuar editando com frequência):**

1. Suba esta pasta para um repositório no GitHub.
2. Em https://vercel.com, clique em "Add New Project" e importe o
   repositório.
3. O Vercel detecta automaticamente que é um projeto Next.js — não precisa
   configurar nada, é só clicar em "Deploy".
4. Depois disso, todo `git push` atualiza o site automaticamente.

## Estrutura do projeto

```
app/                 página, layout (metadados) e favicon (icon.svg)
components/          seções: Header, Hero, DoctorSection, Services,
                     GalleryCarousel, VideoSection, PhotoMosaic, AboutSection,
                     LocationSection, Footer, PawTrail (+ Photo, Logo)
lib/site-config.ts   todo o conteúdo editável do site
lib/links.ts         monta links de WhatsApp, Instagram, mapa e telefone
public/images/       onde colocar as fotos reais
```
