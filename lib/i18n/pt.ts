import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    siteTitle: "PAVINEIVA · Pré-fabricados de Betão desde 1978",
    siteDescription:
      "Pavineiva – fabricante português de vigotas pré-esforçadas, lajes alveoladas, blocos de betão, esteios e produtos para vacarias. Sediada em Neiva, Viana do Castelo. Cobertura nacional e exportação.",
  },
  nav: {
    home: "Início",
    products: "Produtos",
    company: "Empresa",
    contact: "Contactos",
    quote: "Pedir orçamento",
  },
  common: {
    callNow: "Ligar agora",
    requestQuote: "Pedir orçamento",
    getDirections: "Ver direções",
    openOnGoogleMaps: "Abrir no Google Maps",
    learnMore: "Saber mais",
    contactUs: "Falar connosco",
    sinceYear: (year: number) => `Desde ${year}`,
    yearsExperience: (years: number) => `${years} anos a construir confiança`,
    closed: "Encerrado",
    monFri: "Seg–Sex",
    saturday: "Sábado",
    sunday: "Domingo",
    rating: (stars: number, count: number) =>
      `${stars.toLocaleString("pt-PT")} ★ no Google · ${count} avaliações`,
    skipToContent: "Saltar para o conteúdo",
    switchLanguageTo: "EN",
  },
  home: {
    meta: {
      title: "PAVINEIVA · Pré-fabricados de Betão · Neiva, Viana do Castelo",
      description:
        "Vigotas pré-esforçadas, lajes alveoladas, blocos de betão e artefactos pré-fabricados de alta fiabilidade. Fabricação própria desde 1978. Pedido de orçamento em 24h.",
    },
    heroEyebrow: "Pré-fabricados de Betão · Desde 1978",
    heroTitle: "Soluções pré-fabricadas para uma construção mais sólida.",
    heroLead:
      "Da casa particular à grande obra pública, a Pavineiva entrega vigotas pré-esforçadas, lajes, blocos e artefactos de betão com fiabilidade testada e cobertura nacional.",
    heroPrimaryCta: "Pedir orçamento",
    heroSecondaryCta: "Ver produtos",
    trustStrip: {
      foundedLabel: "Fundada em",
      coverageLabel: "Distribuição",
      coverageValue: "Portugal + estrangeiro",
      memberLabel: "Membro",
    },
    productsSection: {
      eyebrow: "Catálogo",
      title: "Cinco famílias de produtos",
      lead: "Tudo o que a sua obra precisa em pré-fabricados de betão, com produção própria e qualidade controlada.",
      viewAll: "Ver catálogo completo",
    },
    whyUs: {
      eyebrow: "Porquê a Pavineiva",
      title: "Fiabilidade que se mede em décadas",
      lead: "O nosso posicionamento empresarial assenta na funcionalidade, propriedades físicas, valores estéticos e na importância de menores custos nos materiais de construção.",
      points: [
        {
          title: "Fabricação própria",
          body: "Linhas de produção em Neiva. Controlamos toda a cadeia, da matéria-prima ao produto acabado.",
        },
        {
          title: "Qualidade verificada",
          body: "Propriedades mecânicas dos produtos verificadas periodicamente por equipa técnica qualificada.",
        },
        {
          title: "Cobertura nacional",
          body: "Servimos obras públicas, construtoras, arquitetos e particulares em todo o país e exportação.",
        },
        {
          title: "Pré-esforço em destaque",
          body: "Vigotas pré-esforçadas e lajes alveoladas para vãos exigentes, com alta fiabilidade estrutural.",
        },
      ],
    },
    coverage: {
      eyebrow: "Onde chegamos",
      title: "Cobertura de todo o país e exportação",
      body: "A partir de Neiva, em Viana do Castelo, entregamos pré-esforçados e artefactos de betão para obras em Portugal continental e clientes internacionais. Para cargas e tempos de entrega, peça orçamento com indicação da obra.",
    },
    ctaSection: {
      title: "Tem uma obra à vista?",
      body: "Envie-nos a especificação ou a memória descritiva. Respondemos com orçamento e prazo em 24 horas úteis.",
      primary: "Pedir orçamento",
      secondary: "Ligar agora",
    },
  },
  products: {
    meta: {
      title: "Produtos · Pavineiva · Pré-esforçados e artefactos de betão",
      description:
        "Catálogo Pavineiva: vigotas pré-esforçadas, lajes alveoladas, abobadilhas, blocos de betão, BlocoTherm, blocos acústicos, blocos de cofragem, caixas de estore térmicas, esteios e produtos para vacarias.",
    },
    title: "Catálogo de produtos",
    lead: "Cinco famílias, dezenas de soluções. Toda a produção é Pavineiva, fabricada em Neiva sob controlo de qualidade contínuo.",
    families: {
      lajes: {
        name: "Lajes pré-esforçadas",
        description:
          "Vigotas, abobadilhas e lajes alveoladas para pavimentos e coberturas em pré-esforço.",
      },
      alvenarias: {
        name: "Alvenarias",
        description:
          "Blocos de betão para todas as exigências: estruturais, leves, acústicos, térmicos e de cofragem.",
      },
      "caixas-estore": {
        name: "Caixas de estore",
        description: "Caixas de estore em betão com isolamento térmico integrado.",
      },
      esteios: {
        name: "Esteios e postes",
        description: "Esteios e postes em betão para vinhas, vedações e estruturas auxiliares.",
      },
      vacarias: {
        name: "Vacarias e pecuária",
        description: "Grelhas para bovinos e vitelos, camas alveoladas e soluções para estábulos.",
      },
    },
    items: {
      "vigotas-preesforcadas": {
        name: "Vigotas pré-esforçadas",
        description:
          "Vigotas de betão pré-esforçado por fios aderentes, com secção otimizada para vãos correntes em habitação e obra.",
      },
      "abobadilhas-betao-leve": {
        name: "Abobadilhas de betão leve",
        description:
          "Blocos de cofragem leves (abobadilhas) para pavimentos pré-esforçados, reduzindo o peso próprio da estrutura.",
      },
      "lajes-alveoladas": {
        name: "Lajes alveoladas",
        description:
          "Lajes pré-esforçadas com alvéolos longitudinais para grandes vãos em pavimentos, coberturas e estacionamentos.",
      },
      "bloco-betao-normal": {
        name: "Bloco de betão normal",
        description:
          "Bloco de betão para alvenarias correntes, com agregados convencionais.",
      },
      "bloco-betao-leve": {
        name: "Bloco de betão leve",
        description:
          "Bloco fabricado com agregados leves de argila expandida — melhor isolamento, menor peso próprio.",
      },
      blocotherm: {
        name: "BlocoTherm",
        description:
          "Bloco de elevado desempenho térmico, para paredes exteriores que dispensam isolamento adicional.",
      },
      "blocos-acusticos": {
        name: "Blocos acústicos",
        description:
          "Blocos especialmente concebidos para divisórias com exigências de isolamento sonoro.",
      },
      "bloco-cofragem": {
        name: "Bloco de cofragem",
        description:
          "Bloco de betão de cofragem perdida, para muros, paredes resistentes e estruturas armadas.",
      },
      "caixa-estore-termica": {
        name: "Caixa de estore com isolamento térmico",
        description:
          "Caixa em betão pré-fabricado com isolamento térmico integrado, pronta a aplicar na obra.",
      },
      "esteios-postes": {
        name: "Esteios e postes",
        description:
          "Esteios pré-fabricados para vinhas, vedações agrícolas, suportes e usos correntes em obra.",
      },
      "grelhas-vitelos": {
        name: "Grelhas para vitelos",
        description:
          "Grelhas em betão pré-fabricado dimensionadas para zonas de vitelos, escorrimento eficiente e durabilidade.",
      },
      "grelhas-bovinos": {
        name: "Grelhas para bovinos",
        description:
          "Grelhas em betão de alta resistência para zonas de bovinos adultos, em estábulos e parques.",
      },
      "camas-alveoladas": {
        name: "Camas alveoladas",
        description:
          "Camas pré-fabricadas com alvéolos, para bem-estar animal e maneio mais simples em vacarias.",
      },
    },
    ctaTitle: "Precisa de orçamento para um destes produtos?",
    ctaBody:
      "Diga-nos o produto, a quantidade e a localização da obra. Respondemos com preço e prazo em 24 horas úteis.",
    ctaButton: "Pedir orçamento",
  },
  company: {
    meta: {
      title: "Empresa · Pavineiva · Pré-esforçados desde 1978",
      description:
        "A Pavineiva (Pinheiro, Rocha & Reis, Lda.) é fabricante português de pré-esforçados e artefactos de betão desde 1978, com sede em Neiva, Viana do Castelo.",
    },
    title: "A Pavineiva, em obra desde 1978.",
    lead: "Pinheiro, Rocha & Reis, Lda. — uma empresa familiar do Minho que cresceu a fabricar soluções fiáveis para a construção.",
    storyTitle: "A nossa história",
    storyBody: [
      "Constituída em 1978, a Pavineiva alcançou uma estabilidade invejável e adquiriu o estatuto privilegiado de que são prova os seus clientes e as obras realizadas.",
      "Comercializamos produtos pré-esforçados de alta fiabilidade e um vasto sortido de artefactos de betão, aptos a satisfazer os mais diferentes requisitos — assegurando a cobertura de todo o país e estrangeiro.",
      "Continuamos, em ritmo crescente, a oferecer soluções diversificadas para o segmento da construção, desde as casas particulares e escritórios às obras e equipamentos públicos.",
    ],
    valuesTitle: "Como trabalhamos",
    values: [
      {
        title: "Funcionalidade",
        body: "Cada produto é pensado para a função estrutural ou utilitária que vai cumprir em obra.",
      },
      {
        title: "Propriedades físicas",
        body: "Propriedades mecânicas dos produtos são verificadas periodicamente, com rigor.",
      },
      {
        title: "Valores estéticos",
        body: "Acabamentos e tolerâncias pensados para o resultado final, não apenas para o catálogo.",
      },
      {
        title: "Custo otimizado",
        body: "Investimos em matéria-prima de qualidade para entregar melhor preço sem ceder na fiabilidade.",
      },
    ],
    teamTitle: "Quem nos representa",
    teamLead: "Equipa técnica qualificada, com pessoas a quem pode ligar quando precisa.",
    team: [
      { name: "José Manuel Rocha", role: "Engenheiro de Qualidade e Orçamentos" },
      { name: "Paulo Reis", role: "Departamento Comercial" },
      { name: "Bruno Figueiredo", role: "Contabilista Certificado" },
      { name: "Daniela Martins", role: "Encarregada de Produção" },
    ],
    membershipTitle: "Membros da ANIPB",
    membershipBody:
      "A Pavineiva é associada da ANIPB — Associação Nacional dos Industriais da Prefabricação em Betão, organização representativa do setor em Portugal.",
  },
  contact: {
    meta: {
      title: "Contactos · Pavineiva · Neiva, Viana do Castelo",
      description:
        "Contacte a Pavineiva para pedidos de orçamento, informação técnica ou apoio comercial. Telefone +351 258 350 480, Zona Industrial de Neiva, Viana do Castelo.",
    },
    title: "Falar com a Pavineiva",
    lead: "Qualquer informação técnica, pedido de orçamento ou outro assunto pode ser solicitado pelo formulário — ou por qualquer um dos contactos abaixo.",
    departmentsTitle: "Departamentos",
    departments: [
      { name: "Geral", emailKey: "general" },
      { name: "Orçamentação", emailKey: "quotes" },
      { name: "Qualidade", emailKey: "quality" },
      { name: "Comercial — Paulo Reis", emailKey: "commercial" },
      { name: "Contabilidade", emailKey: "accounting" },
      { name: "Financeiro", emailKey: "finance" },
    ],
    addressTitle: "Morada",
    hoursTitle: "Horário",
    locationTitle: "Onde estamos",
    form: {
      title: "Pedido de orçamento",
      lead: "Descreva-nos a obra, o produto e a quantidade. Respondemos em 24 horas úteis.",
      name: "Nome",
      namePlaceholder: "O seu nome",
      email: "Email",
      emailPlaceholder: "email@exemplo.pt",
      phone: "Telefone",
      phonePlaceholder: "+351 …",
      company: "Empresa (opcional)",
      companyPlaceholder: "Nome da empresa",
      subject: "Assunto",
      subjectOptions: [
        { value: "quote", label: "Pedido de orçamento" },
        { value: "technical", label: "Informação técnica" },
        { value: "commercial", label: "Comercial" },
        { value: "other", label: "Outro assunto" },
      ],
      message: "Mensagem",
      messagePlaceholder:
        "Indique o produto, a quantidade, a localização da obra e a data prevista.",
      consent: "Li e aceito a",
      consentLink: "Política de Privacidade",
      submit: "Enviar pedido",
      submitting: "A enviar…",
      successTitle: "Pedido enviado",
      successBody:
        "Obrigado. Recebemos o seu pedido e vamos responder em 24 horas úteis. Se for urgente, ligue +351 258 350 480.",
      errorTitle: "Não foi possível enviar",
      errorBody:
        "Houve um problema a enviar o seu pedido. Por favor tente novamente, ou ligue +351 258 350 480.",
      requiredFieldsMissing: "Preencha os campos obrigatórios.",
      invalidEmail: "Email inválido.",
      messageTooShort: "A mensagem é demasiado curta.",
    },
  },
  footer: {
    tagline:
      "Pré-fabricados de betão para uma construção mais sólida. Em obra desde 1978.",
    sections: {
      navigation: "Navegação",
      products: "Produtos",
      contacts: "Contactos",
      legal: "Legal",
    },
    rightsReserved: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos e Condições",
  },
  privacy: {
    meta: {
      title: "Política de Privacidade · Pavineiva",
      description:
        "Política de Privacidade da Pavineiva – Pinheiro, Rocha & Reis, Lda.",
    },
    title: "Política de Privacidade",
    updated: "Atualizada a 1 de junho de 2026.",
    body: [
      "A Pavineiva – Pinheiro, Rocha & Reis, Lda. (NIF 500678189), com sede em Zona Industrial 2.ª fase, 4935-232 Neiva – Viana do Castelo, é responsável pelo tratamento dos dados pessoais recolhidos através deste sítio.",
      "Tratamento de dados: os dados que nos envia através do formulário de contacto (nome, email, telefone, empresa, mensagem) são utilizados exclusivamente para responder ao seu pedido e, se aplicável, para emitir orçamento e gerir a relação comercial subsequente. A base legal é o seu consentimento e o interesse legítimo na resposta ao pedido.",
      "Conservação: conservamos os dados pelo tempo estritamente necessário ao tratamento do pedido e, posteriormente, pelos prazos legais aplicáveis a documentos comerciais e contabilísticos.",
      "Direitos: nos termos do RGPD, pode exercer os direitos de acesso, retificação, oposição, limitação, apagamento e portabilidade dos seus dados, contactando geral@pavineiva.com.",
      "Cookies e analítica: este sítio utiliza estatísticas de tráfego anónimas e sem cookies de seguimento. Nenhum dado pessoal é partilhado com terceiros para fins publicitários.",
      "Reclamações: pode apresentar reclamação à Comissão Nacional de Proteção de Dados (www.cnpd.pt).",
    ],
  },
  terms: {
    meta: {
      title: "Termos e Condições · Pavineiva",
      description: "Termos e Condições de utilização do sítio Pavineiva.",
    },
    title: "Termos e Condições",
    updated: "Atualizados a 1 de junho de 2026.",
    body: [
      "Este sítio é propriedade da Pavineiva – Pinheiro, Rocha & Reis, Lda. (NIF 500678189), com sede em Zona Industrial 2.ª fase, 4935-232 Neiva – Viana do Castelo.",
      "Os conteúdos apresentados têm caráter informativo. Especificações técnicas, dimensões e características dos produtos podem ser ajustadas em função do projeto; para informação vinculativa solicite orçamento por escrito.",
      "Os elementos gráficos e textuais deste sítio são propriedade da Pavineiva e não podem ser reproduzidos sem autorização escrita.",
      "Resolução alternativa de litígios de consumo: nos termos da Lei n.º 144/2015, em caso de litígio o consumidor pode recorrer a uma entidade de resolução alternativa de litígios de consumo. Pode também aceder à Plataforma Europeia de Resolução de Litígios em Linha em https://ec.europa.eu/consumers/odr.",
      "A utilização deste sítio implica a aceitação destes termos.",
    ],
  },
};
