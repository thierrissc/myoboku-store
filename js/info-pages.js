let trackedOrders = JSON.parse(localStorage.getItem('myoboku_orders') || '[]');

function openInfoModal(page) {
  const overlay = document.getElementById('info-modal-overlay');
  const modal = document.getElementById('info-modal');
  const content = document.getElementById('info-modal-content');
  if (page === 'sobre') {
    closeSidebar && closeSidebar();
    navigateTo('jiraiya');
    setTimeout(() => {
      const jiraiyaPage = document.getElementById('page-jiraiya');
      if (!jiraiyaPage) return;
      const sections = jiraiyaPage.querySelectorAll('section');
      let aboutSection = null;
      sections.forEach(s => {
        if (s.querySelector('.section-label') && s.querySelector('.section-label').textContent.includes('Sobre Jiraiya')) {
          aboutSection = s;
        }
      });
      if (!aboutSection) {
        const footer = jiraiyaPage.querySelector('footer');
        if (footer) aboutSection = footer;
      }
      if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
    return;
  }
  content.innerHTML = getPageContent(page);
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (page === 'envio') initEnvioSimulator();
  if (page === 'rastrear') renderOrders();
}

function closeInfoModal() {
  document.getElementById('info-modal-overlay').classList.remove('active');
  document.getElementById('info-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function getPageContent(page) {
  if (page === 'envio') return envioContent();
  if (page === 'trocas') return trocasContent();
  if (page === 'rastrear') return rastrearContent();
  if (page === 'guia') return guiaContent();
  return '';
}

function envioContent() {
  return `
  <div class="ipage-header">
    <div class="ipage-icon"><i class="fas fa-truck"></i></div>
    <h2 class="ipage-title">Envio e Prazo</h2>
    <p class="ipage-subtitle">Saiba como funciona a entrega dos seus pedidos</p>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-map-marked-alt"></i> Simulador de Frete</h3>
    <p class="ipage-text">Digite seu CEP para calcular o prazo e custo de entrega estimados:</p>
    <div class="cep-simulator">
      <div class="cep-input-row">
        <input type="text" id="cep-input" class="cep-input" placeholder="00000-000" maxlength="9" oninput="formatCEP(this)" />
        <button class="cep-btn" onclick="simularFrete()"><i class="fas fa-search"></i> Calcular</button>
      </div>
      <div id="frete-resultado" class="frete-resultado" style="display:none"></div>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-shipping-fast"></i> Modalidades de Entrega</h3>
    <div class="shipping-cards">
      <div class="ship-card">
        <div class="ship-card-icon"><i class="fas fa-truck"></i></div>
        <div class="ship-card-name">PAC — Padrão</div>
        <div class="ship-card-prazo">7 a 12 dias úteis</div>
        <div class="ship-card-price">R$ 19,90</div>
        <div class="ship-card-desc">Disponível para todo o Brasil</div>
      </div>
      <div class="ship-card">
        <div class="ship-card-icon" style="color:var(--red)"><i class="fas fa-bolt"></i></div>
        <div class="ship-card-name">SEDEX — Expresso</div>
        <div class="ship-card-prazo">2 a 4 dias úteis</div>
        <div class="ship-card-price">R$ 34,90</div>
        <div class="ship-card-desc">Entrega rápida em capitais e regiões metropolitanas</div>
      </div>
      <div class="ship-card">
        <div class="ship-card-icon" style="color:var(--gold)"><i class="fas fa-gift"></i></div>
        <div class="ship-card-name">Frete Grátis</div>
        <div class="ship-card-prazo">5 a 10 dias úteis</div>
        <div class="ship-card-price free-txt">GRÁTIS</div>
        <div class="ship-card-desc">Pedidos acima de R$ 199,00</div>
      </div>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-info-circle"></i> Informações Importantes</h3>
    <ul class="ipage-list">
      <li>Os prazos são contados em dias úteis a partir da confirmação do pagamento.</li>
      <li>Pedidos feitos até 14h são processados no mesmo dia.</li>
      <li>Pedidos via Boleto têm o prazo contado após a compensação bancária (2 dias úteis).</li>
      <li>Após o envio, você recebe o código de rastreamento por e-mail.</li>
      <li>Não realizamos entregas em caixas postais.</li>
    </ul>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-map-marker-alt"></i> Regiões e Prazos por Estado</h3>
    <div class="region-table">
      <div class="region-row header">
        <span>Região</span><span>PAC</span><span>SEDEX</span>
      </div>
      <div class="region-row"><span>Sudeste</span><span>5-8 dias</span><span>1-2 dias</span></div>
      <div class="region-row"><span>Sul</span><span>6-9 dias</span><span>2-3 dias</span></div>
      <div class="region-row"><span>Centro-Oeste</span><span>7-10 dias</span><span>2-3 dias</span></div>
      <div class="region-row"><span>Nordeste</span><span>8-12 dias</span><span>3-4 dias</span></div>
      <div class="region-row"><span>Norte</span><span>10-15 dias</span><span>4-6 dias</span></div>
    </div>
  </div>`;
}

function trocasContent() {
  return `
  <div class="ipage-header">
    <div class="ipage-icon"><i class="fas fa-undo"></i></div>
    <h2 class="ipage-title">Trocas e Devoluções</h2>
    <p class="ipage-subtitle">Sua satisfação é nossa prioridade — sem burocracia</p>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-check-circle"></i> Política de 30 Dias</h3>
    <p class="ipage-text">Você tem até <strong>30 dias</strong> após o recebimento para solicitar troca ou devolução, sem precisar de justificativa.</p>
    <div class="policy-timeline">
      <div class="ptl-step">
        <div class="ptl-num">1</div>
        <div class="ptl-info"><strong>Solicite online</strong><span>Preencha o formulário abaixo com o número do pedido</span></div>
      </div>
      <div class="ptl-step">
        <div class="ptl-num">2</div>
        <div class="ptl-info"><strong>Aguarde aprovação</strong><span>Em até 24 horas úteis analisamos sua solicitação</span></div>
      </div>
      <div class="ptl-step">
        <div class="ptl-num">3</div>
        <div class="ptl-info"><strong>Envie o produto</strong><span>Você receberá uma etiqueta de postagem gratuita por e-mail</span></div>
      </div>
      <div class="ptl-step">
        <div class="ptl-num">4</div>
        <div class="ptl-info"><strong>Receba seu reembolso</strong><span>Devolução em até 5 dias úteis após recebermos o item</span></div>
      </div>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-exchange-alt"></i> Condições de Troca/Devolução</h3>
    <div class="condition-grid">
      <div class="cond-ok">
        <div class="cond-icon"><i class="fas fa-check"></i></div>
        <strong>Aceito</strong>
        <ul>
          <li>Produto com defeito de fabricação</li>
          <li>Item errado enviado</li>
          <li>Tamanho incorreto</li>
          <li>Produto não utilizado com etiqueta</li>
          <li>Embalagem original preservada</li>
        </ul>
      </div>
      <div class="cond-no">
        <div class="cond-icon"><i class="fas fa-times"></i></div>
        <strong>Não aceito</strong>
        <ul>
          <li>Produto lavado ou utilizado</li>
          <li>Itens personalizados</li>
          <li>Danos causados pelo cliente</li>
          <li>Prazo superior a 30 dias</li>
          <li>Sem embalagem original</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-paper-plane"></i> Solicitar Troca ou Devolução</h3>
    <div class="troca-form">
      <div class="cf-row"><div class="cf-field"><label>Número do Pedido</label><input type="text" id="troca-pedido" placeholder="MY-000000" /></div></div>
      <div class="cf-row"><div class="cf-field"><label>E-mail do pedido</label><input type="email" id="troca-email" placeholder="seu@email.com" /></div></div>
      <div class="cf-row"><div class="cf-field"><label>Motivo</label>
        <select id="troca-motivo">
          <option value="">Selecione...</option>
          <option>Defeito de fabricação</option>
          <option>Tamanho errado</option>
          <option>Produto diferente do anunciado</option>
          <option>Não gostei / Arrependimento</option>
          <option>Produto danificado no transporte</option>
        </select>
      </div></div>
      <div class="cf-row"><div class="cf-field"><label>Detalhes (opcional)</label><textarea id="troca-detalhe" placeholder="Descreva o problema..." rows="3" style="background:var(--bg);border:1px solid var(--border);color:var(--text);padding:0.8rem;border-radius:6px;width:100%;resize:vertical;font-family:inherit;font-size:0.9rem"></textarea></div></div>
      <button class="ipage-btn" onclick="solicitarTroca()"><i class="fas fa-paper-plane"></i> Enviar Solicitação</button>
      <div id="troca-resultado" style="display:none;margin-top:1rem"></div>
    </div>
  </div>`;
}

function rastrearContent() {
  return `
  <div class="ipage-header">
    <div class="ipage-icon"><i class="fas fa-map-marker-alt"></i></div>
    <h2 class="ipage-title">Rastrear Pedido</h2>
    <p class="ipage-subtitle">Acompanhe seus pedidos em tempo real</p>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-search"></i> Buscar por Código</h3>
    <div class="cep-simulator">
      <div class="cep-input-row">
        <input type="text" id="track-input" class="cep-input" placeholder="MY-000000 ou código dos Correios" />
        <button class="cep-btn" onclick="buscarRastreio()"><i class="fas fa-search"></i> Rastrear</button>
      </div>
      <div id="track-resultado" style="display:none;margin-top:1.2rem"></div>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-shopping-bag"></i> Meus Pedidos</h3>
    <div id="orders-list">
      <div class="empty-orders"><i class="fas fa-box-open"></i><p>Nenhum pedido encontrado.<br>Após finalizar uma compra, ela aparecerá aqui.</p></div>
    </div>
  </div>`;
}

function guiaContent() {
  return `
  <div class="ipage-header">
    <div class="ipage-icon"><i class="fas fa-ruler-combined"></i></div>
    <h2 class="ipage-title">Guia de Tamanhos</h2>
    <p class="ipage-subtitle">Medidas de referência para cada categoria de produto da Loja Myoboku</p>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-scroll"></i> Kimonos e Haori</h3>
    <p class="ipage-text">Kimono Vermelho do Sábio · Kimono Gamabunta Escarlate · Haori Vermelho Daimyo</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Tamanho</th><th>Comprimento (cm)</th><th>Largura (cm)</th><th>Manga (cm)</th><th>Tórax (cm)</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">P</span></td><td>120</td><td>58</td><td>80</td><td>92–98</td></tr>
          <tr><td><span class="size-badge">M</span></td><td>124</td><td>62</td><td>82</td><td>99–106</td></tr>
          <tr><td><span class="size-badge">G</span></td><td>128</td><td>66</td><td>84</td><td>107–114</td></tr>
          <tr><td><span class="size-badge">GG</span></td><td>132</td><td>70</td><td>86</td><td>115–122</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-vest"></i> Coletes e Armaduras</h3>
    <p class="ipage-text">Colete Vermelho Sennin · Armadura Ninja Azul Celeste</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Tamanho</th><th>Comprimento (cm)</th><th>Largura (cm)</th><th>Tórax (cm)</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">P</span></td><td>68</td><td>50</td><td>88–94</td></tr>
          <tr><td><span class="size-badge">M</span></td><td>71</td><td>54</td><td>95–102</td></tr>
          <tr><td><span class="size-badge">G</span></td><td>74</td><td>58</td><td>103–110</td></tr>
          <tr><td><span class="size-badge">GG</span></td><td>77</td><td>62</td><td>111–118</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-theater-masks"></i> Capas</h3>
    <p class="ipage-text">Capa do Sábio Branca</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Tamanho</th><th>Comprimento (cm)</th><th>Largura (cm)</th><th>Indicação</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">U</span></td><td>140</td><td>180</td><td>Tamanho único — ajustável</td></tr>
          <tr><td><span class="size-badge">P</span></td><td>130</td><td>160</td><td>Altura até 170 cm</td></tr>
          <tr><td><span class="size-badge">M</span></td><td>140</td><td>175</td><td>Altura 170–180 cm</td></tr>
          <tr><td><span class="size-badge">G</span></td><td>148</td><td>190</td><td>Altura acima de 180 cm</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-walking"></i> Calça Ninja</h3>
    <p class="ipage-text">Calça Ninja Verde Oliva</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Tamanho</th><th>Cintura (cm)</th><th>Quadril (cm)</th><th>Comprimento (cm)</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">36</span></td><td>72–76</td><td>90–94</td><td>98</td></tr>
          <tr><td><span class="size-badge">38</span></td><td>77–82</td><td>95–100</td><td>100</td></tr>
          <tr><td><span class="size-badge">40</span></td><td>83–88</td><td>101–106</td><td>102</td></tr>
          <tr><td><span class="size-badge">42</span></td><td>89–95</td><td>107–112</td><td>104</td></tr>
          <tr><td><span class="size-badge">44</span></td><td>96–103</td><td>113–119</td><td>106</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-shoe-prints"></i> Sandálias de Madeira Ninja</h3>
    <p class="ipage-text">Numeração especial sob encomenda disponível</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Número BR</th><th>Comprimento (cm)</th><th>Largura (cm)</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">38</span></td><td>25.0</td><td>9.0</td></tr>
          <tr><td><span class="size-badge">39</span></td><td>25.8</td><td>9.2</td></tr>
          <tr><td><span class="size-badge">40</span></td><td>26.5</td><td>9.5</td></tr>
          <tr><td><span class="size-badge">41</span></td><td>27.3</td><td>9.7</td></tr>
          <tr><td><span class="size-badge">42</span></td><td>28.0</td><td>10.0</td></tr>
          <tr><td><span class="size-badge">43</span></td><td>28.8</td><td>10.2</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-ring"></i> Joias e Braceletes</h3>
    <p class="ipage-text">Colar dos Sapos Sábios · Bracelete Shima Sábia</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Produto</th><th>Tamanho</th><th>Circunferência do pulso</th><th>Detalhe</th></tr></thead>
        <tbody>
          <tr><td>Bracelete Shima Sábia</td><td><span class="size-badge">P/M</span></td><td>14–17 cm</td><td>Pulsos pequenos a médios</td></tr>
          <tr><td>Bracelete Shima Sábia</td><td><span class="size-badge">G/GG</span></td><td>17–21 cm</td><td>Pulsos médios a grandes</td></tr>
          <tr><td>Colar dos Sapos Sábios</td><td><span class="size-badge">U</span></td><td>—</td><td>Corrente 60 cm ajustável</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-mask"></i> Máscaras e Acessórios de Cabeça</h3>
    <p class="ipage-text">Máscara Modo Sábio · Máscara Azul do Guerreiro · Bandana de Konoha · Peruca Branca do Sennin</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Produto</th><th>Tamanho</th><th>Ajuste</th></tr></thead>
        <tbody>
          <tr><td>Máscara Modo Sábio</td><td><span class="size-badge">U</span></td><td>Elástico ajustável — circunf. até 60 cm</td></tr>
          <tr><td>Máscara Azul do Guerreiro</td><td><span class="size-badge">U</span></td><td>Elástico ajustável — circunf. até 60 cm</td></tr>
          <tr><td>Bandana de Konoha</td><td><span class="size-badge">U</span></td><td>Tira universal com velcro</td></tr>
          <tr><td>Peruca Branca do Sennin</td><td><span class="size-badge">U</span></td><td>Touca interna — circunf. cabeça até 62 cm</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-box-open"></i> Conjunto Completo Sábio</h3>
    <p class="ipage-text">Inclui: kimono, calça ninja, sandálias, bandana e peruca — tamanho sob consulta disponível</p>
    <div class="size-table-wrap">
      <table class="size-table">
        <thead><tr><th>Tamanho</th><th>Altura indicada (cm)</th><th>Tórax (cm)</th><th>Cintura (cm)</th></tr></thead>
        <tbody>
          <tr><td><span class="size-badge">P</span></td><td>158–166</td><td>88–96</td><td>74–82</td></tr>
          <tr><td><span class="size-badge">M</span></td><td>167–174</td><td>97–104</td><td>83–90</td></tr>
          <tr><td><span class="size-badge">G</span></td><td>175–182</td><td>105–113</td><td>91–99</td></tr>
          <tr><td><span class="size-badge">GG</span></td><td>183–190</td><td>114–122</td><td>100–109</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="ipage-section">
    <h3 class="ipage-sec-title"><i class="fas fa-tape"></i> Como Tirar as Medidas</h3>
    <div class="medidas-grid">
      <div class="medida-item">
        <div class="medida-icon"><i class="fas fa-arrows-alt-v"></i></div>
        <strong>Comprimento</strong>
        <p>Meça do ombro até a barra da peça sobre uma superfície plana</p>
      </div>
      <div class="medida-item">
        <div class="medida-icon"><i class="fas fa-arrows-alt-h"></i></div>
        <strong>Tórax / Largura</strong>
        <p>Meça de uma axila à outra com a peça aberta e plana</p>
      </div>
      <div class="medida-item">
        <div class="medida-icon"><i class="fas fa-circle-notch"></i></div>
        <strong>Cintura</strong>
        <p>Meça a parte mais estreita do seu tronco ao redor do corpo</p>
      </div>
      <div class="medida-item">
        <div class="medida-icon"><i class="fas fa-ruler"></i></div>
        <strong>Pulso</strong>
        <p>Meça ao redor do pulso onde você usaria a pulseira</p>
      </div>
    </div>
    <div class="size-tip">
      <i class="fas fa-lightbulb"></i>
      <span>Em caso de dúvida entre dois tamanhos, opte pelo maior. Colecionáveis, estatuetas, livros e itens tamanho único não requerem medição.</span>
    </div>
  </div>`;
}
function formatCEP(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5, 8);
  input.value = v;
}

function simularFrete() {
  const cepRaw = document.getElementById('cep-input').value.replace(/\D/g, '');
  const result = document.getElementById('frete-resultado');
  if (cepRaw.length !== 8) {
    result.style.display = 'block';
    result.innerHTML = '<div class="frete-error"><i class="fas fa-exclamation-circle"></i> CEP inválido. Digite 8 dígitos.</div>';
    return;
  }
  result.style.display = 'block';
  result.innerHTML = '<div class="frete-loading"><i class="fas fa-spinner fa-spin"></i> Calculando frete...</div>';

  setTimeout(() => {
    const prefix = parseInt(cepRaw.slice(0, 2));
    let regiao, pacDias, sedexDias, freePrazo;
    if (prefix >= 1 && prefix <= 19) { regiao = 'São Paulo (capital)'; pacDias = '5–7'; sedexDias = '1–2'; freePrazo = '4–6'; }
    else if (prefix >= 20 && prefix <= 28) { regiao = 'Rio de Janeiro'; pacDias = '6–8'; sedexDias = '2'; freePrazo = '5–7'; }
    else if (prefix >= 29 && prefix <= 39) { regiao = 'Minas Gerais / Espírito Santo'; pacDias = '6–9'; sedexDias = '2–3'; freePrazo = '5–8'; }
    else if (prefix >= 40 && prefix <= 48) { regiao = 'Bahia'; pacDias = '8–12'; sedexDias = '3–4'; freePrazo = '7–10'; }
    else if (prefix >= 49 && prefix <= 56) { regiao = 'Nordeste'; pacDias = '9–12'; sedexDias = '3–5'; freePrazo = '8–11'; }
    else if (prefix >= 57 && prefix <= 63) { regiao = 'Norte / Centro-Oeste'; pacDias = '10–14'; sedexDias = '4–6'; freePrazo = '9–13'; }
    else if (prefix >= 64 && prefix <= 65) { regiao = 'Piauí / Maranhão'; pacDias = '10–13'; sedexDias = '4–5'; freePrazo = '9–12'; }
    else if (prefix >= 66 && prefix <= 68) { regiao = 'Pará / Amapá'; pacDias = '12–16'; sedexDias = '5–7'; freePrazo = '11–15'; }
    else if (prefix >= 69 && prefix <= 69) { regiao = 'Roraima / Amazonas'; pacDias = '14–18'; sedexDias = '6–8'; freePrazo = '13–17'; }
    else if (prefix >= 70 && prefix <= 73) { regiao = 'Distrito Federal'; pacDias = '7–9'; sedexDias = '2–3'; freePrazo = '6–8'; }
    else if (prefix >= 74 && prefix <= 76) { regiao = 'Goiás / Tocantins'; pacDias = '8–11'; sedexDias = '3–4'; freePrazo = '7–10'; }
    else if (prefix >= 77 && prefix <= 77) { regiao = 'Tocantins / Pará'; pacDias = '10–13'; sedexDias = '4–5'; freePrazo = '9–12'; }
    else if (prefix >= 78 && prefix <= 78) { regiao = 'Mato Grosso'; pacDias = '9–12'; sedexDias = '3–5'; freePrazo = '8–11'; }
    else if (prefix >= 79 && prefix <= 79) { regiao = 'Mato Grosso do Sul'; pacDias = '8–11'; sedexDias = '3–4'; freePrazo = '7–10'; }
    else if (prefix >= 80 && prefix <= 87) { regiao = 'Paraná'; pacDias = '6–8'; sedexDias = '2–3'; freePrazo = '5–7'; }
    else if (prefix >= 88 && prefix <= 89) { regiao = 'Santa Catarina'; pacDias = '7–9'; sedexDias = '2–3'; freePrazo = '6–8'; }
    else if (prefix >= 90 && prefix <= 99) { regiao = 'Rio Grande do Sul'; pacDias = '7–10'; sedexDias = '2–4'; freePrazo = '6–9'; }
    else { regiao = 'Região identificada'; pacDias = '8–12'; sedexDias = '3–5'; freePrazo = '7–11'; }

    result.innerHTML = `
      <div class="frete-ok">
        <div class="frete-regiao"><i class="fas fa-map-pin"></i> ${regiao} — CEP ${cepRaw.slice(0, 5)}-${cepRaw.slice(5)}</div>
        <div class="frete-options-grid">
          <div class="fo-card">
            <div class="fo-name"><i class="fas fa-truck"></i> PAC</div>
            <div class="fo-prazo">${pacDias} dias úteis</div>
            <div class="fo-price">R$ 19,90</div>
          </div>
          <div class="fo-card destaque">
            <div class="fo-name"><i class="fas fa-bolt"></i> SEDEX</div>
            <div class="fo-prazo">${sedexDias} dias úteis</div>
            <div class="fo-price">R$ 34,90</div>
          </div>
          <div class="fo-card free">
            <div class="fo-name"><i class="fas fa-gift"></i> Grátis</div>
            <div class="fo-prazo">${freePrazo} dias úteis</div>
            <div class="fo-price gratis-txt">Acima de R$199</div>
          </div>
        </div>
      </div>`;
  }, 900);
}

function solicitarTroca() {
  const pedido = document.getElementById('troca-pedido').value.trim();
  const email = document.getElementById('troca-email').value.trim();
  const motivo = document.getElementById('troca-motivo').value;
  const res = document.getElementById('troca-resultado');
  if (!pedido || !email || !motivo) {
    res.style.display = 'block';
    res.innerHTML = '<div class="frete-error"><i class="fas fa-exclamation-circle"></i> Preencha todos os campos obrigatórios.</div>';
    return;
  }
  res.style.display = 'block';
  res.innerHTML = '<div class="frete-loading"><i class="fas fa-spinner fa-spin"></i> Enviando solicitação...</div>';
  setTimeout(() => {
    const proto = 'TR' + Date.now().toString().slice(-6);
    res.innerHTML = `
      <div class="troca-success">
        <div class="success-icon-sm"><i class="fas fa-check-circle"></i></div>
        <strong>Solicitação enviada com sucesso!</strong>
        <p>Protocolo: <strong>${proto}</strong></p>
        <p>Você receberá um retorno no e-mail <strong>${email}</strong> em até 24 horas úteis.</p>
      </div>`;
  }, 1200);
}

function renderOrders() {
  const el = document.getElementById('orders-list');
  if (!el) return;
  trackedOrders = JSON.parse(localStorage.getItem('myoboku_orders') || '[]');
  if (trackedOrders.length === 0) {
    el.innerHTML = '<div class="empty-orders"><i class="fas fa-box-open"></i><p>Nenhum pedido encontrado.<br>Após finalizar uma compra, ela aparecerá aqui.</p></div>';
    return;
  }
  el.innerHTML = trackedOrders.slice().reverse().map(order => {
    const steps = getOrderSteps(order);
    return `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <span class="order-num">${order.id}</span>
          <span class="order-date">${order.date}</span>
        </div>
        <span class="order-status-badge status-${order.statusCode}">${order.statusLabel}</span>
      </div>
      <div class="order-items-preview">${order.items.map(i => `<span>${i.name} (${i.size}) x${i.qty}</span>`).join('')}</div>
      <div class="order-track-steps">
        ${steps.map(s => `<div class="ots-step ${s.done ? 'done' : ''} ${s.current ? 'current' : ''}">
          <div class="ots-dot"><i class="fas ${s.icon}"></i></div>
          <div class="ots-label">${s.label}</div>
          ${s.date ? `<div class="ots-date">${s.date}</div>` : ''}
        </div>`).join('<div class="ots-line"></div>')}
      </div>
      ${order.trackCode ? `<div class="order-correios">Código Correios: <strong>${order.trackCode}</strong></div>` : ''}
    </div>`;
  }).join('');
}

function getOrderSteps(order) {
  const sc = order.statusCode;
  const now = order.date;
  const steps = [
    { icon: 'fa-check', label: 'Pedido confirmado', done: sc >= 0, current: sc === 0, date: sc >= 0 ? now : null },
    { icon: 'fa-box', label: 'Em preparação', done: sc >= 1, current: sc === 1, date: sc >= 1 ? addDays(order.dateRaw, 1) : null },
    { icon: 'fa-shipping-fast', label: 'Enviado', done: sc >= 2, current: sc === 2, date: sc >= 2 ? addDays(order.dateRaw, 2) : null },
    { icon: 'fa-map-marker-alt', label: 'Em trânsito', done: sc >= 3, current: sc === 3, date: sc >= 3 ? addDays(order.dateRaw, 3) : null },
    { icon: 'fa-home', label: 'Entregue', done: sc >= 4, current: sc === 4, date: sc >= 4 ? addDays(order.dateRaw, 8) : null },
  ];
  return steps;
}

function addDays(dateStr, days) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString('pt-BR');
}

function buscarRastreio() {
  const val = document.getElementById('track-input').value.trim().toUpperCase();
  const res = document.getElementById('track-resultado');
  if (!val) return;
  trackedOrders = JSON.parse(localStorage.getItem('myoboku_orders') || '[]');
  const order = trackedOrders.find(o => o.id === val || (o.trackCode && o.trackCode === val));
  if (!order) {
    res.style.display = 'block';
    res.innerHTML = '<div class="frete-error"><i class="fas fa-search"></i> Pedido não encontrado. Verifique o código e tente novamente.</div>';
    return;
  }
  res.style.display = 'block';
  const steps = getOrderSteps(order);
  res.innerHTML = `
    <div class="order-card">
      <div class="order-card-header">
        <span class="order-num">${order.id}</span>
        <span class="order-status-badge status-${order.statusCode}">${order.statusLabel}</span>
      </div>
      <div class="order-track-steps">
        ${steps.map(s => `<div class="ots-step ${s.done ? 'done' : ''} ${s.current ? 'current' : ''}">
          <div class="ots-dot"><i class="fas ${s.icon}"></i></div>
          <div class="ots-label">${s.label}</div>
          ${s.date ? `<div class="ots-date">${s.date}</div>` : ''}
        </div>`).join('<div class="ots-line"></div>')}
      </div>
    </div>`;
}

function saveOrderToTracking(orderData) {
  trackedOrders = JSON.parse(localStorage.getItem('myoboku_orders') || '[]');
  trackedOrders.push(orderData);
  localStorage.setItem('myoboku_orders', JSON.stringify(trackedOrders));
}
