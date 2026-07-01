# Plano: emissor de notas para mecânicos agrícolas (fase conceito)

> **Status:** rascunho para aprovação · nada implementado em produção até aprovação.
> **Base de método:** Atlas CRM v3 (`crm_project/atlas-prototype/atlas-redesign/`).
> **Última edição:** preencher ao revisar.

---

## 1. O que estamos assumindo

Conceito primeiro, sem decidir ainda se é white-label. Emissão de **serviço e peça com o mesmo peso** desde o início. O resultado desta fase é um **wireframe navegável + marca e fluxo básicos**, nada implementado em produção até aprovação.

Quem aparece no conceito:

- **Mecânico** (usuário principal): veterano, 55+, no celular, mão de graxa, baixa familiaridade digital.
- **Agricultor** (cliente final do mecânico): recebe a nota e o aviso de manutenção. Proposta: **não loga** nesta fase, recebe por WhatsApp/SMS.
- **Empresa de peças** (futuro dono/integrador): vende peça pro mecânico, manda nota de compra, publica ofertas no mural. Entra como painel admin em wireframe mínimo.

---

## 2. Método herdado do Atlas (e onde divergimos)

Copia a engenharia de handoff do Atlas inteira:

- **Um HTML navegável como fonte da verdade**, depois vira React.
- **`tokens.css`** próprio, zero valor hardcoded.
- **Feedbacks cirúrgicos com ID** (`EMI-03`, `VIDA-07`) com Problema, Ação, Dependência, Estimativa.
- **`roadmap.md`** consolidando iterações, dependências e decisões pendentes.
- **Iterações por tela**, cada uma um pacote igual.

Divergência central (o coração do projeto):

| Atlas (CRM) | Nosso produto (mecânico) |
|---|---|
| Denso, "quando em dúvida mais denso" | Espaçado, "quando em dúvida maior" |
| Desktop, operador avançado | Mobile-first, polegar |
| Base 13px, linha 36px | Base 16px+, alvo de toque 48px+ |
| Jargão de CRM ok | Linguagem do mecânico, não do contador |

---

## 3. Princípios não-negociáveis (vindos da pesquisa de UX)

1. **Mobile-first**, uma coluna, navegação por baixo (bottom nav), máximo 2 a 3 níveis.
2. **Alvo de toque 48px+**, espaçamento generoso entre botões.
3. **Ícone sempre com rótulo de texto.** Nunca só símbolo.
4. **Linguagem do ofício:** "Cobrar mão de obra" e não "emitir NFS-e", "Peça que troquei" e não "item de mercadoria".
5. **Fluxo guiado passo a passo** (um assunto por tela), com revisão antes de transmitir (a nota é irreversível).
6. **Tolerante a offline:** salva e transmite depois, igual o app oficial faz na roça sem sinal.
7. **Voltar e desfazer em toda tela.** Erro com instrução específica, nunca "algo deu errado".
8. **Alto contraste** (uso ao sol, vista cansada) e foto real da peça/máquina, não ilustração abstrata.

---

## 4. Marca básica (conceito)

Baseada no padrão da categoria (Husqvarna, maquinário agrícola), adaptada para alta legibilidade:

- **Tom:** confiável e direto, "ferramenta" e não "app da moda". Selos de confiança visíveis (nota válida, segurança).
- **Paleta:** verde campo como base, neutros (branco/grafite) de apoio, e um **âmbar/laranja de alta visibilidade** reservado para ações e alertas (a cor do maquinário e do "preste atenção").
- **Tipografia:** sem serifa, base grande, números tabulares para valores em reais.
- **Nome de trabalho:** sugestões para o protótipo: MecanicaNotaFacil

---

## 5. Achados fiscais (os dois tipos de nota)

- **Mão de obra / manutenção** vira **NFS-e** (padrão nacional, ISS municipal). MEI emite pelo Emissor Nacional, com CRT 4 preenchido automático.
- **Venda de peça** vira **NFC-e modelo 65** (consumidor final, via Nota Fiscal Fácil, gratuita pro MEI no celular) ou **NF-e modelo 55** se vender para outra empresa.
- **O pulo do gato:** a Ordem de Serviço real do mecânico mistura os dois (troquei a peça + cobrei a mão de obra). No wireframe, **uma única OS gera as duas notas**. É onde a gente resolve o que o app oficial não resolve.
- O app oficial mostra o caminho da simplicidade: **cadastrar "serviços e peças favoritos"** uma vez, depois emitir em 3 toques (escolhe o favorito, confirma valor, transmite). Vamos copiar esse padrão.
- Emissão real exige **certificado digital A1 e um provedor** (Focus NFe, eNotas, PlugNotas, NFe.io ou o módulo fiscal do Protheus/TSS). No wireframe isso é mockado. Validar com contador (D1).
- então com certeza tem, invente um cnpj teste para o frame inicial

---

## 6. Módulos e arquitetura de informação

Home com atalhos grandes leva a tudo:

