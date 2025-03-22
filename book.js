const books = [
    {
        "title": "The Cold Dish",
        "author": "Craig Johnson",
        "about": "Set in the remote town of Durant, Wyoming, this mystery novel follows Sheriff Walt Longmire as he investigates a murder tied to an old injustice. With deep-seated resentment and unresolved tensions at its core, the novel explores themes of justice, morality, and leadership. Longmire’s quiet wisdom and sharp instincts make him an unforgettable protagonist. This gripping tale delves into revenge and redemption in a small-town setting.",
        "price": "450",
        "image": "images/books/book10.jpeg",
        "category": "fiction"
    },
    {
        "title": "We Do Not Part",
        "author": "Hang Kung",
        "about": "This poignant and heart-wrenching novel explores the complexities of love and separation. Two people are deeply connected by a bond that defies time and distance, facing personal sacrifices and societal pressures. As they navigate life's challenges, their connection endures, proving that love transcends physical presence. The book reflects on emotional ties and the beauty of quiet devotion and loss.",
        "price": "499",
        "image": "images/books/book1.jpeg",
        "category": "fiction"
    },
    {
        "title": "River Sing Me Home",
        "author": "Amanda",
        "about": "Set against the backdrop of colonialism and its lasting impacts, this novel tells the story of a mother's desperate search for her children. Separated from them during the horrors of slavery, she embarks on a journey filled with danger and heartbreak. Along the way, she encounters injustice but remains determined. The novel explores themes of resilience, hope, and the enduring strength of love and family.",
        "price": "550",
        "image": "images/books/book2.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Bluest Eye",
        "author": "Toni Morrison",
        "about": "This powerful novel explores race, beauty, and identity in America. Set during the Great Depression, it follows Pecola Breedlove, a young African American girl who longs for blue eyes, believing they will bring her acceptance. Morrison uses evocative language to depict the trauma and prejudice Pecola faces. The novel highlights the devastating effects of systemic racism and self-perception.",
        "price": "499",
        "image": "images/books/book8.jpeg",
        "category": "fiction"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "about": "A beloved classic of English literature, 'Pride and Prejudice' explores love, social class, and personal growth. The story follows Elizabeth Bennet, a witty and independent woman, as she navigates romance and societal expectations. Her evolving relationship with the aloof Mr. Darcy is central to the novel. Austen’s sharp social commentary and humor continue to resonate with readers today.",
        "price": "299",
        "image": "images/books/book3.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Starless Sea",
        "author": "Erin Morgenstern",
        "about": "A mysterious underground world filled with books, secret doors, and timeless stories. Zachary Ezra Rawlins discovers a strange book that leads him on a journey through a labyrinth of hidden stories, secret societies, and fate. This lyrical, dreamlike novel immerses readers in a world of forgotten legends and destiny.",
        "price": "499",
        "image": "images/books/book19.jpeg",
        "category": "fiction"
    },
    {
        "title": "Circe",
        "author": "Madeline Miller",
        "about": "A powerful retelling of the myth of Circe, the enchantress from Greek mythology. Born to the god Helios, Circe discovers her own path, defying expectations and embracing her independence. The novel follows her journey from isolation to empowerment, exploring themes of power, identity, and transformation. With lyrical prose, Miller brings mythology to life in a deeply human way.",
        "price": "499",
        "image": "images/books/book20.jpg",
        "category": "fiction"
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "about": "A gothic romance following the journey of Jane Eyre, an orphan with a strong will and a desire for independence. Raised in hardship, she finds employment at Thornfield Hall, where she falls for the brooding Mr. Rochester. However, dark secrets threaten their happiness. The novel explores themes of love, morality, and self-respect in a deeply emotional narrative.",
        "price": "499",
        "image": "images/books/book21.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "about": "One of the most important works in Western literature, 'The Divine Comedy' is an epic poem that tells the journey of the soul through three realms: Hell, Purgatory, and Paradise. The protagonist, Dante, is guided by the Roman poet Virgil through the terrifying and morally complex landscape of Hell, where souls are punished for their sins. In Purgatory, Dante learns about redemption and the purification of the soul, while in Paradise, he experiences the divine presence of God. Through this allegorical journey, Dante explores themes of sin, virtue, and the ultimate quest for salvation. The work is a profound meditation on the human condition and the eternal struggle between good and evil.",
        "price": "799",
        "image": "images/books/book17.jpg",
        "category": "fiction"
    },
    {
        "title": "The Cold Dish",
        "author": "Craig Johnson",
        "about": "Set in the remote town of Durant, Wyoming, this mystery novel follows Sheriff Walt Longmire as he investigates a murder tied to an old injustice. With deep-seated resentment and unresolved tensions at its core, the novel explores themes of justice, morality, and leadership. Longmire’s quiet wisdom and sharp instincts make him an unforgettable protagonist. This gripping tale delves into revenge and redemption in a small-town setting.",
        "price": "450",
        "image": "images/books/book10.jpeg",
        "category": "fiction"
    },
    {
        "title": "We Do Not Part",
        "author": "Hang Kung",
        "about": "This poignant and heart-wrenching novel explores the complexities of love and separation. Two people are deeply connected by a bond that defies time and distance, facing personal sacrifices and societal pressures. As they navigate life's challenges, their connection endures, proving that love transcends physical presence. The book reflects on emotional ties and the beauty of quiet devotion and loss.",
        "price": "499",
        "image": "images/books/book1.jpeg",
        "category": "fiction"
    },
    {
        "title": "River Sing Me Home",
        "author": "Amanda",
        "about": "Set against the backdrop of colonialism and its lasting impacts, this novel tells the story of a mother's desperate search for her children. Separated from them during the horrors of slavery, she embarks on a journey filled with danger and heartbreak. Along the way, she encounters injustice but remains determined. The novel explores themes of resilience, hope, and the enduring strength of love and family.",
        "price": "550",
        "image": "images/books/book2.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Bluest Eye",
        "author": "Toni Morrison",
        "about": "This powerful novel explores race, beauty, and identity in America. Set during the Great Depression, it follows Pecola Breedlove, a young African American girl who longs for blue eyes, believing they will bring her acceptance. Morrison uses evocative language to depict the trauma and prejudice Pecola faces. The novel highlights the devastating effects of systemic racism and self-perception.",
        "price": "499",
        "image": "images/books/book8.jpeg",
        "category": "fiction"
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "about": "A beloved classic of English literature, 'Pride and Prejudice' explores love, social class, and personal growth. The story follows Elizabeth Bennet, a witty and independent woman, as she navigates romance and societal expectations. Her evolving relationship with the aloof Mr. Darcy is central to the novel. Austen’s sharp social commentary and humor continue to resonate with readers today.",
        "price": "299",
        "image": "images/books/book3.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Starless Sea",
        "author": "Erin Morgenstern",
        "about": "A mysterious underground world filled with books, secret doors, and timeless stories. Zachary Ezra Rawlins discovers a strange book that leads him on a journey through a labyrinth of hidden stories, secret societies, and fate. This lyrical, dreamlike novel immerses readers in a world of forgotten legends and destiny.",
        "price": "499",
        "image": "images/books/book19.jpeg",
        "category": "fiction"
    },
    {
        "title": "Circe",
        "author": "Madeline Miller",
        "about": "A powerful retelling of the myth of Circe, the enchantress from Greek mythology. Born to the god Helios, Circe discovers her own path, defying expectations and embracing her independence. The novel follows her journey from isolation to empowerment, exploring themes of power, identity, and transformation. With lyrical prose, Miller brings mythology to life in a deeply human way.",
        "price": "499",
        "image": "images/books/book20.jpg",
        "category": "fiction"
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "about": "A gothic romance following the journey of Jane Eyre, an orphan with a strong will and a desire for independence. Raised in hardship, she finds employment at Thornfield Hall, where she falls for the brooding Mr. Rochester. However, dark secrets threaten their happiness. The novel explores themes of love, morality, and self-respect in a deeply emotional narrative.",
        "price": "499",
        "image": "images/books/book21.jpeg",
        "category": "fiction"
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "about": "One of the most important works in Western literature, 'The Divine Comedy' is an epic poem that tells the journey of the soul through three realms: Hell, Purgatory, and Paradise. The protagonist, Dante, is guided by the Roman poet Virgil through the terrifying and morally complex landscape of Hell, where souls are punished for their sins. In Purgatory, Dante learns about redemption and the purification of the soul, while in Paradise, he experiences the divine presence of God. Through this allegorical journey, Dante explores themes of sin, virtue, and the ultimate quest for salvation. The work is a profound meditation on the human condition and the eternal struggle between good and evil.",
        "price": "799",
        "image": "images/books/book17.jpg",
        "category": "fiction"
    },
    {
        "title": "Autocracy, Inc.",
        "author": "Anna D. Bostwick",
        "about": "In this in-depth exploration, the author examines the inner workings of autocratic regimes and their far-reaching impact on societies and economies. Drawing on historical examples and modern case studies, the book provides a detailed analysis of how autocracies rise, consolidate power, and maintain control. It explores the mechanisms of propaganda, surveillance, and political repression, offering a critical look at the ways in which authoritarian leaders manipulate public opinion and suppress dissent. The book also delves into the economic consequences of living under such regimes, shedding light on the challenges faced by ordinary citizens and the broader global implications of autocratic governance.",
        "price": "799",
        "image": "images/books/book6.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "The New Map",
        "author": "Daniel Yergin",
        "about": "This comprehensive exploration of the global energy landscape examines the shifting dynamics of power, resources, and geopolitics in the modern world. As countries vie for control over energy sources and technologies, the book provides insight into how these forces are reshaping international relations. The author takes readers through the history of energy production, from oil to renewable sources, and how these changes are influencing global politics. It also looks at the role of emerging technologies and the rise of new economic players in the energy sector. The book highlights the intricate connections between energy, security, and the future of the planet, offering a thorough understanding of the energy landscape.",
        "price": "850",
        "image": "images/books/book7.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "The Book of Delights",
        "author": "Ross Gay",
        "about": "A collection of lyrical essays celebrating the small joys in life. Each essay reflects on everyday experiences, finding beauty and meaning in simple moments. Through his observations, Gay offers a fresh perspective on gratitude, mindfulness, and the power of delight in shaping our lives. A deeply personal and uplifting read that inspires appreciation for the little things.",
        "price": "499",
        "image": "images/books/book22.jpg",
        "category": "nonfiction"
      },
      {
        "title": "The Soul of an Octopus",
        "author": "Sy Montgomery",
        "about": "A fascinating journey into the intelligence and mystery of octopuses. Montgomery explores the emotional and cognitive depth of these extraordinary creatures, sharing personal encounters and scientific discoveries. Through her experiences, she challenges traditional notions of animal intelligence and consciousness, revealing the surprising ways octopuses interact with humans.",
        "price": "599",
        "image": "images/books/book23.jpg",
        "category": "nonfiction"
      },
      {
        "title": "Entangled Life",
        "author": "Merlin Sheldrake",
        "about": "A deep dive into the world of fungi and their influence on our planet. Sheldrake explores the intricate networks that fungi create, from underground mycelial webs to symbiotic relationships with plants. The book reveals how fungi shape ecosystems, drive evolution, and challenge our understanding of life itself, blending science with philosophical insights.",
        "price": "699",
        "image": "images/books/book24.jpg",
        "category": "nonfiction"
      },
      {
        "title": "Atlas of the Heart",
        "author": "Brené Brown",
        "about": "An exploration of human emotions and meaningful connections. Brown maps out the vast landscape of human emotions, providing language and tools to better understand ourselves and our relationships. Through research and storytelling, she offers insights into vulnerability, courage, and the ways we can cultivate deeper emotional connections with those around us.",
        "price": "799",
        "image": "images/books/book25.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "Autocracy, Inc.",
        "author": "Anna D. Bostwick",
        "about": "In this in-depth exploration, the author examines the inner workings of autocratic regimes and their far-reaching impact on societies and economies. Drawing on historical examples and modern case studies, the book provides a detailed analysis of how autocracies rise, consolidate power, and maintain control. It explores the mechanisms of propaganda, surveillance, and political repression, offering a critical look at the ways in which authoritarian leaders manipulate public opinion and suppress dissent. The book also delves into the economic consequences of living under such regimes, shedding light on the challenges faced by ordinary citizens and the broader global implications of autocratic governance.",
        "price": "799",
        "image": "images/books/book6.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "The New Map",
        "author": "Daniel Yergin",
        "about": "This comprehensive exploration of the global energy landscape examines the shifting dynamics of power, resources, and geopolitics in the modern world. As countries vie for control over energy sources and technologies, the book provides insight into how these forces are reshaping international relations. The author takes readers through the history of energy production, from oil to renewable sources, and how these changes are influencing global politics. It also looks at the role of emerging technologies and the rise of new economic players in the energy sector. The book highlights the intricate connections between energy, security, and the future of the planet, offering a thorough understanding of the energy landscape.",
        "price": "850",
        "image": "images/books/book7.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "The Book of Delights",
        "author": "Ross Gay",
        "about": "A collection of lyrical essays celebrating the small joys in life. Each essay reflects on everyday experiences, finding beauty and meaning in simple moments. Through his observations, Gay offers a fresh perspective on gratitude, mindfulness, and the power of delight in shaping our lives. A deeply personal and uplifting read that inspires appreciation for the little things.",
        "price": "499",
        "image": "images/books/book22.jpg",
        "category": "nonfiction"
      },
      {
        "title": "The Soul of an Octopus",
        "author": "Sy Montgomery",
        "about": "A fascinating journey into the intelligence and mystery of octopuses. Montgomery explores the emotional and cognitive depth of these extraordinary creatures, sharing personal encounters and scientific discoveries. Through her experiences, she challenges traditional notions of animal intelligence and consciousness, revealing the surprising ways octopuses interact with humans.",
        "price": "599",
        "image": "images/books/book23.jpg",
        "category": "nonfiction"
      },
      {
        "title": "Entangled Life",
        "author": "Merlin Sheldrake",
        "about": "A deep dive into the world of fungi and their influence on our planet. Sheldrake explores the intricate networks that fungi create, from underground mycelial webs to symbiotic relationships with plants. The book reveals how fungi shape ecosystems, drive evolution, and challenge our understanding of life itself, blending science with philosophical insights.",
        "price": "699",
        "image": "images/books/book24.jpg",
        "category": "nonfiction"
      },
      {
        "title": "Atlas of the Heart",
        "author": "Brené Brown",
        "about": "An exploration of human emotions and meaningful connections. Brown maps out the vast landscape of human emotions, providing language and tools to better understand ourselves and our relationships. Through research and storytelling, she offers insights into vulnerability, courage, and the ways we can cultivate deeper emotional connections with those around us.",
        "price": "799",
        "image": "images/books/book25.jpeg",
        "category": "nonfiction"
      },
      {
        "title": "City of Orange",
        "author": "David Yoon",
        "about": "In a world shattered by catastrophe, a man wakes up in a desert city with no memory of his past. As he struggles to piece together the fragments of his life, he discovers a world of survival, loss, and hope. The novel takes place in a post-apocalyptic landscape, where humanity is trying to rebuild and adapt to a new way of life. Through the protagonist's journey, the book explores the fragility of memory and the ways in which individuals cope with trauma. It's a meditation on what it means to survive, to remember, and to hope for a future in a broken world.",
        "price": "699",
        "image": "images/books/book4.jpeg",
        "category": "science"
      },
      {
        "title": "The Brilliant Abyss",
        "author": "Helen Scales",
        "about": "A captivating look at the wonders of the deep sea and its creatures. The book dives into the mysterious depths of the ocean, revealing an unknown world filled with bizarre and fascinating life forms. It also discusses the critical role oceans play in Earth's climate and ecology, making it an eye-opening read for nature lovers and environmentalists.",
        "price": "649",
        "image": "images/books/book29.jpeg",
        "category": "science"
      },
      {
        "title": "The Otherwhere Post",
        "author": "John C. Hall",
        "about": "This science fiction novel takes readers on an exhilarating journey through alternate realities. The protagonist, a seemingly ordinary person, is suddenly thrust into a world where multiple versions of themselves exist, each facing different challenges and dilemmas. As they navigate these realities, the character uncovers the truth about the nature of existence, identity, and the delicate balance between fate and free will. The novel explores complex themes such as the consequences of choices, the meaning of self, and the interconnectedness of all things. It's a mind-bending exploration of the multiverse and the infinite possibilities that lie beyond our perception.",
        "price": "399",
        "image": "images/books/book5.jpeg",
        "category": "science"
      },
      {
        "title": "The Order of Time",
        "author": "Carlo Rovelli",
        "about": "A mind-bending exploration of time and its mysteries in physics. Rovelli challenges conventional notions of time, weaving together concepts from quantum physics, thermodynamics, and relativity. The book is both a scientific and philosophical journey, making complex ideas accessible to a general audience while questioning the very fabric of our reality.",
        "price": "599",
        "image": "images/books/book26.jpg",
        "category": "science"
      },
      {
        "title": "Otherlands: A Journey Through Earth's Extinct Worlds",
        "author": "Thomas Halliday",
        "about": "A mesmerizing journey into prehistoric landscapes and lost worlds. Through vivid storytelling and cutting-edge science, Halliday transports readers to various epochs of Earth's history, revealing the incredible biodiversity of the past. The book connects ancient extinction events to modern environmental issues, offering profound insights into the planet's future.",
        "price": "699",
        "image": "images/books/book27.jpeg",
        "category": "science"
      },
      {
        "title": "The Hidden Reality",
        "author": "Brian Greene",
        "about": "An intriguing dive into parallel universes and the multiverse theory. Greene explores the possibility that our universe is just one of many, drawing from quantum mechanics and string theory. The book presents cutting-edge scientific theories in an engaging and thought-provoking manner, making it a must-read for those fascinated by the mysteries of the cosmos.",
        "price": "799",
        "image": "images/books/book28.jpeg",
        "category": "science"
      },
      {
        "title": "City of Orange",
        "author": "David Yoon",
        "about": "In a world shattered by catastrophe, a man wakes up in a desert city with no memory of his past. As he struggles to piece together the fragments of his life, he discovers a world of survival, loss, and hope. The novel takes place in a post-apocalyptic landscape, where humanity is trying to rebuild and adapt to a new way of life. Through the protagonist's journey, the book explores the fragility of memory and the ways in which individuals cope with trauma. It's a meditation on what it means to survive, to remember, and to hope for a future in a broken world.",
        "price": "699",
        "image": "images/books/book4.jpeg",
        "category": "science"
      },
      {
        "title": "The Brilliant Abyss",
        "author": "Helen Scales",
        "about": "A captivating look at the wonders of the deep sea and its creatures. The book dives into the mysterious depths of the ocean, revealing an unknown world filled with bizarre and fascinating life forms. It also discusses the critical role oceans play in Earth's climate and ecology, making it an eye-opening read for nature lovers and environmentalists.",
        "price": "649",
        "image": "images/books/book29.jpeg",
        "category": "science"
      },
      {
        "title": "The Otherwhere Post",
        "author": "John C. Hall",
        "about": "This science fiction novel takes readers on an exhilarating journey through alternate realities. The protagonist, a seemingly ordinary person, is suddenly thrust into a world where multiple versions of themselves exist, each facing different challenges and dilemmas. As they navigate these realities, the character uncovers the truth about the nature of existence, identity, and the delicate balance between fate and free will. The novel explores complex themes such as the consequences of choices, the meaning of self, and the interconnectedness of all things. It's a mind-bending exploration of the multiverse and the infinite possibilities that lie beyond our perception.",
        "price": "399",
        "image": "images/books/book5.jpeg",
        "category": "science"
      },
      {
        "title": "The Order of Time",
        "author": "Carlo Rovelli",
        "about": "A mind-bending exploration of time and its mysteries in physics. Rovelli challenges conventional notions of time, weaving together concepts from quantum physics, thermodynamics, and relativity. The book is both a scientific and philosophical journey, making complex ideas accessible to a general audience while questioning the very fabric of our reality.",
        "price": "599",
        "image": "images/books/book26.jpg",
        "category": "science"
      },
      {
        "title": "Otherlands: A Journey Through Earth's Extinct Worlds",
        "author": "Thomas Halliday",
        "about": "A mesmerizing journey into prehistoric landscapes and lost worlds. Through vivid storytelling and cutting-edge science, Halliday transports readers to various epochs of Earth's history, revealing the incredible biodiversity of the past. The book connects ancient extinction events to modern environmental issues, offering profound insights into the planet's future.",
        "price": "699",
        "image": "images/books/book27.jpeg",
        "category": "science"
      },
      {
        "title": "The Hidden Reality",
        "author": "Brian Greene",
        "about": "An intriguing dive into parallel universes and the multiverse theory. Greene explores the possibility that our universe is just one of many, drawing from quantum mechanics and string theory. The book presents cutting-edge scientific theories in an engaging and thought-provoking manner, making it a must-read for those fascinated by the mysteries of the cosmos.",
        "price": "799",
        "image": "images/books/book28.jpeg",
        "category": "science"
      },
      {
        "title": "Psycho",
        "author": "Robert Bloch",
        "about": "A classic psychological thriller that delves deep into the disturbed mind of Norman Bates, a seemingly mild-mannered man who runs a small motel. When a young woman, Marion Crane, steals a large sum of money and checks into Bates' motel, she disappears without a trace. As a detective and Marion's sister search for her, the dark secrets of Bates' past are slowly revealed. The story explores themes of identity, obsession, and the chilling effects of mental illness. It remains one of the most influential horror novels, setting the stage for future psychological thrillers and horror films.",
        "price": "350",
        "image": "images/books/book12.jpg",
        "category": "horror"
      },
      {
        "title": "Jaws",
        "author": "Peter Benchley",
        "about": "Set on the fictional island of Amity, 'Jaws' tells the chilling story of a giant great white shark that terrorizes a small beach town. As the shark kills several residents and tourists, the local police chief, a marine biologist, and a grizzled fisherman band together to hunt down the creature. The novel explores the fear and paranoia that grip the community, as well as the dangers of human hubris and the natural world's power. Benchley's vivid descriptions and tense narrative create an atmosphere of suspense and horror, making 'Jaws' a landmark in both thriller and horror fiction. The novel delves into themes of courage, community, and the primal fear of the unknown.",
        "price": "499",
        "image": "images/books/book15.jpg",
        "category": "horror"
      },
      {
        "title": "Mexican Gothic",
        "author": "Silvia Moreno-Garcia",
        "about": "A chilling gothic horror novel set in a mysterious, decaying mansion in Mexico. The protagonist, a young socialite, is drawn into a dark and twisted mystery as she unravels the eerie history of the house. With elements of psychological horror, folklore, and haunting imagery, the novel explores themes of power, oppression, and resilience.",
        "price": "599",
        "image": "images/books/book30.jpeg",
        "category": "horror"
      },
      {
        "title": "The Only Good Indians",
        "author": "Stephen Graham Jones",
        "about": "A haunting tale of supernatural revenge and cultural identity. Four Native American men are stalked by a vengeful spirit from their past, leading them into a terrifying cycle of guilt and retribution. The novel blends horror with social commentary, examining the consequences of past actions and the struggle between tradition and modern life.",
        "price": "649",
        "image": "images/books/book31.jpeg",
        "category": "horror"
      },
      {
        "title": "House of Leaves",
        "author": "Mark Z. Danielewski",
        "about": "A mind-bending, terrifying exploration of a house that defies reality. Through multiple narratives and unconventional formatting, the book immerses readers in an eerie and unsettling experience. As a family moves into a seemingly ordinary home, they discover its impossible dimensions and the sinister presence lurking within. This postmodern horror novel redefines the genre with its unique storytelling techniques.",
        "price": "799",
        "image": "images/books/book32.jpeg",
        "category": "horror"
      },
      {
        "title": "The Silent Companions",
        "author": "Laura Purcell",
        "about": "A gothic ghost story filled with eerie dolls and unsettling mysteries. When a newly widowed woman moves into her late husband's estate, she discovers life-sized wooden figures that seem to move on their own. As supernatural occurrences intensify, she must confront the dark secrets of the house’s past. A chilling tale of isolation, fear, and the supernatural.",
        "price": "549",
        "image": "images/books/book33.jpeg",
        "category": "horror"
      },
      {
        "title": "Psycho",
        "author": "Robert Bloch",
        "about": "A classic psychological thriller that delves deep into the disturbed mind of Norman Bates, a seemingly mild-mannered man who runs a small motel. When a young woman, Marion Crane, steals a large sum of money and checks into Bates' motel, she disappears without a trace. As a detective and Marion's sister search for her, the dark secrets of Bates' past are slowly revealed. The story explores themes of identity, obsession, and the chilling effects of mental illness. It remains one of the most influential horror novels, setting the stage for future psychological thrillers and horror films.",
        "price": "350",
        "image": "images/books/book12.jpg",
        "category": "horror"
      },
      {
        "title": "Jaws",
        "author": "Peter Benchley",
        "about": "Set on the fictional island of Amity, 'Jaws' tells the chilling story of a giant great white shark that terrorizes a small beach town. As the shark kills several residents and tourists, the local police chief, a marine biologist, and a grizzled fisherman band together to hunt down the creature. The novel explores the fear and paranoia that grip the community, as well as the dangers of human hubris and the natural world's power. Benchley's vivid descriptions and tense narrative create an atmosphere of suspense and horror, making 'Jaws' a landmark in both thriller and horror fiction. The novel delves into themes of courage, community, and the primal fear of the unknown.",
        "price": "499",
        "image": "images/books/book15.jpg",
        "category": "horror"
      },
      {
        "title": "Mexican Gothic",
        "author": "Silvia Moreno-Garcia",
        "about": "A chilling gothic horror novel set in a mysterious, decaying mansion in Mexico. The protagonist, a young socialite, is drawn into a dark and twisted mystery as she unravels the eerie history of the house. With elements of psychological horror, folklore, and haunting imagery, the novel explores themes of power, oppression, and resilience.",
        "price": "599",
        "image": "images/books/book30.jpeg",
        "category": "horror"
      },
      {
        "title": "The Only Good Indians",
        "author": "Stephen Graham Jones",
        "about": "A haunting tale of supernatural revenge and cultural identity. Four Native American men are stalked by a vengeful spirit from their past, leading them into a terrifying cycle of guilt and retribution. The novel blends horror with social commentary, examining the consequences of past actions and the struggle between tradition and modern life.",
        "price": "649",
        "image": "images/books/book31.jpeg",
        "category": "horror"
      },
      {
        "title": "House of Leaves",
        "author": "Mark Z. Danielewski",
        "about": "A mind-bending, terrifying exploration of a house that defies reality. Through multiple narratives and unconventional formatting, the book immerses readers in an eerie and unsettling experience. As a family moves into a seemingly ordinary home, they discover its impossible dimensions and the sinister presence lurking within. This postmodern horror novel redefines the genre with its unique storytelling techniques.",
        "price": "799",
        "image": "images/books/book32.jpeg",
        "category": "horror"
      },
      {
        "title": "The Silent Companions",
        "author": "Laura Purcell",
        "about": "A gothic ghost story filled with eerie dolls and unsettling mysteries. When a newly widowed woman moves into her late husband's estate, she discovers life-sized wooden figures that seem to move on their own. As supernatural occurrences intensify, she must confront the dark secrets of the house’s past. A chilling tale of isolation, fear, and the supernatural.",
        "price": "549",
        "image": "images/books/book33.jpeg",
        "category": "horror"
      },
      {
        "title": "Fantastic Beasts",
        "author": "J.K. Rowling",
        "about": "Set in the magical world of wizards, this story follows Newt Scamander, a magizoologist who embarks on a thrilling adventure. As Newt travels the globe, he encounters various magical creatures and uncovers dark secrets hidden within the wizarding world. Along the way, he faces numerous challenges and allies, ultimately playing a key role in shaping the future of magic. The book explores themes of acceptance, responsibility, and the struggle between good and evil. It introduces a new generation to the rich lore of the Wizarding World, with deep connections to familiar characters and places.",
        "price": "599",
        "image": "images/books/book18.jpg",
        "category": "fantasy"
      },
      {
        "title": "His Majesty's Dragon",
        "author": "Naomi Novik",
        "about": "In this historical fantasy novel, the Napoleonic Wars take a magical turn when Captain William Laurence of the British Navy discovers a dragon egg. The egg hatches, and Laurence is thrust into an entirely new world, where dragons are used as military assets. He is assigned to train and command the dragon Temeraire, and together, they navigate the complexities of war, loyalty, and friendship. As the two face enemies both on the battlefield and within their own ranks, Laurence and Temeraire develop a deep bond that transcends human and animal. The novel explores themes of duty, honor, and the unexpected alliances formed in times of war.",
        "price": "599",
        "image": "images/books/book11.jpeg",
        "category": "fantasy"
      },
      {
        "title": "The Maiden",
        "author": "J.R. Towns",
        "about": "In this epic fantasy novel, a young woman embarks on a dangerous journey to save her kingdom from a dark and powerful curse. The Maiden, the chosen one, is tasked with overcoming numerous trials and adversaries as she searches for a way to break the curse that threatens to destroy everything she holds dear. Along the way, she forms alliances with unlikely companions, including a wise mentor and a group of rebels fighting for justice. The story is filled with magic, intrigue, and political machinations as the heroine learns about her true destiny and the sacrifices required to save her people. Themes of courage, self-discovery, and sacrifice resonate throughout the novel.",
        "price": "399",
        "image": "images/books/book14.jpg",
        "category": "fantasy"
      },
      {
        "title": "Get in Trouble",
        "author": "Kelly Link",
        "about": "A collection of short stories that blur the lines between fantasy, horror, and magical realism, 'Get in Trouble' features a wide array of strange and captivating tales. The stories explore themes of loss, desire, and the supernatural, often with a darkly humorous twist. Link’s unique voice combines elements of the surreal with the everyday, creating worlds where the ordinary becomes extraordinary. From a woman who can control time to a girl who befriends a ghost, each story challenges readers' perceptions of reality and the possibilities of the unknown. The collection is a fascinating exploration of the strange and the mysterious, with a strong focus on human emotions and relationships.",
        "price": "550",
        "image": "images/books/book16.jpg",
        "category": "fantasy"
      },
      {
        "title": "Fantastic Beasts",
        "author": "J.K. Rowling",
        "about": "Set in the magical world of wizards, this story follows Newt Scamander, a magizoologist who embarks on a thrilling adventure. As Newt travels the globe, he encounters various magical creatures and uncovers dark secrets hidden within the wizarding world. Along the way, he faces numerous challenges and allies, ultimately playing a key role in shaping the future of magic. The book explores themes of acceptance, responsibility, and the struggle between good and evil. It introduces a new generation to the rich lore of the Wizarding World, with deep connections to familiar characters and places.",
        "price": "599",
        "image": "images/books/book18.jpg",
        "category": "fantasy"
      },
      {
        "title": "His Majesty's Dragon",
        "author": "Naomi Novik",
        "about": "In this historical fantasy novel, the Napoleonic Wars take a magical turn when Captain William Laurence of the British Navy discovers a dragon egg. The egg hatches, and Laurence is thrust into an entirely new world, where dragons are used as military assets. He is assigned to train and command the dragon Temeraire, and together, they navigate the complexities of war, loyalty, and friendship. As the two face enemies both on the battlefield and within their own ranks, Laurence and Temeraire develop a deep bond that transcends human and animal. The novel explores themes of duty, honor, and the unexpected alliances formed in times of war.",
        "price": "599",
        "image": "images/books/book11.jpeg",
        "category": "fantasy"
      },
      {
        "title": "The Maiden",
        "author": "J.R. Towns",
        "about": "In this epic fantasy novel, a young woman embarks on a dangerous journey to save her kingdom from a dark and powerful curse. The Maiden, the chosen one, is tasked with overcoming numerous trials and adversaries as she searches for a way to break the curse that threatens to destroy everything she holds dear. Along the way, she forms alliances with unlikely companions, including a wise mentor and a group of rebels fighting for justice. The story is filled with magic, intrigue, and political machinations as the heroine learns about her true destiny and the sacrifices required to save her people. Themes of courage, self-discovery, and sacrifice resonate throughout the novel.",
        "price": "399",
        "image": "images/books/book14.jpg",
        "category": "fantasy"
      },
      {
        "title": "Get in Trouble",
        "author": "Kelly Link",
        "about": "A collection of short stories that blur the lines between fantasy, horror, and magical realism, 'Get in Trouble' features a wide array of strange and captivating tales. The stories explore themes of loss, desire, and the supernatural, often with a darkly humorous twist. Link’s unique voice combines elements of the surreal with the everyday, creating worlds where the ordinary becomes extraordinary. From a woman who can control time to a girl who befriends a ghost, each story challenges readers' perceptions of reality and the possibilities of the unknown. The collection is a fascinating exploration of the strange and the mysterious, with a strong focus on human emotions and relationships.",
        "price": "550",
        "image": "images/books/book16.jpg",
        "category": "fantasy"
      },
];