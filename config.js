/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Ester",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5518997523326",
    mensagem: "Olá! Confirmo minha presença no aniversário da Ester."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://maps.app.goo.gl/8mvFGRm54Dx75A468?g_st=iw",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- PIX OPCIONAL (SUGESTÕES DE PRESENTES) ---------------------------
  // ativo: true  -> cria uma área clicável na tela de presentes.
  //        false -> não cria a área de PIX e o convite continua como antes.
  // chave: é exatamente o texto que será copiado quando o convidado clicar.
  // posicao: ajuste pelo editor visual (?editor=1), escolhendo “PIX (copiar chave)”.
  pix: {
    ativo: false,
    chave: "00",
    posicao: {"left":16.8,"top":64.0,"width":66.0,"height":8.2}
  },

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":26.0402587110623,"top":85.90149593197003,"width":47.843450479233226,"height":7.684926959303546} },
    dresscode: { mostrarTexto:false, posicao: {"left":27.009907273362618,"top":90.56790090777503,"width":46.581485248602235,"height":6.00000109743878} },
    manual: { mostrarTexto:false, posicao: {"left":25.5785880091853,"top":88.4965400828101,"width":47.39934854233227,"height":6.92059529995943} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:13.999209950879326, top:70.47754761672999, width:15.963035699920129, height:8.57238650880756 },
        map: { left:41.92242143666078, top:70.47751668147093, width:15.611963461541478, height:8.522989476077747 },
        gift: { left:69.93667817679727, top:70.46670416836236, width:16.091044953075077, height:8.643484137471408 },
        dress: { left:27.808319189297126, top:84.16061988875146, width:15.682105506190094, height:8.298251846116688 },
        manual: { left:55.82804885870624, top:83.81539198715187, width:16.29551467651757, height:8.528402317264716 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  // corNumero altera somente a cor dos números.
  // corLegenda altera a cor de Meses, Dias, Horas, Min e Seg.
  // Aceita hexadecimal, nome de cor ou rgb().
  contagem: {
    dataEvento: "2026-08-29T18:30:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: { left:22.5175531649361, top:51.45224389795505, width:56.19169641074281, height:6.218642289127358 }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
