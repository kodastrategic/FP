# Franco Pantoja Advocacia — Site Institucional

Site one-page estático para o escritório de advocacia **Franco Pantoja Advocacia**, focado em Direito Previdenciário, Criminal, Civil e outros serviços, com um fluxo de modal interativo que redireciona para o WhatsApp.

🔗 **Produção:** [https://fp-advocacia.vercel.app](https://fp-advocacia.vercel.app)  
📦 **Repositório:** [https://github.com/kodastrategic/FP](https://github.com/kodastrategic/FP)

## Tecnologias

- HTML5, CSS3, JavaScript puro (sem frameworks)
- Fonte: Inter / Helvetica
- Mapa: Leaflet (CDN)
- Ícones: SVG inline
- Deploy: Vercel (automático via push no GitHub)

## Cores

- Ouro: `#CEAE7C`
- Marrom escuro: `#5D503E`
- Off-white: `#F5F0EB`
- Bege: `#F5EBE1`
- Título do hero: `#E0BF8F`
- Gradiente seção Sobre: `#51412F` → `#3F3429`
- Gradiente overlay hero mobile: `#3F3429` → transparente (bottom to top)
- Gradiente overlay hero desktop: `#5D503E` → transparente (left to right)

## Estrutura de Arquivos

```
/
├── index.html          # Página principal (todas as seções)
├── style.css           # Estilos completos + responsivo
├── script.js           # Interatividade (navbar, modal, WhatsApp, mapa, formulário)
├── README.md           # Este arquivo
│
├── banner/
│   ├── banner.jpg          # Banner desktop (~1920×900)
│   └── banner-mobile.jpg   # Banner mobile (1080×1350, proporção 3:4)
│
├── logo/
│   └── logo.svg            # Logotipo (navbar 44px, footer 48px)
│
├── perfil/
│   ├── giomax.png          # Foto Dr. Giomax Pantoja (180×180)
│   ├── tecia.png           # Foto Dra. Técia Franco (180×180)
│   └── sobre.png           # Imagem da seção Sobre Nós
│
└── cards/
    ├── aposentadoria.svg   # Ícone card "Quero me Aposentar" (96×96, #CEAE7C)
    ├── criminal.svg        # Ícone card "Preciso de um Criminalista"
    ├── civil.svg           # Ícone card "Questões Civis"
    ├── outros.svg          # Ícone card "Orientação Geral"
    ├── clique.svg          # Ícone de clique no hint dos cards
    ├── previdenciario.png  # Card área Previdenciário (proporção 4:3)
    ├── criminal.png        # Card área Criminal (proporção 4:3)
    ├── civil.png           # Card área Civil (proporção 4:3)
    └── outros.png          # Card área Outros Serviços (proporção 4:3)
```

## Seções do Site

1. **Navbar** — Logo + menu com links âncora, hamburger no mobile
2. **Hero** — Banner com imagem de fundo, gradiente overlay, título dourado, texto e CTA do WhatsApp
   - Desktop: gradiente left-to-right, texto à esquerda
   - Mobile: proporção 5:8, gradiente bottom-to-top, texto centralizado no fim
3. **Atalhos** — 4 cards com ícones SVG (96×96) e animação wiggle + pulse, abrem modal de perguntas
4. **Sobre Nós** — Gradiente escuro (#51412F → #3F3429), texto e imagem lado a lado
   - Mobile: imagem acima do texto
5. **Áreas de Atuação** — 4 cards com imagem 4:3 no topo e lista de serviços
6. **Equipe** — Cards dos dois sócios com foto, OAB e cargo
7. **Contato** — Endereço, WhatsApp, e-mail + formulário + mapa Leaflet
8. **Footer** — Logo, redes sociais, copyright
9. **Floating Buttons** — WhatsApp (verde) e Instagram (gradiente) fixos
10. **Modal** — Fluxo de 4 perguntas por área, envia respostas via WhatsApp

## Fluxo do Modal

Cada um dos 4 atalhos abre um modal com 4 perguntas. Ao final, as respostas são enviadas para o WhatsApp do escritório (`+55 91 98757-0111`).

## Equipe

- **Dr. Giomax Pantoja** — OAB/PA 34.388
  - Advogado Previdenciarista e Criminalista
- **Dra. Técia Franco** — OAB/PA 38.130
  - Advogada Civilista e Previdenciarista

## Contato

- WhatsApp: [55 91 98757-0111](https://wa.me/5591987570111)
- Instagram: [@francopantoja_advocacia](https://www.instagram.com/francopantoja_advocacia/)
- E-mail: francopantoja.adv@gmail.com
- Endereço: Rua São Francisco, Centro, s/n — Aurora do Pará — PA (próx. Galpão do Agricultor)
