export const fields = [
  {
    field: 'Nombres',
    placeholder: 'Nombres completos',
    type: 'text'
  },
  {
    field: 'Apellidos',
    placeholder: 'Apellidos completos',
    type: 'text'
  },
  {
    field: 'Correo electrónico personal',
    placeholder: 'ejemplo@correo.com',
    type: 'mail'
  },
  {
    field: 'Número de teléfono',
    placeholder: '311 111 1111',
    type: 'text'
  },
  {
    field: 'Tipo de documento',
    placeholder: 'Tipo de documento de identidad',
    select: true,
    large: false,
    // options: [
    //   'Cédula de ciudadanía - C.C.',
    //   'Número de documento de identidad - NIT',
    //   'Registro civil',
    //   'Cédula de extranjería',
    //   'Pasaporte',
    //   'Visa'
    // ]
    options: [
      {
        value: 'Cédula de ciudadanía - C.C.',
        label: 'Cédula de ciudadanía - C.C.'
      },
      {
        value: 'Tarjeta de identidad - NIT',
        label: 'Tarjeta de identidad - NIT'
      },
      { value: 'Cédula de extranjería', label: 'Cédula de extranjería' },
      { value: 'Pasaporte', label: 'Pasaporte' },
      { value: 'Visa', label: 'Visa' }
    ]
  },
  // {
  //   field: 'Tipo de documento',
  //   placeholder: 'Tipo de documento de identidad',
  //   select: true,
  //   options: [
  //     'Cédula de ciudadanía - C.C.',
  //     'Número de documento de identidad - NIT'
  //   ]
  // },
  {
    field: 'Número de identificación',
    placeholder: 'De diez (10) dígitos como mínimo',
    type: 'text'
  },
  {
    field: 'Fecha de nacimiento',
    placeholder: '--/--/----',
    type: 'date'
  },
  {
    field: 'Sexo',
    placeholder: 'Seleccione el sexo aquí',
    select: true,
    options: [
      {
        value: 'Masculino',
        label: 'Masculino'
      },
      {
        value: 'Femenino',
        label: 'Femenino'
      },
      {
        value: 'No binario',
        label: 'No binario'
      }
    ]
  },
  {
    field: 'Dirección de residencia',
    placeholder: 'Aquí la residencia / domicilio',
    large: true
  },
  {
    field: 'Estado civil',
    placeholder: 'Seleccione el estado civil',
    select: true,
    options: [
      {
        value: 'Soltero',
        label: 'Soltero'
      },
      {
        value: 'Casado',
        label: 'Casado'
      },
      {
        value: 'Unión libre',
        label: 'Unión libre'
      }
    ]
  },
  {
    field: 'Estrato social',
    placeholder: 'Seleccione el estrato',
    select: true,
    options: [
      {
        value: '1',
        label: '1'
      },
      {
        value: '2',
        label: '2,'
      },
      {
        value: '3',
        label: '3'
      },
      {
        value: '4',
        label: '4'
      },
      {
        value: '5',
        label: '5'
      },
      {
        value: '6',
        label: '6'
      }
    ]
  },
  {
    field: 'Religión',
    placeholder: 'Seleccione la religión',
    select: true,
    options: [
      {
        value: 'Cristiano',
        label: 'Cristiano'
      },
      {
        value: 'Católico',
        label: 'Católico'
      },
      {
        value: 'Ateo',
        label: 'Ateo'
      },
      {
        value: 'Otra denominación',
        label: 'Otra denominación'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  // ---------------------------------------------------------------------------
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  },
  {
    field: 'Tipo de usuario',
    placeholder: 'Seleccione el tipo de beneficiario',
    select: true,
    options: [
      {
        value: 'Estudiante de la UNAC',
        label: 'Estudiante de la UNAC'
      },
      {
        value: 'Estudiante de otra universidad',
        label: 'Estudiante de otra universidad'
      },
      {
        value: 'Docente o directivo de la UNAC',
        label: 'Docente o directivo de la UNAC'
      },
      {
        value: 'Familiar de estudiante',
        label: 'Familiar de estudiante'
      },
      {
        value: 'Miembro de la IASD',
        label: 'Miembro de la IASD'
      }
    ]
  }
]

export const academicInfo = [
  {
    field: 'Carrera',
    placeholder: 'Selecciona la carrera',
    select: true,
    large: false,
    options: [
      {
        value: 'Ingeniería de Sistemas',
        label: 'Ingeniería de Sistemas'
      },
      {
        value: 'Ingeniería Industrial',
        label: 'Ingeniería Industrial'
      },
      {
        value: 'Contaduría Pública',
        label: 'Contaduría Pública'
      },
      {
        value: 'Administracción de Empresas',
        label: 'Administracción de Empresas'
      },
      {
        value: 'Tecnólogía en Mercadeo',
        label: 'Tecnólogía en Mercadeo'
      },
      {
        value: 'Enfermería Profesional',
        label: 'Enfermería Profesional'
      },
      {
        value: 'Atención Pre-Hostipalaria',
        label: 'Atención Pre-Hostipalaria'
      }
    ]
  },
  {
    field: 'Ocupación/Profesión/Trabajo',
    placeholder: 'Seleccione la ocupación del beneficiario',
    select: true,
    large: false,
    options: [
      {
        value: 'Ingeniería de Sistemas',
        label: 'Ingeniería de Sistemas'
      },
      {
        value: 'Ingeniería Industrial',
        label: 'Ingeniería Industrial'
      },
      {
        value: 'Contaduría Pública',
        label: 'Contaduría Pública'
      },
      {
        value: 'Administracción de Empresas',
        label: 'Administracción de Empresas'
      },
      {
        value: 'Tecnólogía en Mercadeo',
        label: 'Tecnólogía en Mercadeo'
      },
      {
        value: 'Enfermería Profesional',
        label: 'Enfermería Profesional'
      },
      {
        value: 'Atención Pre-Hostipalaria',
        label: 'Atención Pre-Hostipalaria'
      }
    ]
  },
  {
    field: 'Código de estudiante',
    placeholder: 'Código Estudiantil',
    type: 'text'
  }
]
