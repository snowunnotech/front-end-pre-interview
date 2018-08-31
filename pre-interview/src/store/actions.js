export const GetBookListApi = function ({ commit }) {
  let res = {}
  setTimeout(() => {
    res = {
      "@context": "/contexts/Book",
      "@id": "/books",
      "@type": "hydra:Collection",
      "hydra:member": [
        {
          "@id": "/books/12",
          "@type": "http://schema.org/Book",
          "isbn": "9780238840920",
          "title": "string",
          "description": "string",
          "author": "string",
          "publicationDate": "2018-08-27T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/525",
              "@type": "http://schema.org/Review",
              "body": "string"
            },
            {
              "@id": "/reviews/524",
              "@type": "http://schema.org/Review",
              "body": "string"
            },
            {
              "@id": "/reviews/526",
              "@type": "http://schema.org/Review",
              "body": "string"
            }
          ]
        },
        {
          "@id": "/books/13",
          "@type": "http://schema.org/Book",
          "isbn": "9799460176592",
          "title": "In dicta molestiae asperiores consequuntur sit repellendus.",
          "description": "Doloremque et reprehenderit nesciunt eum. In esse et ut quis. Voluptate ullam placeat non ratione eaque. Quia optio explicabo et repellat tempore quod tempore.",
          "author": "Dr. Levi Hoeger I",
          "publicationDate": "1989-12-11T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/57",
              "@type": "http://schema.org/Review",
              "body": "Itaque aut qui illum hic hic possimus at consequatur. Voluptatem voluptatem tempore nostrum fugiat recusandae doloribus natus a. Ipsa voluptatem atque animi quibusdam."
            },
            {
              "@id": "/reviews/58",
              "@type": "http://schema.org/Review",
              "body": "Officiis quo minus qui nam. Pariatur possimus eligendi vitae dolores. Dolor deleniti autem dicta optio voluptatibus ullam. Necessitatibus aut et dignissimos soluta voluptatem et."
            },
            {
              "@id": "/reviews/55",
              "@type": "http://schema.org/Review",
              "body": "Eum ut et nisi eum accusantium quia. Est repellendus nihil cumque est non velit. Et unde sequi et blanditiis id enim dolores non. Occaecati pariatur iure natus quibusdam dolorem ut repellat."
            },
            {
              "@id": "/reviews/59",
              "@type": "http://schema.org/Review",
              "body": "Ea et consequatur nam nihil reiciendis voluptatem. Fugiat ducimus saepe et. Ipsam eveniet quas est repudiandae deleniti earum facere. Eum ea explicabo minima maiores aut sed."
            },
            {
              "@id": "/reviews/60",
              "@type": "http://schema.org/Review",
              "body": "Dolorem ex nostrum autem odio impedit molestiae. Non sed est iure exercitationem velit quis laborum qui."
            }
          ]
        },
        {
          "@id": "/books/14",
          "@type": "http://schema.org/Book",
          "isbn": "9794014795854",
          "title": "Voluptatem officiis vel dignissimos et dolorem.",
          "description": "Quia voluptatem quibusdam ad in maiores. Eius quibusdam sapiente quia recusandae aut.",
          "author": "Fermin Larkin",
          "publicationDate": "1983-02-13T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/62",
              "@type": "http://schema.org/Review",
              "body": "Autem quibusdam totam sed minus. Est ducimus et et ut architecto inventore tenetur soluta. Ipsa qui libero dolorem sunt tempore enim. Expedita id quod sunt numquam."
            },
            {
              "@id": "/reviews/63",
              "@type": "http://schema.org/Review",
              "body": "Amet architecto voluptatem accusamus non adipisci laudantium nihil. Quos nemo qui et repellendus praesentium saepe. Numquam neque molestiae et autem."
            },
            {
              "@id": "/reviews/64",
              "@type": "http://schema.org/Review",
              "body": "Commodi nihil id quasi magni ipsum hic eius. Assumenda voluptas dolorem rerum laborum et beatae doloremque deserunt."
            },
            {
              "@id": "/reviews/61",
              "@type": "http://schema.org/Review",
              "body": "Fuga aspernatur distinctio quos illum. Est id voluptatibus sint vitae rerum. Sequi inventore vitae eaque sit provident repudiandae atque."
            }
          ]
        },
        {
          "@id": "/books/15",
          "@type": "http://schema.org/Book",
          "isbn": "9797423849323",
          "title": "At ut non eos sed amet.",
          "description": "Enim sapiente occaecati natus. Reiciendis similique et laudantium vel nisi ea itaque. Et nihil beatae omnis voluptatibus quae sit veniam. Eos officiis et est nisi iusto amet neque.",
          "author": "Dr. Bradley Heathcote IV",
          "publicationDate": "2007-10-01T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/68",
              "@type": "http://schema.org/Review",
              "body": "Inventore eveniet nemo asperiores et consequatur aut. Officiis cupiditate commodi veritatis. Labore dolor minima voluptatum rerum."
            },
            {
              "@id": "/reviews/69",
              "@type": "http://schema.org/Review",
              "body": "Autem quia maxime est nemo molestiae consectetur. Veniam in ratione sed quis voluptatem. Ea inventore eligendi asperiores nihil vel optio maxime."
            },
            {
              "@id": "/reviews/70",
              "@type": "http://schema.org/Review",
              "body": "Odit odit enim voluptatum cumque doloribus iure. Vero repellat quasi laboriosam earum enim iusto consequuntur aut. Perspiciatis ipsam et distinctio. Voluptate voluptatem sequi inventore quas. Eum quaerat ea repellat qui quia quasi pariatur velit."
            },
            {
              "@id": "/reviews/71",
              "@type": "http://schema.org/Review",
              "body": "Voluptatem blanditiis dolorem quia beatae tenetur dignissimos. Non enim quis voluptas quia est dolore recusandae quo. Quod perferendis quisquam maxime sequi in. Vel sint a id velit recusandae."
            },
            {
              "@id": "/reviews/66",
              "@type": "http://schema.org/Review",
              "body": "Fugit tenetur doloremque quae magni et porro. Id molestias voluptates tenetur aspernatur maxime sint consequatur reiciendis. Qui omnis aut aut quibusdam consequatur a praesentium. Laborum et itaque voluptate similique dolorum."
            },
            {
              "@id": "/reviews/65",
              "@type": "http://schema.org/Review",
              "body": "Magnam perspiciatis dolorem eligendi libero est. At qui quis excepturi soluta error. Ullam eum mollitia laborum ipsam."
            },
            {
              "@id": "/reviews/67",
              "@type": "http://schema.org/Review",
              "body": "Error non laboriosam vero voluptatem in quis repellat. Voluptas veritatis earum fuga temporibus molestiae maxime praesentium vel. Dolor distinctio et dolores vitae. Quis magnam magnam nihil ea."
            }
          ]
        },
        {
          "@id": "/books/16",
          "@type": "http://schema.org/Book",
          "isbn": "9784110289456",
          "title": "Eligendi eos sint ut voluptates.",
          "description": "Omnis aut enim nihil repellat. Culpa dolore rem est est. Neque autem nihil esse. Pariatur reprehenderit assumenda error consequatur fugit ad iste.",
          "author": "Elenora Nienow",
          "publicationDate": "2004-08-23T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/73",
              "@type": "http://schema.org/Review",
              "body": "Ex dolor quis expedita asperiores molestias ex. Cupiditate et eos est quibusdam sed. Soluta porro vel facilis sunt adipisci quia."
            },
            {
              "@id": "/reviews/72",
              "@type": "http://schema.org/Review",
              "body": "Esse corporis distinctio ea molestiae. Repellat placeat accusantium natus odio aut eum porro. Reprehenderit repellendus porro est omnis cumque vel vel. Ullam aut repudiandae voluptates quibusdam."
            },
            {
              "@id": "/reviews/74",
              "@type": "http://schema.org/Review",
              "body": "Dignissimos perferendis sapiente molestiae perspiciatis. Id error blanditiis possimus quam minima. Autem corporis suscipit at nisi sit et quia facilis. Fugit nesciunt cupiditate repellendus nam doloremque non."
            },
            {
              "@id": "/reviews/75",
              "@type": "http://schema.org/Review",
              "body": "Quas id non optio magni commodi vel ullam ut. Voluptate vero voluptas illum quia qui consequatur in. Atque dolorum eveniet blanditiis cumque. Rerum consectetur vel dolorem quis."
            },
            {
              "@id": "/reviews/76",
              "@type": "http://schema.org/Review",
              "body": "Officia nostrum officia autem voluptas voluptatem consequatur et. Sit ipsam autem autem rerum velit ipsam. Aut enim eaque velit vero beatae aut."
            },
            {
              "@id": "/reviews/77",
              "@type": "http://schema.org/Review",
              "body": "Magnam labore sit repellat adipisci saepe cum sunt. Odio magni odio doloremque vel occaecati neque et. Voluptas dolore velit aspernatur aperiam error et."
            },
            {
              "@id": "/reviews/78",
              "@type": "http://schema.org/Review",
              "body": "Expedita eum ea id et qui facilis. Labore et ut rerum molestiae."
            },
            {
              "@id": "/reviews/79",
              "@type": "http://schema.org/Review",
              "body": "Commodi dolores qui ratione consequatur qui iure sed nemo. Qui quia id velit ea voluptas. Debitis sint tempora quis dolor beatae. Soluta voluptatem ratione ut officia dolores sit. Pariatur architecto odio ex similique illum sit voluptas."
            }
          ]
        },
        {
          "@id": "/books/17",
          "@type": "http://schema.org/Book",
          "isbn": "9796804400665",
          "title": "Ea dolores doloremque fuga labore.",
          "description": "Molestias hic minus et omnis porro voluptatibus. Quia reprehenderit magni fugiat consequatur officiis. Alias et et quis quae. Ratione quis voluptates nulla totam eos omnis.",
          "author": "Afton Corwin",
          "publicationDate": "1986-08-03T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/80",
              "@type": "http://schema.org/Review",
              "body": "Porro totam voluptatum fugit ut optio omnis dolores. Esse ipsum beatae eius aspernatur est commodi."
            },
            {
              "@id": "/reviews/81",
              "@type": "http://schema.org/Review",
              "body": "Molestias recusandae non hic qui et. Aperiam commodi dolor quos repellat velit provident. Et ex maxime culpa omnis repudiandae tempora. Occaecati aut fugit dolor."
            },
            {
              "@id": "/reviews/82",
              "@type": "http://schema.org/Review",
              "body": "Adipisci ratione ea qui. Sunt aut quae suscipit ea. Est exercitationem aliquid nobis. Qui quidem aut non quia cupiditate."
            }
          ]
        },
        {
          "@id": "/books/19",
          "@type": "http://schema.org/Book",
          "isbn": "9799174982977",
          "title": "Similique aut est dolores.",
          "description": "Facere odio modi consequatur dicta ipsa. Sit facere cupiditate doloremque odio ad asperiores quaerat. Accusamus sint dolorem earum ut.",
          "author": "Dr. Kaitlyn Ratke",
          "publicationDate": "1996-09-18T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/94",
              "@type": "http://schema.org/Review",
              "body": "Hic explicabo illo dolorem ut mollitia. Animi adipisci officiis iusto atque maxime dolor optio. Suscipit eligendi ea occaecati quasi veniam exercitationem quaerat."
            },
            {
              "@id": "/reviews/95",
              "@type": "http://schema.org/Review",
              "body": "At praesentium eligendi esse necessitatibus. Alias quis omnis harum est totam maxime corrupti. Architecto ullam quibusdam aliquam aperiam repellat et qui."
            },
            {
              "@id": "/reviews/96",
              "@type": "http://schema.org/Review",
              "body": "Dolorem et debitis aliquid nihil corrupti distinctio non. Consequuntur in quas accusamus illo quos magnam ut et. Voluptas et nobis laboriosam molestias."
            },
            {
              "@id": "/reviews/97",
              "@type": "http://schema.org/Review",
              "body": "Cumque rerum dolore nihil praesentium. Aspernatur mollitia eos quia voluptates."
            },
            {
              "@id": "/reviews/98",
              "@type": "http://schema.org/Review",
              "body": "Alias quia ratione praesentium quis doloribus. Itaque ipsum a quas sequi aut ad et. Dolor in ut tempora quos repellat."
            },
            {
              "@id": "/reviews/91",
              "@type": "http://schema.org/Review",
              "body": "Sunt tempora voluptas accusantium alias reprehenderit veritatis quo. Doloribus et magnam est enim. Necessitatibus illum unde vitae quos officiis. Cupiditate cupiditate enim quia in numquam odio quam ipsum."
            },
            {
              "@id": "/reviews/92",
              "@type": "http://schema.org/Review",
              "body": "Eaque sed maiores consectetur aut numquam. Eum sint recusandae consequuntur laudantium. Voluptatem tempore nihil aut rerum aut nulla impedit."
            },
            {
              "@id": "/reviews/93",
              "@type": "http://schema.org/Review",
              "body": "Unde natus ut consequatur laudantium non. Adipisci iste numquam voluptas nihil ullam. Nostrum illo quos minus provident sit ad. Vel sed sunt magni itaque architecto."
            }
          ]
        },
        {
          "@id": "/books/21",
          "@type": "http://schema.org/Book",
          "isbn": "9782062691334",
          "title": "Ea aperiam unde voluptatem tempora beatae neque.",
          "description": "Molestiae et laboriosam dolor odit omnis vel excepturi. Quia quas beatae et nam itaque nesciunt. Ea accusantium temporibus qui ad.",
          "author": "Lola Kuphal",
          "publicationDate": "2002-11-23T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/106",
              "@type": "http://schema.org/Review",
              "body": "Culpa pariatur reprehenderit consequatur id ea quas. Voluptas rem quae quisquam magni. Aut officiis et sunt quis. Non omnis error delectus error eaque voluptas."
            },
            {
              "@id": "/reviews/107",
              "@type": "http://schema.org/Review",
              "body": "Voluptatum et aut dolorem deleniti. Asperiores illo culpa debitis nihil ut. Tenetur hic debitis a."
            },
            {
              "@id": "/reviews/108",
              "@type": "http://schema.org/Review",
              "body": "Illo atque pariatur sunt provident id architecto et. Dolorem itaque quidem temporibus natus omnis asperiores voluptatibus."
            },
            {
              "@id": "/reviews/105",
              "@type": "http://schema.org/Review",
              "body": "Ipsa iure est provident quo. Eos ipsa neque dolore quo ut voluptas officiis. Dolores excepturi at enim omnis minus similique autem. Non voluptas veniam repellat et vel."
            },
            {
              "@id": "/reviews/104",
              "@type": "http://schema.org/Review",
              "body": "Quia saepe et sunt saepe nisi. Quo et expedita quo qui aut expedita. Et perferendis nulla pariatur iure veniam."
            },
            {
              "@id": "/reviews/103",
              "@type": "http://schema.org/Review",
              "body": "Aut officiis autem consectetur delectus laudantium maxime. Ducimus quo qui cum temporibus impedit dignissimos quo. Assumenda recusandae eius ut repudiandae. Placeat sint et quibusdam corporis ratione. Nihil non dolorem et nesciunt."
            }
          ]
        },
        {
          "@id": "/books/22",
          "@type": "http://schema.org/Book",
          "isbn": "9787660207130",
          "title": "Quam occaecati culpa aut in.",
          "description": "Et aut laborum cupiditate corporis aliquid aut cumque. Non qui est maiores aliquid. Autem qui est velit excepturi et necessitatibus tenetur doloremque.",
          "author": "Prof. Lee Blick PhD",
          "publicationDate": "1988-10-15T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/109",
              "@type": "http://schema.org/Review",
              "body": "Eum a enim delectus distinctio occaecati voluptate. Eos voluptatem voluptas quaerat suscipit qui. Neque consectetur debitis veritatis ipsam. Placeat soluta iusto doloribus qui est."
            },
            {
              "@id": "/reviews/110",
              "@type": "http://schema.org/Review",
              "body": "Iusto possimus accusantium fugiat ratione doloremque delectus. Aut nihil neque voluptas neque. Voluptatibus eos sit voluptate voluptatem dolor."
            },
            {
              "@id": "/reviews/111",
              "@type": "http://schema.org/Review",
              "body": "Rerum veniam nulla nam nisi. Voluptatem eum molestiae quas et sunt. Labore tempora molestias tempore iure et atque autem delectus. Voluptatum et inventore debitis voluptatem."
            },
            {
              "@id": "/reviews/112",
              "@type": "http://schema.org/Review",
              "body": "Magni officia omnis repellendus sed qui eligendi voluptatum quos. Ea dolore et ea nobis ut quibusdam aut. Ut in ipsum cum eos."
            },
            {
              "@id": "/reviews/113",
              "@type": "http://schema.org/Review",
              "body": "Animi saepe esse aut voluptatibus voluptatem illum eligendi. Et voluptatem quae sed eos nobis eum. Sequi ut exercitationem hic iste."
            },
            {
              "@id": "/reviews/114",
              "@type": "http://schema.org/Review",
              "body": "Consequatur a omnis unde ut. Saepe ullam nam placeat pariatur ratione. Corrupti sint quae velit aut est et repudiandae sint. Tempora harum dolor corrupti eos earum mollitia."
            },
            {
              "@id": "/reviews/115",
              "@type": "http://schema.org/Review",
              "body": "Voluptate nostrum ut ab voluptatem voluptas quia repellat. Dolores repellat et repellat cumque aut tenetur harum vero. Dolores veritatis perspiciatis aut voluptatem ut reprehenderit quibusdam dolorem. Sed inventore aut voluptatem voluptates."
            }
          ]
        },
        {
          "@id": "/books/24",
          "@type": "http://schema.org/Book",
          "isbn": "9798571406055",
          "title": "Voluptatem at qui eaque nihil.",
          "description": "Fugit natus quaerat quibusdam alias omnis accusamus aut. Perspiciatis itaque doloribus qui dicta eligendi quae. Facere quo beatae deleniti quia molestiae alias quo quis.",
          "author": "Rey Jacobs",
          "publicationDate": "1986-03-05T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/122",
              "@type": "http://schema.org/Review",
              "body": "Accusantium dolore id quod illo. Aut exercitationem id odit accusantium fugiat quia. Vel non culpa debitis maxime eos aperiam neque."
            },
            {
              "@id": "/reviews/123",
              "@type": "http://schema.org/Review",
              "body": "Dicta illum fugiat corrupti commodi porro. Quisquam cum doloremque quo ullam et. Laudantium esse aut quia maxime sapiente. Similique id ipsum animi sed."
            },
            {
              "@id": "/reviews/126",
              "@type": "http://schema.org/Review",
              "body": "Quia minus in omnis officia maiores. Voluptates vero odio aliquid possimus nobis ut. Labore aut fugit harum laudantium ad. Voluptas ea quam pariatur aut deserunt."
            },
            {
              "@id": "/reviews/125",
              "@type": "http://schema.org/Review",
              "body": "Labore exercitationem sequi sit ut enim itaque. Dignissimos provident autem libero minus nostrum velit. Similique reiciendis impedit hic aperiam doloremque."
            },
            {
              "@id": "/reviews/124",
              "@type": "http://schema.org/Review",
              "body": "Sunt maxime nesciunt quas. Qui dolor ea velit inventore quo aspernatur. Error dolore modi reiciendis molestiae natus. Dignissimos maiores sunt quia at."
            },
            {
              "@id": "/reviews/121",
              "@type": "http://schema.org/Review",
              "body": "Qui sit qui sit et nesciunt. Aut esse hic officia magni officia eaque. Illum molestiae in tempora pariatur est. Quas aut cumque aspernatur autem suscipit. Non tempore cum repudiandae ea maiores est quae."
            }
          ]
        },
        {
          "@id": "/books/25",
          "@type": "http://schema.org/Book",
          "isbn": "9799035988766",
          "title": "Fugiat dolores placeat reprehenderit nesciunt.",
          "description": "Ex similique consequatur nisi fuga dolores aut. Illo illum sint voluptas a aperiam.",
          "author": "Mrs. Gloria Crooks",
          "publicationDate": "2005-07-30T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/127",
              "@type": "http://schema.org/Review",
              "body": "Dolor quasi facere eos illum. Earum quia dicta est praesentium. Dolor numquam dolor aut explicabo quam. Voluptatibus accusantium harum quisquam perspiciatis voluptatem aspernatur voluptates. Voluptatem tempora dolor debitis excepturi deserunt veritatis dolorem."
            },
            {
              "@id": "/reviews/129",
              "@type": "http://schema.org/Review",
              "body": "Qui nobis et et sed. Repudiandae mollitia debitis eius iusto dolorum cupiditate. Sequi omnis harum perspiciatis maxime qui qui explicabo."
            },
            {
              "@id": "/reviews/128",
              "@type": "http://schema.org/Review",
              "body": "Vero nemo et facilis distinctio nemo eveniet. Aut similique qui dicta commodi dolorem. Libero ea quia est eius repellendus cumque. Nam qui necessitatibus et aperiam perferendis. Iste commodi qui enim ut."
            }
          ]
        },
        {
          "@id": "/books/26",
          "@type": "http://schema.org/Book",
          "isbn": "9791145436588",
          "title": "Non et et et fugit.",
          "description": "Enim velit qui nam nesciunt non dolore. Et eius et et omnis eaque. Non ea vel omnis rerum explicabo inventore quam. Qui accusamus eveniet dolorem voluptatem est. Tenetur aut sit aliquam provident et voluptatem.",
          "author": "Flavie Deckow MD",
          "publicationDate": "1995-02-17T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/133",
              "@type": "http://schema.org/Review",
              "body": "Velit et ea sed molestias. Eveniet at in aspernatur magnam sunt assumenda. Ducimus est et esse corrupti voluptatum nihil aut."
            },
            {
              "@id": "/reviews/134",
              "@type": "http://schema.org/Review",
              "body": "Quia dolores ratione enim eos. Et magni rerum ducimus voluptatem nam porro et. Molestiae molestiae rerum perspiciatis et distinctio totam culpa."
            },
            {
              "@id": "/reviews/131",
              "@type": "http://schema.org/Review",
              "body": "Placeat explicabo debitis qui eos alias ab. Adipisci odit eos quam incidunt. Ratione dolor reiciendis harum impedit aut."
            },
            {
              "@id": "/reviews/130",
              "@type": "http://schema.org/Review",
              "body": "Aliquid magnam eaque magni voluptates repellat magnam. Nemo totam doloribus culpa unde. Dolor et a quisquam qui. Culpa voluptatum error eius nam cupiditate."
            },
            {
              "@id": "/reviews/132",
              "@type": "http://schema.org/Review",
              "body": "Excepturi aut cum beatae perferendis itaque asperiores dolorem. Aut cumque ut fuga. Eligendi eum eaque itaque nobis ex neque. Officia eos sit facere velit quasi itaque."
            }
          ]
        },
        {
          "@id": "/books/27",
          "@type": "http://schema.org/Book",
          "isbn": "9790131363549",
          "title": "Est magnam ut nemo.",
          "description": "Totam iste perspiciatis harum animi et ad rerum. Fugiat et facere quisquam. Quod velit velit ut rem repellendus ut sit laudantium. Aut et similique quas ut.",
          "author": "Leanna Hudson",
          "publicationDate": "2017-06-24T00:00:00+00:00",
          "reviews": [
            {
              "@id": "/reviews/522",
              "@type": "http://schema.org/Review",
              "body": "teste"
            },
            {
              "@id": "/reviews/135",
              "@type": "http://schema.org/Review",
              "body": "Hic autem ullam sequi et voluptate. Ipsa eos libero corporis quam nobis aut aut. Et officia optio dolorem. Quia accusantium et necessitatibus."
            },
            {
              "@id": "/reviews/136",
              "@type": "http://schema.org/Review",
              "body": "Vitae dolores inventore quia. Unde consequatur iure eaque pariatur voluptatem. Ut id voluptates ullam eum deleniti adipisci assumenda architecto."
            },
            {
              "@id": "/reviews/137",
              "@type": "http://schema.org/Review",
              "body": "Similique dignissimos nam qui et est aperiam. Error perferendis repudiandae sunt alias sit inventore. Ut voluptatem deleniti quaerat. Qui in aspernatur vel omnis sed ipsum velit."
            },
            {
              "@id": "/reviews/138",
              "@type": "http://schema.org/Review",
              "body": "Consequatur aliquam deserunt ullam qui ut. Officiis quia ea impedit."
            },
            {
              "@id": "/reviews/139",
              "@type": "http://schema.org/Review",
              "body": "Aut suscipit non deserunt iste eos. Incidunt eum qui qui corrupti vero aliquam qui. Sunt rerum ut voluptatum similique. Temporibus doloremque nesciunt nobis iusto corrupti rerum quo."
            },
            {
              "@id": "/reviews/140",
              "@type": "http://schema.org/Review",
              "body": "Veritatis id iste tenetur reprehenderit et. Veniam totam iure veniam dolores. Tempore laboriosam repellat dicta similique cupiditate veritatis omnis."
            },
            {
              "@id": "/reviews/141",
              "@type": "http://schema.org/Review",
              "body": "Qui ea omnis modi ad. Dolorem maxime et eveniet accusamus. At quo qui quia sed qui sit. Quia cumque quam repudiandae impedit. Sed quia sed est consequuntur."
            },
            {
              "@id": "/reviews/521",
              "@type": "http://schema.org/Review",
              "body": "teste"
            },
            {
              "@id": "/reviews/519",
              "@type": "http://schema.org/Review",
              "body": "teste"
            },
            {
              "@id": "/reviews/520",
              "@type": "http://schema.org/Review",
              "body": "teste"
            },
            {
              "@id": "/reviews/523",
              "@type": "http://schema.org/Review",
              "body": "teste"
            }
          ]
        }
      ],
      "hydra:totalItems": 103,
      "hydra:view": {
        "@id": "/books?page=1",
        "@type": "hydra:PartialCollectionView",
        "hydra:first": "/books?page=1",
        "hydra:last": "/books?page=4",
        "hydra:next": "/books?page=2"
      },
      "hydra:search": {
        "@type": "hydra:IriTemplate",
        "hydra:template": "/books{?properties[]}",
        "hydra:variableRepresentation": "BasicRepresentation",
        "hydra:mapping": [
          {
            "@type": "IriTemplateMapping",
            "variable": "properties[]",
            "property": null,
            "required": false
          }
        ]
      }
    }
    res['hydra:member'].map((obj) => {
      obj.publicationDate = obj.publicationDate.slice(0, 10)
    })
    commit('getList', res['hydra:member'])
  }, 1000)
}
export const GetBookInfo = ({ commit, state }, id) => {
  console.log(state.BookList)
  let filterInfo = state.BookList.filter((obj) => {
    if (obj['@id'] === '/books/' + id) {
      return obj
    }
  })
  console.log(filterInfo)
  commit('getBookInfo', filterInfo)
}
