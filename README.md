# Franco Pantoja Advocacia — Site Institucional

Site one-page estático para o escritório de advocacia **Franco Pantoja Advocacia**, focado em Direito Previdenciário, Criminal, Civil e outros serviços, com um fluxo de modal interativo que redireciona para o WhatsApp.

## Tecnologias

- HTML5, CSS3, JavaScript puro (sem frameworks)
- Fonte: Inter / Helvetica
- Mapa: Leaflet (CDN)
- Ícones: SVG inline

## Cores

- Ouro: `#CEAE7C`
- Marrom escuro: `#5D503E`
- Off-white: `#F5F0EB`
- Bege: `#F5EBE1`
- Título do hero: `#E0BF8F`
- Gradiente seção Sobre: `#51412F` → `#3F3429`

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
│   └── banner-mobile.jpg   # Banner mobile (1080×1350)
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
    ├── previdenciario.png  # Card área Previdenciário (proporção 4:3)
    ├── criminal.png        # Card área Criminal (proporção 4:3)
    ├── civil.png           # Card área Civil (proporção 4:3)
    └── outros.png          # Card área Outros Serviços (proporção 4:3)
```

## Seções do Site

1. **Navbar** — Logo + menu com links âncora, hamburger no mobile
2. **Hero** — Banner com gradiente/overlay, título e CTA do WhatsApp
3. **Atalhos** — 4 cards de acesso rápido que abrem o modal de perguntas
4. **Sobre Nós** — História do escritório, valores (gradiente escuro)
5. **Áreas de Atuação** — 4 cards com imagem 4:3 e lista de serviços
6. **Equipe** — Cards dos dois sócios com foto e descrição
7. **Contato** — Endereço, WhatsApp, e-mail + formulário + mapa Leaflet
8. **Footer** — Logo, redes sociais, copyright
9. **Floating Buttons** — WhatsApp (verde) e Instagram (gradiente) fixos
10. **Modal** — Fluxo de 4 perguntas por área, envia respostas via WhatsApp

## Fluxo do Modal

Cada um dos 4 atalhos abre um modal com 4 perguntas. Ao final, as respostas são enviadas para o WhatsApp do escritório (`+55 91 98757-0111`).

## Como Usar

1. Coloque as imagens nos diretórios conforme estrutura acima
2. Abra o `index.html` no navegador (não requer servidor)

## Equipe

- **Dr. Giomax Pantoja** — Sócio
- **Dra. Técia Franco** — Sócia

## Contato

- WhatsApp: [55 91 98757-0111](https://wa.me/5591987570111)
- Instagram: [@francopantoja_advocacia](https://www.instagram.com/francopantoja_advocacia/)
- E-mail: francopantoja.adv@gmail.com
- Endereço: Rua São Francisco, Centro, s/n — Aurora do Pará — PA (próx. Galpão do Agricultor)
