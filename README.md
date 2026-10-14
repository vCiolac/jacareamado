# Jacaré Amado — Landing Page

Site em Next.js (App Router) + Tailwind CSS para o consultório veterinário
**Jacaré Amado**. Feito pra ser simples de editar e fácil de publicar no
Vercel. Versão compacta e mobile-first (especificação final de out/2026).

## Estrutura da página (5 blocos)

1. Header + Hero (`#inicio`) — logo, menu curto (hamburger no celular),
   WhatsApp, headline, foto e resumo de horário/endereço/telefones
2. Serviços (`#servicos`) — os seis serviços; swipe no celular, uma linha no desktop
3. A Doutora (`#doutora`) — foto, CRMV, especializações e a origem do nome
4. Nossa equipe (`#equipe`) — carrossel de fotos reais (sem autoplay)
5. Contato (`#contato`) — WhatsApp, rota, horário, endereço, telefones e mapa
6. Footer — logo, Instagram, WhatsApp, copyright e versículo

## Como editar o conteúdo

Tudo o que aparece no site (textos, links, telefone, endereço, horário,
CRMV, especializações e fotos) está em um único arquivo:

```
lib/site-config.ts
```

**Horário, endereço e telefones ficam só em `contact`** — o hero, o bloco de
contato e a descrição do site leem dali. Mude em um lugar só.

### Trocar fotos

1. Coloque os arquivos em `public/images/`.
2. Em `lib/site-config.ts`, aponte o caminho, por exemplo:
   - `business.logo` → `"/images/logo.png"`
   - `hero.image` → `"/images/hero-arte.png"` (arte da doutora com os animais; use `imageFit: "contain"`)
   - `doctor.photo` → `"/images/doutora.jpg"`
   - `team.items[n]` → fotos reais da equipe (4:5). Se tiver nome/função,
     preencha `caption`; sem isso, aparece só a foto. Não usar banco de imagens/IA.

As fotos são otimizadas automaticamente pelo `next/image` (AVIF/WebP, lazy
load abaixo da dobra).

### Links

No bloco `contact`:

```ts
contact: {
  whatsappNumber: "5521982293526", // DDI + DDD + número, só dígitos
  whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
  instagramUrl: "https://www.instagram.com/jacareamadoveterinariapopular",
}
```

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
components/          blocos: Header, Hero, Services, DoctorSection,
                     TeamCarousel, ContactSection, Footer (+ Photo, Logo, cta)
lib/site-config.ts   todo o conteúdo editável do site
lib/links.ts         monta links de WhatsApp, Instagram, mapa e telefone
public/images/       fotos reais
```
