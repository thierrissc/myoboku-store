const PRODUCT_SVGS = {
  kimono_red: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kr1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#C0392B"/>
        <stop offset="100%" stop-color="#922B21"/>
      </linearGradient>
    </defs>
    <path d="M100 30 L60 70 L30 180 L170 180 L140 70 Z" fill="url(#kr1)" opacity="0.95"/>
    <path d="M100 30 L100 180" stroke="#7A1C14" stroke-width="2" opacity="0.5"/>
    <path d="M60 70 L30 180 M140 70 L170 180" stroke="#7A1C14" stroke-width="1.5" opacity="0.4"/>
    <path d="M55 100 Q100 90 145 100" stroke="#D4B896" stroke-width="2" fill="none" opacity="0.6"/>
    <circle cx="100" cy="30" r="12" fill="#F0E6D3"/>
    <rect x="45" y="55" width="20" height="40" rx="3" fill="#C0392B" opacity="0.8"/>
    <rect x="135" y="55" width="20" height="40" rx="3" fill="#C0392B" opacity="0.8"/>
    <!-- kanji accent -->
    <text x="100" y="145" text-anchor="middle" font-size="28" fill="rgba(212,184,150,0.3)" font-family="serif">油</text>
  </svg>`,

  vest_red: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vr1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C0392B"/>
        <stop offset="100%" stop-color="#7A1C14"/>
      </linearGradient>
    </defs>
    <path d="M50 40 L30 180 L170 180 L150 40 L130 60 L100 50 L70 60 Z" fill="url(#vr1)"/>
    <path d="M70 60 L100 50 L130 60 L130 180 L70 180 Z" fill="rgba(0,0,0,0.15)"/>
    <path d="M50 40 L70 60 M150 40 L130 60" stroke="#F0E6D3" stroke-width="2" opacity="0.4"/>
    <line x1="100" y1="60" x2="100" y2="180" stroke="rgba(240,230,211,0.2)" stroke-width="2"/>
    <!-- oil kanji marking -->
    <text x="100" y="130" text-anchor="middle" font-size="32" fill="rgba(201,168,76,0.6)" font-family="serif">油</text>
    <circle cx="80" cy="75" r="5" fill="#C9A84C" opacity="0.8"/>
    <circle cx="120" cy="75" r="5" fill="#C9A84C" opacity="0.8"/>
  </svg>`,

  cape_white: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cw1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F0E6D3"/>
        <stop offset="100%" stop-color="#C8B89A"/>
      </linearGradient>
    </defs>
    <path d="M100 20 L40 80 L20 230 L180 230 L160 80 Z" fill="url(#cw1)"/>
    <path d="M100 20 L100 230" stroke="rgba(192,57,43,0.3)" stroke-width="3"/>
    <path d="M40 80 L20 230 M160 80 L180 230" stroke="rgba(192,57,43,0.2)" stroke-width="2"/>
    <!-- red flame patterns bottom -->
    <path d="M20 210 Q35 195 50 210 Q65 195 80 210 Q95 195 110 210 Q125 195 140 210 Q155 195 170 210 L180 230 L20 230 Z" fill="rgba(192,57,43,0.5)"/>
    <!-- hair bun -->
    <circle cx="100" cy="18" r="14" fill="#C9A84C" opacity="0.9"/>
    <!-- kanji on back -->
    <text x="100" y="160" text-anchor="middle" font-size="30" fill="rgba(192,57,43,0.4)" font-family="serif">仙</text>
  </svg>`,

  pants_olive: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="po1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5D6B2E"/>
        <stop offset="100%" stop-color="#3D4A1E"/>
      </linearGradient>
    </defs>
    <rect x="40" y="20" width="120" height="30" rx="4" fill="url(#po1)"/>
    <path d="M40 50 L50 200 L95 200 L100 120 L105 200 L150 200 L160 50 Z" fill="url(#po1)"/>
    <line x1="100" y1="50" x2="100" y2="120" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
    <path d="M40 50 L160 50" stroke="rgba(201,168,76,0.4)" stroke-width="2"/>
    <!-- texture lines -->
    <line x1="60" y1="80" x2="90" y2="80" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
    <line x1="60" y1="100" x2="90" y2="100" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
    <line x1="110" y1="80" x2="140" y2="80" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
    <line x1="110" y1="100" x2="140" y2="100" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>
    <!-- belt -->
    <rect x="40" y="20" width="120" height="10" rx="2" fill="#C9A84C" opacity="0.8"/>
  </svg>`,

  sandals_wood: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B6914"/>
        <stop offset="100%" stop-color="#5A4310"/>
      </linearGradient>
    </defs>
    <!-- left sandal -->
    <ellipse cx="65" cy="140" rx="50" ry="18" fill="url(#sw1)"/>
    <rect x="20" y="115" width="90" height="28" rx="4" fill="url(#sw1)"/>
    <rect x="25" y="108" width="80" height="12" rx="3" fill="#C0392B"/>
    <rect x="55" y="85" width="20" height="40" rx="2" fill="url(#sw1)"/>
    <rect x="50" y="82" width="30" height="8" rx="2" fill="#C0392B"/>
    <!-- right sandal -->
    <ellipse cx="145" cy="140" rx="50" ry="18" fill="url(#sw1)"/>
    <rect x="100" y="115" width="90" height="28" rx="4" fill="url(#sw1)"/>
    <rect x="105" y="108" width="80" height="12" rx="3" fill="#C0392B"/>
    <rect x="135" y="85" width="20" height="40" rx="2" fill="url(#sw1)"/>
    <rect x="130" y="82" width="30" height="8" rx="2" fill="#C0392B"/>
    <!-- wood grain -->
    <line x1="25" y1="128" x2="105" y2="128" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
    <line x1="105" y1="128" x2="185" y2="128" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
  </svg>`,

  headband: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hb1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#A8A8A8"/>
        <stop offset="100%" stop-color="#6A6A6A"/>
      </linearGradient>
    </defs>
    <!-- metal plate -->
    <rect x="30" y="70" width="140" height="50" rx="6" fill="url(#hb1)"/>
    <rect x="35" y="75" width="130" height="40" rx="4" fill="#8A8A8A"/>
    <!-- konoha symbol -->
    <circle cx="100" cy="95" r="18" fill="none" stroke="#4A4A4A" stroke-width="2"/>
    <path d="M100 77 L105 90 L118 90 L108 98 L112 112 L100 104 L88 112 L92 98 L82 90 L95 90 Z" fill="#4A4A4A" opacity="0.7"/>
    <!-- cloth band -->
    <rect x="5" y="78" width="30" height="14" rx="3" fill="#C0392B"/>
    <rect x="165" y="78" width="30" height="14" rx="3" fill="#C0392B"/>
    <!-- scratch mark -->
    <line x1="90" y1="80" x2="110" y2="110" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <!-- rivets -->
    <circle cx="45" cy="95" r="4" fill="#7A7A7A"/>
    <circle cx="155" cy="95" r="4" fill="#7A7A7A"/>
  </svg>`,

  scroll_summoning: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sc1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4BC7A"/>
        <stop offset="100%" stop-color="#A89050"/>
      </linearGradient>
    </defs>
    <!-- scroll body -->
    <rect x="30" y="50" width="140" height="100" rx="4" fill="url(#sc1)"/>
    <!-- end rolls -->
    <ellipse cx="30" cy="100" rx="18" ry="52" fill="#C4A860"/>
    <ellipse cx="170" cy="100" rx="18" ry="52" fill="#C4A860"/>
    <ellipse cx="30" cy="100" rx="12" ry="46" fill="#B89840"/>
    <ellipse cx="170" cy="100" rx="12" ry="46" fill="#B89840"/>
    <!-- text on scroll -->
    <rect x="45" y="65" width="110" height="70" rx="2" fill="rgba(255,255,255,0.15)"/>
    <line x1="55" y1="78" x2="145" y2="78" stroke="rgba(100,70,20,0.5)" stroke-width="1.5"/>
    <line x1="55" y1="90" x2="145" y2="90" stroke="rgba(100,70,20,0.5)" stroke-width="1.5"/>
    <line x1="55" y1="102" x2="145" y2="102" stroke="rgba(100,70,20,0.5)" stroke-width="1.5"/>
    <line x1="55" y1="114" x2="120" y2="114" stroke="rgba(100,70,20,0.5)" stroke-width="1.5"/>
    <!-- summoning kanji -->
    <text x="100" y="108" text-anchor="middle" font-size="24" fill="rgba(192,57,43,0.8)" font-family="serif">召喚</text>
    <!-- red seal -->
    <circle cx="155" cy="75" r="12" fill="rgba(192,57,43,0.7)"/>
    <text x="155" y="79" text-anchor="middle" font-size="10" fill="white" font-family="serif">油</text>
  </svg>`,

  oil_sage_potion: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="op1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7D8B4A"/>
        <stop offset="100%" stop-color="#4A5520"/>
      </linearGradient>
      <linearGradient id="op2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(125,139,74,0.8)"/>
        <stop offset="100%" stop-color="rgba(74,85,32,0.95)"/>
      </linearGradient>
    </defs>
    <!-- bottle -->
    <path d="M80 80 L75 130 Q70 180 100 185 Q130 180 125 130 L120 80 Z" fill="url(#op1)"/>
    <rect x="78" y="50" width="44" height="35" rx="8" fill="url(#op1)"/>
    <rect x="85" y="38" width="30" height="18" rx="6" fill="#5D6B2E"/>
    <rect x="90" y="30" width="20" height="12" rx="3" fill="#3D4A1E"/>
    <!-- label -->
    <ellipse cx="100" cy="145" rx="22" ry="28" fill="rgba(240,230,211,0.9)"/>
    <text x="100" y="140" text-anchor="middle" font-size="11" fill="#5D6B2E" font-family="serif">仙術</text>
    <text x="100" y="154" text-anchor="middle" font-size="8" fill="#7D8B4A" font-family="sans-serif">OIL</text>
    <!-- glow -->
    <ellipse cx="100" cy="145" rx="28" ry="35" fill="rgba(125,139,74,0.08)"/>
    <!-- bubbles -->
    <circle cx="90" cy="110" r="4" fill="rgba(201,168,76,0.3)"/>
    <circle cx="108" cy="120" r="3" fill="rgba(201,168,76,0.25)"/>
  </svg>`,

  toad_figurine_gamabunta: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gb1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9E3020"/>
        <stop offset="100%" stop-color="#5E1A10"/>
      </linearGradient>
    </defs>
    <!-- body -->
    <ellipse cx="100" cy="120" rx="70" ry="60" fill="url(#gb1)"/>
    <!-- head -->
    <ellipse cx="100" cy="65" rx="55" ry="45" fill="url(#gb1)"/>
    <!-- eyes -->
    <circle cx="75" cy="52" r="16" fill="#C4915A"/>
    <circle cx="125" cy="52" r="16" fill="#C4915A"/>
    <circle cx="75" cy="52" r="10" fill="#1A0800"/>
    <circle cx="125" cy="52" r="10" fill="#1A0800"/>
    <circle cx="78" cy="49" r="4" fill="#FFD700"/>
    <circle cx="128" cy="49" r="4" fill="#FFD700"/>
    <!-- mouth -->
    <path d="M60 80 Q100 95 140 80" stroke="#3A0E08" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- belly stripes -->
    <ellipse cx="100" cy="130" rx="45" ry="38" fill="rgba(196,145,90,0.25)"/>
    <path d="M70 120 Q100 115 130 120 Q100 130 70 120 Z" fill="rgba(196,145,90,0.2)"/>
    <!-- nose -->
    <ellipse cx="90" cy="70" rx="5" ry="4" fill="#3A0E08"/>
    <ellipse cx="110" cy="70" rx="5" ry="4" fill="#3A0E08"/>
    <!-- sake jug -->
    <ellipse cx="148" cy="148" rx="18" ry="20" fill="#D4B896"/>
    <rect x="133" y="128" width="30" height="10" rx="5" fill="#B89070"/>
    <text x="148" y="152" text-anchor="middle" font-size="10" fill="#8B4513">酒</text>
  </svg>`,

  toad_figurine_fukasaku: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fk1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A6225"/>
        <stop offset="100%" stop-color="#2A3A12"/>
      </linearGradient>
    </defs>
    <!-- tiny body (he's small!) -->
    <ellipse cx="100" cy="130" rx="45" ry="40" fill="url(#fk1)"/>
    <!-- head -->
    <ellipse cx="100" cy="85" rx="38" ry="35" fill="url(#fk1)"/>
    <!-- white beard -->
    <path d="M78 105 Q100 120 122 105 Q110 140 100 145 Q90 140 78 105 Z" fill="rgba(255,255,255,0.85)"/>
    <!-- eyes (wise elder) -->
    <circle cx="82" cy="75" r="12" fill="#D4BC7A"/>
    <circle cx="118" cy="75" r="12" fill="#D4BC7A"/>
    <circle cx="82" cy="75" r="7" fill="#1A1000"/>
    <circle cx="118" cy="75" r="7" fill="#1A1000"/>
    <!-- eyebrows (bushy old man) -->
    <path d="M72 64 Q82 60 92 64" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M108 64 Q118 60 128 64" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- wrinkles -->
    <path d="M82 95 Q100 102 118 95" stroke="rgba(0,0,0,0.2)" stroke-width="2" fill="none"/>
    <!-- staff -->
    <line x1="148" y1="60" x2="155" y2="175" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
    <circle cx="148" cy="58" r="6" fill="#C9A84C"/>
  </svg>`,

  sage_mode_mask: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sm1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2A2A2A"/>
        <stop offset="100%" stop-color="#0A0A0A"/>
      </linearGradient>
    </defs>
    <!-- mask shape -->
    <path d="M100 20 Q160 30 170 90 Q175 140 145 165 Q125 180 100 182 Q75 180 55 165 Q25 140 30 90 Q40 30 100 20 Z" fill="url(#sm1)"/>
    <!-- sage mode eye markings (red/purple lines) -->
    <path d="M45 85 Q65 75 80 85" stroke="#7D3C8A" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M120 85 Q135 75 155 85" stroke="#7D3C8A" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- eyes (toad-like in sage mode) -->
    <ellipse cx="75" cy="90" rx="22" ry="14" fill="#C9A84C"/>
    <ellipse cx="125" cy="90" rx="22" ry="14" fill="#C9A84C"/>
    <ellipse cx="75" cy="90" rx="8" ry="12" fill="#1A0A00"/>
    <ellipse cx="125" cy="90" rx="8" ry="12" fill="#1A0A00"/>
    <!-- forehead marking 油 -->
    <text x="100" y="65" text-anchor="middle" font-size="22" fill="rgba(192,57,43,0.9)" font-family="serif">油</text>
    <!-- cheek lines -->
    <path d="M35 110 Q50 105 60 115" stroke="#7D3C8A" stroke-width="4" fill="none"/>
    <path d="M140 115 Q150 105 165 110" stroke="#7D3C8A" stroke-width="4" fill="none"/>
    <!-- mouth -->
    <path d="M70 145 Q100 155 130 145" stroke="#444" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  red_haori: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rh1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C0392B"/>
        <stop offset="100%" stop-color="#7A1C14"/>
      </linearGradient>
    </defs>
    <!-- haori body -->
    <path d="M40 30 L20 220 L90 220 L100 120 L110 220 L180 220 L160 30 Z" fill="url(#rh1)"/>
    <path d="M100 30 L100 220" stroke="rgba(240,230,211,0.3)" stroke-width="2"/>
    <!-- collar -->
    <path d="M40 30 L100 80 L160 30" stroke="#F0E6D3" stroke-width="3" fill="none"/>
    <!-- sleeve -->
    <path d="M40 30 L10 130 L30 140 L50 80" fill="url(#rh1)"/>
    <path d="M160 30 L190 130 L170 140 L150 80" fill="url(#rh1)"/>
    <!-- white flame pattern bottom -->
    <path d="M20 200 Q35 185 50 200 Q65 185 80 200 Q92 188 100 200 Q108 188 120 200 Q135 185 150 200 Q165 185 180 200 L180 220 L20 220 Z" fill="rgba(240,230,211,0.15)"/>
    <!-- 油 kanji on back -->
    <text x="100" y="160" text-anchor="middle" font-size="36" fill="rgba(240,230,211,0.25)" font-family="serif">油</text>
  </svg>`,

  toad_necklace: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- chain -->
    <path d="M40 40 Q100 20 160 40 Q180 60 160 80 Q130 110 100 150 Q70 110 40 80 Q20 60 40 40 Z" stroke="#C9A84C" stroke-width="3" fill="none"/>
    <!-- chain links -->
    <circle cx="55" cy="42" r="4" fill="none" stroke="#C9A84C" stroke-width="2"/>
    <circle cx="100" cy="25" r="4" fill="none" stroke="#C9A84C" stroke-width="2"/>
    <circle cx="145" cy="42" r="4" fill="none" stroke="#C9A84C" stroke-width="2"/>
    <!-- toad pendant -->
    <ellipse cx="100" cy="155" rx="28" ry="24" fill="#4A6225"/>
    <ellipse cx="100" cy="148" rx="22" ry="18" fill="#5D6B2E"/>
    <circle cx="90" cy="143" r="7" fill="#D4BC7A"/>
    <circle cx="110" cy="143" r="7" fill="#D4BC7A"/>
    <circle cx="90" cy="143" r="4" fill="#1A0800"/>
    <circle cx="110" cy="143" r="4" fill="#1A0800"/>
    <path d="M84 158 Q100 165 116 158" stroke="#2A3A12" stroke-width="2" fill="none"/>
    <!-- gems on chain -->
    <circle cx="100" cy="65" r="8" fill="#C0392B" opacity="0.8"/>
    <circle cx="72" cy="58" r="5" fill="#C9A84C"/>
    <circle cx="128" cy="58" r="5" fill="#C9A84C"/>
  </svg>`,

  senin_book: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sb1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B2015"/>
        <stop offset="100%" stop-color="#5A1210"/>
      </linearGradient>
    </defs>
    <!-- book spine -->
    <rect x="30" y="30" width="18" height="160" rx="3" fill="#6A1810"/>
    <!-- book cover -->
    <rect x="45" y="30" width="125" height="160" rx="4" fill="url(#sb1)"/>
    <!-- pages -->
    <rect x="48" y="33" width="119" height="154" rx="2" fill="#F0E6D3"/>
    <rect x="48" y="33" width="119" height="154" rx="2" fill="none" stroke="#C0392B" stroke-width="2"/>
    <!-- cover art: Jiraiya silhouette -->
    <text x="107" y="115" text-anchor="middle" font-size="50" fill="rgba(192,57,43,0.6)" font-family="serif">忍</text>
    <!-- title text area -->
    <rect x="58" y="40" width="99" height="40" rx="2" fill="rgba(192,57,43,0.2)"/>
    <text x="107" y="55" text-anchor="middle" font-size="9" fill="#C0392B" font-family="serif">THE TALE OF</text>
    <text x="107" y="70" text-anchor="middle" font-size="8" fill="#C0392B" font-family="serif">UTTERLY GUTSY SHINOBI</text>
    <!-- author -->
    <text x="107" y="178" text-anchor="middle" font-size="7" fill="#C0392B" font-family="serif">JIRAIYA</text>
    <!-- bookmark -->
    <rect x="148" y="30" width="12" height="50" rx="0" fill="#C9A84C"/>
    <path d="M148 75 L154 65 L160 75" fill="#7A6020"/>
  </svg>`,

  white_hair_wig: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wh1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F0E6D3"/>
        <stop offset="100%" stop-color="#C8B89A"/>
      </linearGradient>
    </defs>
    <!-- head base -->
    <ellipse cx="100" cy="105" rx="55" ry="60" fill="#F0D8C0" opacity="0.3"/>
    <!-- long white hair flowing down -->
    <path d="M45 70 Q25 100 20 160 Q35 175 50 165 Q45 120 55 80" fill="url(#wh1)" opacity="0.9"/>
    <path d="M155 70 Q175 100 180 160 Q165 175 150 165 Q155 120 145 80" fill="url(#wh1)" opacity="0.9"/>
    <!-- top hair -->
    <path d="M45 70 Q50 30 100 20 Q150 30 155 70 Q130 45 100 40 Q70 45 45 70 Z" fill="url(#wh1)"/>
    <!-- hair strands -->
    <path d="M55 80 Q50 130 48 160" stroke="rgba(200,184,154,0.6)" stroke-width="2" fill="none"/>
    <path d="M145 80 Q150 130 152 160" stroke="rgba(200,184,154,0.6)" stroke-width="2" fill="none"/>
    <path d="M65 75 Q58 130 56 158" stroke="rgba(200,184,154,0.6)" stroke-width="1.5" fill="none"/>
    <path d="M135 75 Q142 130 144 158" stroke="rgba(200,184,154,0.6)" stroke-width="1.5" fill="none"/>
    <!-- red hairband -->
    <path d="M45 75 Q100 60 155 75" stroke="#C0392B" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- forehead protector clip -->
    <rect x="80" y="68" width="40" height="12" rx="4" fill="#8A8A8A"/>
    <text x="100" y="78" text-anchor="middle" font-size="7" fill="#4A4A4A">&#x6728;&#x8449;</text>
  </svg>`,
};