1. **Onboarding + cadastro** (CNPJ/MEI, certificado mockado, favoritos de serviço e peça).
2. **Home do mecânico** (Emitir nota, Minhas notas, Meus clientes, Manutenções a vencer, Loja, Mural).
3. **Emissão de nota** (wizard: Serviço, Peça, ou OS com os dois).
4. **Caixa de notas** (Emitidas + Recebidas, onde caem as notas de compra que a empresa de peças manda).
5. **Clientes e máquinas** (agricultor + as máquinas dele, motosserra/roçadeira/robô).
6. **Vida útil e manutenções** (o diferencial, detalhado abaixo).
7. **Loja de peças** (e-commerce wireframe, compra na empresa de peças).
8. **Mural e notificações** (ofertas e recados da empresa de peças).
9. **Painel admin da empresa** (wireframe mínimo) + **wireframe da integração Protheus**.

**Vida útil (módulo-âncora), inspirado no modelo do Aegro:** cada peça trocada fica registrada na máquina do cliente, com data e vida esperada (por **data e/ou horas estimadas**, já que equipamento pequeno raramente tem horímetro confiável). Quando vence, o sistema avisa o mecânico, que dispara um aviso ao agricultor. Resultado: o agricultor agenda manutenção, o mecânico fatura de novo, e a empresa de peças vende mais. É o ciclo que justifica a plataforma para a empresa.

---

## 7. Roadmap por iteração (padrão Atlas)

| # | Iteração | Prefixo ID | Foco | Esforço aprox. |
|---|---|---|---|---|
| 0 | Fundação | `F` | Tokens, marca, fluxo, shell mobile, estudo fiscal com contador | ~24h |
| 1 | Onboarding + Home | `ONB`/`HOME` | Cadastro, favoritos, atalhos grandes | ~28h |
| 2 | Emissão de nota | `EMI` | Wizard serviço + peça + OS combinada | ~40h |
| 3 | Caixa de notas | `NOTA` | Emitidas + recebidas (compra) | ~28h |
| 4 | Clientes e máquinas | `CLI` | Agricultor + frota de máquinas | ~26h |
| 5 | Vida útil e manutenções | `VIDA` | Registro de peça, alerta, aviso ao cliente | ~40h |
| 6 | Loja de peças | `ECOM` | E-commerce wireframe | ~30h |
| 7 | Mural e notificações | `MUR` | Ofertas e recados da empresa | ~22h |
| 8 | Painel admin + Protheus | `ADM` | Catálogo, ofertas, frota instalada, wireframe da integração | ~32h |

Componentes reusáveis a criar na Fundação: `BotaoAcaoGrande`, `PassoGuiado` (wizard), `CardNota`, `CardMaquina`, `CardPeca`, `AlertaManutencao`, `ChipStatus`, `NavInferior`, `EstadoVazio` pedagógico, `fmtDataBR`, `fmtDinheiroBR`.

---

## 8. Decisões a confirmar (bloqueadores)

| # | Decisão | Quem decide | Recomendação | Resposta |
|---|---|---|---|---|
| D1 | Provedor de emissão fiscal (Focus/eNotas/PlugNotas vs Protheus TSS) | Produto + contador | Definir depois do wireframe, mockar agora | |
| D2 | Como medir vida útil (data, horímetro, uso) | Produto | Híbrido: data + horas estimadas opcionais | |
| D3 | Agricultor loga ou recebe por WhatsApp/SMS | Produto | Não loga nesta fase, recebe por mensagem | |
| D4 | Nome/marca de trabalho do conceito | Você | Escolher entre as 3 sugestões | |
| D5 | Escopo do painel admin nesta fase | Produto | Wireframe mínimo só pra mostrar o ciclo | |

---

## 9. Entregável desta fase

Uma pasta (espelhando `atlas-redesign/`) com:

- HTML navegável mobile-first (fonte da verdade)
- `tokens.css` próprio
- `marca.md`
- `fluxo.md`
- `roadmap.md`
- `feedback-*.md` por iteração

---

## 10. Próximo passo recomendado

Aprovar a **Fundação (Iteração 0)** primeiro: montar o shell mobile, os tokens, a marca e o fluxo de emissão como protótipo navegável, ver algo tangível na tela e ajustar o resto a partir dele. Antes disso, responder D2 a D5 (a D1 fica pro contador depois).

---

## Fontes da pesquisa

- App NFS-e gov.br: https://www.gov.br/nfse/pt-br/municipios/produtos-disponiveis/app-emissor-de-nfs-e
- NFF / NFC-e MEI (SEFAZ-ES): https://sefaz.es.gov.br/Noticia/secretaria-da-fazenda-disponibiliza-novo-modulo-para-meis-no-aplicativo-nota-fiscal-facil-nff
- Loja Husqvarna: https://www.lojahusqvarna.com.br/
- Aegro, gestão de máquinas: https://aegro.com.br/blog/gestao-de-maquinas-agricolas-2025/
- UX para baixa literacia digital: https://www.ux-bulletin.com/designing-low-digital-literacy-users/
- NR Ferramentas (peças): https://www.nrferramentas.com.br/
