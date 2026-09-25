# BRIEFING DE REDESIGN — SITE JACARÉ AMADO

## Objetivo
Transformar a página atual em um site mais profissional, leve, confiável e direto, preservando a identidade visual e as artes já aprovadas, mas reduzindo a poluição visual e conduzindo o visitante para duas ações principais: **WhatsApp e Instagram**.

## Direção geral
- Preservar logo, azul/rosa, ilustrações e tom acolhedor.
- Reduzir a quantidade de cards, botões, caixas e elementos competindo ao mesmo tempo.
- Aumentar espaço em branco, hierarquia visual e protagonismo de fotos reais.
- O site deve parecer uma clínica veterinária profissional e próxima, não um catálogo de widgets.

## Nova estrutura
1. **Header enxuto** — logo + A Doutora + Galeria + Como chegar.
2. **Hero** — headline curta, arte principal e **somente dois CTAs grandes**: WhatsApp e Instagram.
3. **Doutora + especializações** — foto real, nome, CRMV, áreas de atuação/especializações e texto curto.
4. **Galeria em carrossel** — clínica, ambiente e animais atendidos.
5. **Vídeo/tour da clínica** — poster + play manual, sem autoplay com áudio.
6. **Mosaico de fotos extras** — pequeno e visual.
7. **Sobre** — texto institucional curto e humano.
8. **Como chegar** — mapa, endereço, horário e contato.
9. **Footer compacto**.

## Hero / CTAs
- Exatamente dois CTAs principais: **Falar no WhatsApp** e **Ver Instagram**.
- Horário/endereço podem aparecer como informação, mas não como novos botões.
- A arte atual pode permanecer, porém com mais respiro e menos elementos flutuantes.

## Galeria e vídeo
- Desktop: 2–3 imagens por vez. Mobile: 1 imagem com swipe.
- Setas discretas + indicadores. Sem autoplay agressivo.
- Lazy loading e dimensões previsíveis.
- Vídeo com poster e play manual; nunca iniciar com áudio automaticamente.
- Depois do vídeo, pequeno mosaico complementar.

## Interação da patinha — “Como chegar”
- O item **Como chegar** no topo usa um ícone de patinha.
- Ao clicar, pequenas pegadas descem pela **lateral esquerda da viewport**, fora do conteúdo e longe da scrollbar.
- As pegadas alternam levemente posição e rotação; aparecem e desaparecem com fade.
- A página faz scroll suave até `#como-chegar`.
- Ao chegar no mapa, a última patinha finaliza a animação discretamente.
- Respeitar `prefers-reduced-motion`: navegar direto para a âncora e reduzir/remover a animação.
- O overlay das pegadas deve usar `pointer-events: none`.

## Direção visual
- Base branca/creme. Azul e rosa como acentos.
- Curvas e diagonais da marca usadas com moderação.
- Mais respiro vertical, border-radius consistente e sombras leves.
- Fotos reais passam a ser protagonistas depois do hero.
- Ícones simples e consistentes.

## Regras para o Codex
- Inspecionar o projeto atual antes de codificar.
- Não reescrever a stack inteira sem necessidade.
- Reutilizar assets/componentes existentes quando fizer sentido.
- Componentes sugeridos: `Header`, `Hero`, `DoctorSection`, `GalleryCarousel`, `VideoSection`, `AboutSection`, `LocationSection`, `Footer`, `PawTrail`.
- Centralizar dados editáveis da clínica em um único arquivo/objeto de configuração.
- Usar `#como-chegar` como âncora e fallback sem JS.
- Não inventar CRMV, especializações, horários, contatos ou outras informações da clínica.
- Garantir responsividade, teclado, `focus-visible`, alt text, contraste e reduced motion.
- Otimizar imagens e vídeo; evitar dependências pesadas apenas para animação.
- Não adicionar pop-ups, chats extras ou CTAs concorrentes.

## Critérios de aceite
- Primeira dobra com exatamente 2 CTAs principais.
- Layout claramente mais limpo que a referência.
- Doutora/credenciais logo após o hero.
- Carrossel funcional + bloco de vídeo + fotos extras.
- Seção Como chegar com mapa e informações práticas.
- Patinha funciona e possui fallback para reduced motion.
- Mobile sem overflow/cortes e com botões confortáveis.
- Mídia otimizada.

---

## PROMPT MESTRE PARA O CODEX

Quero redesenhar a página principal do site “Jacaré Amado — Consultório Veterinário Popular”. Antes de codificar, inspecione o projeto atual, identifique a stack, componentes, assets e estilos existentes e preserve o que já funciona. Não reescreva o projeto inteiro sem necessidade.

OBJETIVO: deixar o site mais profissional, limpo e direto, mantendo a identidade visual azul/rosa, o logo e as artes já existentes. A referência atual está visualmente carregada; quero mais espaço em branco, menos cards e uma hierarquia mais clara.

ESTRUTURA DESEJADA:
1. Header enxuto com logo e links “A Doutora”, “Galeria” e “Como chegar”.
2. Hero com headline curta, arte principal e exatamente dois CTAs grandes: WhatsApp e Instagram. Horário/endereço podem aparecer como informação, mas não como novos CTAs.
3. Seção da doutora logo abaixo: foto real de um lado e, do outro, nome, CRMV, especializações/áreas de atuação e texto curto.
4. Galeria em carrossel com fotos da clínica, ambiente e animais atendidos. Desktop 2–3 itens por vez; mobile 1 item com swipe. Lazy load e sem autoplay agressivo.
5. Seção de vídeo/tour da clínica com poster e play manual, sem autoplay com áudio.
6. Pequeno mosaico de fotos extras.
7. Bloco “Sobre” curto e acolhedor.
8. Seção “Como chegar” com mapa, endereço, horário e contato.
9. Footer compacto.

INTERAÇÃO ESPECIAL “PATINHA”:
- O link “Como chegar” deve ter uma patinha.
- Ao clicar, criar uma animação de pequenas pegadas descendo pela lateral esquerda da viewport, sem usar a lateral da scrollbar.
- As pegadas devem alternar levemente posição/rotação, aparecer e sumir com fade, enquanto a página faz scroll suave até #como-chegar.
- Ao chegar no mapa, finalizar a animação de forma discreta.
- Respeitar prefers-reduced-motion: nesse caso, navegar direto para a âncora e reduzir/remover a animação.
- A animação não pode bloquear clique nem atrapalhar o conteúdo.

DIREÇÃO VISUAL:
- Mais clínica e menos painel de cards.
- Base clara (branco/creme), azul e rosa como acentos.
- Preservar curvas/diagonais da identidade, mas usar com moderação.
- Mais respiro vertical, bordas suaves e sombras leves.
- Fotos reais devem ganhar protagonismo após o hero.

REGRAS TÉCNICAS:
- Reutilize assets e componentes existentes quando fizer sentido.
- Centralize links, endereço, horários, telefones, CRMV, especializações, fotos e vídeo em uma configuração/dados fáceis de editar.
- Não invente informações da clínica. Se algum dado estiver faltando, use placeholder claramente marcado.
- Garanta responsividade, navegação por teclado, focus-visible, alt text e contraste.
- Otimize imagens e vídeo. Evite dependências pesadas só para efeitos simples.
- Não adicionar pop-ups, botões flutuantes extras ou CTAs concorrentes.

Ao terminar, me entregue: (1) resumo do que foi alterado, (2) arquivos modificados, (3) como trocar fotos/vídeo/links futuramente, (4) o que ainda estiver usando placeholder, e (5) testes/checagens realizados.
