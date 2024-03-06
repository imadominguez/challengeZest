export const typeBrewerie: Record<string, {name: string; description: string}> =
  {
    micro: {
      name: 'Micro',
      description:
        'Las cervecerias de este tipo se consideran una microcerveceria',
    },
    nano: {
      name: 'Nano',
      description:
        'Una cervecería extremadamente pequeña que, por lo general, solo distribuye localmente.',
    },
    regional: {
      name: 'Regional',
      description:
        'Una cervecería que distribuye en varios estados o provincias.',
    },
    brewpub: {
      name: 'Brewpub',
      description:
        'Un restaurante centrado en la cerveza o un restaurante/bar con una cervecería en las instalaciones.',
    },
    large: {
      name: 'Large',
      description:
        'Una cervecería muy grande. Probablemente no apta para los visitantes.',
    },
    planning: {
      name: 'Planning',
      description:
        'Una cervecería en planificación o aún no abierta al público.',
    },
    bar: {
      name: 'Bar',
      description: 'Un bar. No hay equipo de cervecería en las instalaciones.',
    },
    contract: {
      name: 'Contract',
      description: 'Una cervecería que utiliza el equipo de otra cervecería.',
    },
    proprietor: {
      name: 'Proprietor',
      description:
        'Similar a la elaboración de cerveza por contrato, pero se refiere más a una incubadora de cervecería.',
    },
    closed: {
      name: 'Closed',
      description: 'Lugar cerrado',
    },
  };
