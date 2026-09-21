# Jacaré Amado — Landing Page

Site em Next.js (App Router) + Tailwind CSS para o consultório veterinário
**Jacaré Amado**. Feito pra ser simples de editar e fácil de publicar no
Vercel.

## Como editar o conteúdo

Praticamente tudo o que aparece no site (textos, telefone, endereço,
horário, serviços, dados da doutora, link do WhatsApp) está em um único
arquivo:

```
lib/site-config.ts
```

Abra esse arquivo, mude o que quiser e salve — não precisa mexer em nenhum
componente para trocar texto, telefone, endereço, etc.

### Trocar as fotos

As imagens da doutora ainda estão como placeholder (um quadro pontilhado
"espaço para foto"). Quando tiver as fotos reais:

1. Coloque os arquivos em `public/images/` (ex: `public/images/hero.jpg`,
   `public/images/sobre.jpg`).
2. Em `lib/site-config.ts`, troque:
   - `hero.image` → `"/images/hero.jpg"`
   - `about.image` → `"/images/sobre.jpg"`

### Trocar o número de WhatsApp ou a mensagem padrão

Também em `lib/site-config.ts`, no bloco `contact`:

```ts
contact: {
  whatsappNumber: "5521982293526", // DDI + DDD + número, só dígitos
  whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
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
app/                 páginas e layout raiz
components/          seções do site (Header, Hero, Services, About, etc.)
lib/site-config.ts   todo o conteúdo editável do site
lib/whatsapp.ts       monta o link do botão de WhatsApp
public/images/        onde colocar as fotos reais
```
