// This file will hold all the chapter data for the application.
// For now, it only contains Chapter 1. As you create more chapters,
// you will add their data objects to this array.

export const allChaptersData = [
  // Chapter 1 Data
  {
    chapter: 1,
    title: "Arjuna Viṣāda Yoga",
    english_title: "Arjuna's Despondency",
    verses: [
      {
      id: "1.1",
      sanskrit: "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||",
      hindi: "धृतराष्ट्र ने पूछा - हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे तथा पाण्डु के पुत्रों ने क्या किया?",
      english: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?"
    },
    {
      id: "1.2",
      sanskrit: "सञ्जय उवाच |\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||१-२||",
      hindi: "संजय ने कहा - हे राजन्! पाण्डुपुत्रों द्वारा सेना की व्यूहरचना देखकर राजा दुर्योधन अपने गुरु के पास गया और उसने ये शब्द कहे।",
      english: "Sanjaya said: On seeing the Pandava army arranged in military formation, King Duryodhana went to his teacher (Drona) and spoke these words."
    },
    {
      id: "1.3",
      sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||१-३||",
      hindi: "हे आचार्य! पाण्डुपुत्रों की विशाल सेना को देखें, जिसे आपके बुद्धिमान् शिष्य द्रुपद के पुत्र ने इतने कौशल से व्यूह में रचा है।",
      english: "O my teacher, behold the great army of the sons of Pandu, so expertly arranged by your intelligent disciple, the son of Drupada."
    },
    {
      id: "1.4",
      sanskrit: "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि |\nयुयुधानो विराटश्च द्रुपदश्च महारथः ||१-४||",
      hindi: "इस सेना में भीम तथा अर्जुन के समान युद्ध करने वाले अनेक वीर धनुर्धर हैं तथा युयुधान, विराट तथा द्रुपद जैसे महारथी भी हैं।",
      english: "Here in this army are many heroic bowmen equal in fighting to Bhima and Arjuna: great fighters like Yuyudhana, Virata and Drupada."
    },
    {
      id: "1.5",
      sanskrit: "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् |\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः ||१-५||",
      hindi: "इनके साथ ही धृष्टकेतु, चेकितान, काशिराज, पुरुजित, कुन्तिभोज तथा शैब्य जैसे अत्यंत शक्तिशाली योद्धा भी हैं।",
      english: "There are also great heroic, powerful warriors such as Dhrishtaketu, Cekitana, Kasiraja, Purujit, Kuntibhoja and Saibya."
    },
    {
      id: "1.6",
      sanskrit: "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् |\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ||१-६||",
      hindi: "पराक्रमी युधामन्यु, अत्यंत शक्तिशाली उत्तमौजा, सुभद्रा का पुत्र तथा द्रौपदी के पुत्र भी हैं। ये सभी महारथी हैं।",
      english: "There are the mighty Yudhamanyu, the very powerful Uttamauja, the son of Subhadra and the sons of Draupadi. All these warriors are great chariot fighters."
    },
    {
      id: "1.7",
      sanskrit: "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम |\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ||१-७||",
      hindi: "किन्तु हे ब्राह्मणश्रेष्ठ! आपकी सूचना के लिए मैं अपनी सेना के उन नायकों के विषय में बताना चाहूँगा जो मेरी सेना का संचालन करने में विशेष रूप से निपुण हैं।",
      english: "But for your information, O best of the brahmanas, let me tell you about the captains who are especially qualified to lead my military force."
    },
    {
      id: "1.8",
      sanskrit: "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः |\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ||१-८||",
      hindi: "मेरी सेना में स्वयं आप, भीष्म, कर्ण, कृपाचार्य, अश्वत्थामा, विकर्ण तथा सोमदत्त का पुत्र भूरिश्रवा आदि हैं, जो युद्ध में सदैव विजयी रहे हैं।",
      english: "There are personalities like you, Bhishma, Karna, Kripa, Asvatthama, Vikarna and the son of Somadatta called Bhurisrava, who are always victorious in battle."
    },
    {
      id: "1.9",
      sanskrit: "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः |\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ||१-९||",
      hindi: "ऐसे अन्य अनेक वीर भी हैं जो मेरे लिए अपना जीवन त्याग करने के लिए उद्यत हैं। वे विविध प्रकार के हथियारों से सुसज्जित हैं और युद्ध-विद्या में निपुण हैं।",
      english: "There are many other heroes who are prepared to lay down their lives for my sake. All of them are well equipped with different kinds of weapons, and all are experienced in military science."
    },
    {
      id: "1.10",
      sanskrit: "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् |\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ||१-१०||",
      hindi: "हमारी शक्ति अपरिमेय है और हम सब पितामह भीष्म द्वारा भलीभाँति संरक्षित हैं, जबकि पाण्डवों की शक्ति भीम द्वारा भलीभाँति संरक्षित होकर भी सीमित है।",
      english: "Our strength is immeasurable, and we are perfectly protected by Grandfather Bhishma, whereas the strength of the Pandavas, carefully protected by Bhima, is limited."
    },
    {
      id: "1.11",
      sanskrit: "अयनेषु च सर्वेषु यथाभागमवस्थिताः |\nभीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ||१-११||",
      hindi: "अतः सैन्य-व्यूह में अपने-अपने मोर्चों पर खड़े रहकर आप सभी भीष्म पितामह को पूरी-पूरी सहायता दें।",
      english: "All of you must now give full support to Grandfather Bhishma, as you stand at your respective strategic points of entrance into the phalanx of the army."
    },
    {
      id: "1.12",
      sanskrit: "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः |\nसिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ||१-१२||",
      hindi: "तब कुरुवंश के वयोवृद्ध परम प्रतापी एवं यशस्वी पितामह भीष्म ने सिंह-गर्जना के समान उच्च स्वर से अपना शंख बजाया, जिससे दुर्योधन को हर्ष हुआ।",
      english: "Then Bhishma, the great valiant grandsire of the Kuru dynasty, the grandfather of the fighters, blew his conchshell very loudly, making a sound like the roar of a lion, giving Duryodhana joy."
    },
    {
      id: "1.13",
      sanskrit: "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः |\nसहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ||१-१३||",
      hindi: "तत्पश्चात् शंख, नगाड़े, बिगुल, तुरहियां तथा सींग सहसा एक साथ बज उठे। वह समवेत स्वर अत्यंत कोलाहलपूर्ण था।",
      english: "After that, the conchshells, drums, bugles, trumpets and horns were all suddenly sounded, and the combined sound was tumultuous."
    },
    {
      id: "1.14",
      sanskrit: "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ |\nमाधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ||१-१४||",
      hindi: "दूसरी ओर श्वेत घोड़ों द्वारा खींचे जाने वाले विशाल रथ पर आसीन कृष्ण तथा अर्जुन ने अपने-अपने दिव्य शंख बजाए।",
      english: "On the other side, both Lord Krishna and Arjuna, stationed on a great chariot drawn by white horses, sounded their transcendental conchshells."
    },
    {
      id: "1.15",
      sanskrit: "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः |\nपौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ||१-१५||",
      hindi: "भगवान् कृष्ण ने अपना पाञ्चजन्य नामक शंख बजाया; अर्जुन ने देवदत्त नामक शंख बजाया; और अतिभोजी तथा अतिमानवीय कार्य करने वाले भीम ने पौण्ड्र नामक अपना भयानक शंख बजाया।",
      english: "Lord Krishna blew His conchshell, called Pancajanya; Arjuna blew his, the Devadatta; and Bhima, the voracious eater and performer of herculean tasks, blew his terrific conchshell, called Paundra."
    },
    {
      id: "1.16-18",
      sanskrit: "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः |\nनकुलः सहदेवश्च सुघोषमणिपुष्पकौ ||\nकाश्यश्च परमेष्वासः शिखण्डी च महारथः |\nधृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः ||\nद्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते |\nसौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् ||",
      hindi: "हे राजन्! कुन्तीपुत्र राजा युधिष्ठिर ने अपना अनन्तविजय नामक शंख बजाया तथा नकुल और सहदेव ने सुघोष एवं मणिपुष्पक नामक शंख बजाए। महान धनुर्धर काशिराज, परम योद्धा शिखण्डी, धृष्टद्युम्न, विराट, अजेय सात्यकि, द्रुपद, द्रौपदी के पुत्रों तथा सुभद्रा के महाबाहु पुत्र ने अपने-अपने शंख बजाए।",
      english: "King Yudhishthira, the son of Kunti, blew his conchshell, the Anantavijaya, and Nakula and Sahadeva blew the Sughosha and Manipushpaka. That great archer the King of Kasi, the great fighter Sikhandi, Dhrishtadyumna, Virata, the unconquerable Satyaki, Drupada, the sons of Draupadi, and the others, O King, such as the mighty-armed son of Subhadra, all blew their respective conchshells."
    },
    {
      id: "1.19",
      sanskrit: "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् |\nनभश्च पृथिवीं चैव तुमुलो व्यनुनादयन् ||१-१९||",
      hindi: "इन विभिन्न शंखों की ध्वनि कोलाहलपूर्ण बन गई, जो आकाश तथा पृथ्वी को शब्दायमान करती हुई धृतराष्ट्र के पुत्रों के हृदयों को विदीर्ण करने लगी।",
      english: "The blowing of these different conchshells became uproarious. Vibrating both in the sky and on the earth, it shattered the hearts of the sons of Dhritarashtra."
    },
    {
      id: "1.20",
      sanskrit: "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः |\nप्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः |\nहृषीकेशं तदा वाक्यमिदमाह महीपते ||१-२०||",
      hindi: "हे राजन्! उस समय हनुमान से अंकित ध्वजा लगे रथ पर आसीन पाण्डुपुत्र अर्जुन अपना धनुष उठाकर तीर चलाने के लिए उद्यत हुआ। धृतराष्ट्र के पुत्रों को व्यूह में खड़ा देखकर अर्जुन ने भगवान् कृष्ण से ये वचन कहे।",
      english: "At that time Arjuna, the son of Pandu, seated in the chariot bearing the flag marked with Hanuman, took up his bow and prepared to shoot his arrows. O King, after looking at the sons of Dhritarashtra drawn in military array, Arjuna then spoke to Lord Krishna these words."
    },
    {
      id: "1.21-22",
      sanskrit: "अर्जुन उवाच |\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत |\nयावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् |\nकैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे ||",
      hindi: "अर्जुन ने कहा - हे अच्युत! कृपा करके मेरा रथ दोनों सेनाओं के बीच में ले चलें जिससे मैं यहाँ युद्ध की अभिलाषा रखने वालों को और शस्त्रों की इस महान परीक्षा में जिनसे मुझे संघर्ष करना है, उन्हें देख सकूँ।",
      english: "Arjuna said: O infallible one, please draw my chariot between the two armies so that I may see those present here, who desire to fight, and with whom I must contend in this great trial of arms."
    },
    {
      id: "1.23",
      sanskrit: "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः |\nधार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ||१-२३||",
      hindi: "मुझे उन लोगों को देखने दीजिये जो यहाँ धृतराष्ट्र के दुर्बुद्धि पुत्र (दुर्योधन) को प्रसन्न करने की इच्छा से लड़ने के लिए आये हुए हैं।",
      english: "Let me see those who have come here to fight, wishing to please the evil-minded son of Dhritarashtra."
    },
    {
      id: "1.24",
      sanskrit: "सञ्जय उवाच |\nएवमुक्तो हृषीकेशो गुडाकेशेन भारत |\nसेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ||१-२४||",
      hindi: "संजय ने कहा - हे भरतवंशी! अर्जुन द्वारा इस प्रकार सम्बोधित किये जाने पर भगवान् कृष्ण ने दोनों दलों के बीच में उस उत्तम रथ को लाकर खड़ा कर दिया।",
      english: "Sanjaya said: O descendant of Bharata, having been thus addressed by Arjuna, Lord Krishna drew up the fine chariot in the midst of the armies of both parties."
    },
    {
      id: "1.25",
      sanskrit: "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् |\nउवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ||१-२५||",
      hindi: "भीष्म, द्रोण तथा विश्वभर के अन्य समस्त राजाओं के सामने भगवान् ने कहा कि हे पार्थ! यहाँ एकत्र सारे कुरुओं को देखो।",
      english: "In the presence of Bhishma, Drona and all the other chieftains of the world, the Lord said, Just behold, Partha, all the Kurus assembled here."
    },
    {
      id: "1.26",
      sanskrit: "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् |\nआचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा |\nश्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि ||१-२६||",
      hindi: "वहाँ अर्जुन ने दोनों ही पक्षों की सेनाओं में अपने ताऊ-चाचों, पितामहों, गुरुओं, मामाओं, भाइयों, पुत्रों, पौत्रों, मित्रों, श्वशुरों तथा शुभचिन्तकों को भी देखा।",
      english: "There Arjuna could see, within the midst of the armies of both parties, his fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, friends, and also his fathers-in-law and well-wishers."
    },
    {
      id: "1.27",
      sanskrit: "तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् |\nकृपया परयाविष्टो विषीदन्निदमब्रवीत् ||१-२7||",
      hindi: "जब कुन्तीपुत्र अर्जुन ने मित्रों तथा सम्बन्धियों की इन विभिन्न श्रेणियों को देखा तो वह करुणा से अभिभूत हो गया और इस प्रकार बोला।",
      english: "When the son of Kunti, Arjuna, saw all these different grades of friends and relatives, he became overwhelmed with compassion and spoke thus."
    },
    {
      id: "1.28",
      sanskrit: "अर्जुन उवाच |\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् |\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति ||१-२८||",
      hindi: "अर्जुन ने कहा - हे कृष्ण! इस प्रकार युद्ध की इच्छा रखने वाले अपने मित्रों तथा सम्बन्धियों को अपने समक्ष उपस्थित देखकर मेरे शरीर के अंग काँप रहे हैं और मेरा मुँह सूखा जा रहा है।",
      english: "Arjuna said: My dear Krishna, seeing my friends and relatives present before me in such a fighting spirit, I feel the limbs of my body quivering and my mouth drying up."
    },
    {
      id: "1.29",
      sanskrit: "वेपथुश्च शरीरे मे रोमहर्षश्च जायते |\nगाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते ||१-२९||",
      hindi: "मेरा सारा शरीर काँप रहा है, मेरे रोंगटे खड़े हो रहे हैं, मेरा गाण्डीव धनुष मेरे हाथ से सरक रहा है और मेरी त्वचा जल रही है।",
      english: "My whole body is trembling, my hair is standing on end, my bow Gandiva is slipping from my hand, and my skin is burning."
    },
    {
      id: "1.30",
      sanskrit: "न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः |\nनिमित्तानि च पश्यामि विपरीतानि केशव ||१-३०||",
      hindi: "मैं यहाँ और अधिक खड़ा रहने में असमर्थ हूँ। मैं अपने को भूल रहा हूँ और मेरा सिर चकरा रहा है। हे कृष्ण! मुझे तो केवल अमंगल के कारण दिख रहे हैं।",
      english: "I am now unable to stand here any longer. I am forgetting myself, and my mind is reeling. I see only causes of misfortune, O Krishna, killer of the Kesi demon."
    },
    {
      id: "1.31",
      sanskrit: "न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे |\nन काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ||१-३१||",
      hindi: "हे कृष्ण! इस युद्ध में अपने ही सम्बन्धियों का वध करने से न तो मुझे कोई अच्छाई दिखती है और न ही मैं उससे किसी प्रकार के विजय, राज्य या सुख की इच्छा रखता हूँ।",
      english: "I do not see how any good can come from killing my own kinsmen in this battle, nor can I, my dear Krishna, desire any subsequent victory, kingdom, or happiness."
    },
    {
      id: "1.32-35",
      sanskrit: "किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा |\nयेषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च ||\nत इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च |\nआचार्याः पितरः पुत्रास्तथैव च पितामहाः ||\nमातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा |\nएतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन ||\nअपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते |\nनिहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन ||",
      hindi: "हे गोविन्द! हमें राज्य, सुख अथवा इस जीवन से भी क्या लाभ, क्योंकि जिन सारे लोगों के लिए हम उन्हें चाहते हैं, वे ही इस युद्धभूमि में खड़े हैं? हे मधुसूदन! जब गुरुजन, पितृगण, पुत्रगण, पितामह, मामा, श्वशुर, पौत्रगण, साले तथा अन्य सारे सम्बन्धी अपना धन एवं प्राण देने के लिए तत्पर हैं और मेरे समक्ष खड़े हैं, तो फिर मैं इन सबको क्यों मारना चाहूँगा, भले ही वे मुझे क्यों न मार डालें? हे जीवों के पालक! मैं इन सबों से लड़ने के लिए तैयार नहीं हूँ, भले ही मुझे तीनों लोकों का राज्य क्यों न मिलता हो। पृथ्वी की तो बात ही छोड़ दें। भला धृतराष्ट्र के पुत्रों को मारकर हमें कौन सी प्रसन्नता मिलेगी?",
      english: "O Govinda, of what avail to us are a kingdom, happiness or even life itself when all those for whom we may desire them are now arrayed on this battlefield? O Madhusudana, when teachers, fathers, sons, grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law and other relatives are ready to give up their lives and properties and are standing before me, why should I wish to kill them, even though they might otherwise kill me? O maintainer of all living entities, I am not prepared to fight with them even in exchange for the three worlds, let alone this earth. What pleasure will we derive from killing the sons of Dhritarashtra?"
    },
    {
      id: "1.36",
      sanskrit: "पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः |\nतस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्सबान्धवान् |\nस्वजनं हि कथं हत्वा सुखिनः स्याम माधव ||१-३६||",
      hindi: "यदि हम ऐसे आततायियों का वध करते हैं तो हम पर पाप चढ़ेगा। अतः यह उचित नहीं होगा कि हम धृतराष्ट्र के पुत्रों तथा उनके मित्रों का वध करें। हे माधव! अपने ही कुटुम्बियों को मारकर हमें क्या लाभ होगा और हम किस प्रकार सुखी हो सकते हैं?",
      english: "Sin will overcome us if we slay such aggressors. Therefore it is not proper for us to kill the sons of Dhritarashtra and our friends. What should we gain, O Krishna, husband of the goddess of fortune, and how could we be happy by killing our own kinsmen?"
    },
    {
      id: "1.37-38",
      sanskrit: "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः |\nकुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ||\nकथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् |\nकुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ||",
      hindi: "हे जनार्दन! यद्यपि लोभ से अभिभूत चित्त वाले ये लोग अपने परिवार को मारने या अपने मित्रों से द्रोह करने में कोई दोष नहीं देखते, किन्तु हम लोग, जो परिवार के विनष्ट करने में अपराध देख सकते हैं, ऐसे पापकर्मों में क्यों प्रवृत्त हों?",
      english: "O Janardana, although these men, their hearts overtaken by greed, see no fault in killing their own family or quarreling with friends, why should we, who can see the crime in destroying a family, engage in these acts of sin?"
    },
    {
      id: "1.39",
      sanskrit: "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः |\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ||१-३९||",
      hindi: "कुल का नाश होने पर सनातन कुल-परम्परा नष्ट हो जाती है और इस तरह शेष कुल भी अधर्म में प्रवृत्त हो जाता है।",
      english: "With the destruction of the dynasty, the eternal family tradition is vanquished, and thus the rest of the family becomes involved in irreligion."
    },
    {
      id: "1.40",
      sanskrit: "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः |\nस्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ||१-४०||",
      hindi: "हे कृष्ण! जब कुल में अधर्म प्रमुख हो जाता है तो कुल की स्त्रियाँ दूषित हो जाती हैं और स्त्रीत्व के पतन से हे वृष्णिवंशी! अवांछित सन्तानें उत्पन्न होती हैं।",
      english: "When irreligion is prominent in the family, O Krishna, the women of the family become polluted, and from the degradation of womanhood, O descendant of Vrishni, comes unwanted progeny."
    },
    {
      id: "1.41",
      sanskrit: "सङ्करो नरकायैव कुलघ्नानां कुलस्य च |\nपतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ||१-४१||",
      hindi: "अवांछित सन्तानों की वृद्धि से निश्चय ही परिवार के लिए तथा पारिवारिक परम्परा को विनष्ट करने वालों के लिए नारकीय जीवन उत्पन्न होता है। ऐसे पतित कुलों के पुरखे (पितर) गिर जाते हैं क्योंकि उन्हें जल तथा पिण्ड दान करने की क्रियाएँ समाप्त हो जाती हैं।",
      english: "An increase of unwanted population certainly causes hellish life both for the family and for those who destroy the family tradition. The ancestors of such corrupt families fall down, because the performances for offering them food and water are entirely stopped."
    },
    {
      id: "1.42",
      sanskrit: "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः |\nउत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ||१-४२||",
      hindi: "जो लोग कुल-परम्परा को विनष्ट करते हैं और इस तरह अवांछित सन्तानों को जन्म देते हैं, उनके दुष्कर्मों से समस्त प्रकार की सामुदायिक योजनाएँ तथा पारिवारिक कल्याण-कार्य विनष्ट हो जाते हैं।",
      english: "By the evil deeds of those who destroy the family tradition and thus give rise to unwanted children, all kinds of community projects and family welfare activities are devastated."
    },
    {
      id: "1.43",
      sanskrit: "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन |\nनरकेऽनियतं वासो भवतीत्यनुशुश्रुम ||१-४३||",
      hindi: "हे जनार्दन! मैंने गुरु-परम्परा से सुना है कि जो लोग कुल-धर्म को विनष्ट करते हैं, वे सदैव नरक में वास करते हैं।",
      english: "O Krishna, maintainer of the people, I have heard by disciplic succession that those who destroy family traditions dwell always in hell."
    },
    {
      id: "1.44",
      sanskrit: "अहो बत महत्पापं कर्तुं व्यवसिता वयम् |\nयद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ||१-४४||",
      hindi: "ओह! कितने आश्चर्य की बात है कि हम सब जघन्य पापकर्म करने के लिए उद्यत हो रहे हैं। राज्य-सुख भोगने की इच्छा से प्रेरित होकर हम अपने ही सम्बन्धियों को मारने पर तुले हैं।",
      english: "Alas, how strange it is that we are preparing to commit greatly sinful acts. Driven by the desire to enjoy royal happiness, we are intent on killing our own kinsmen."
    },
    {
      id: "1.45",
      sanskrit: "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः |\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ||१-४५||",
      hindi: "यदि शस्त्रधारी धृतराष्ट्र के पुत्र मुझे निहत्थे तथा रणभूमि में प्रतिरोध न करने वाले को मारें, तो यह मेरे लिए श्रेयस्कर होगा।",
      english: "Better for me if the sons of Dhritarashtra, weapons in hand, were to kill me unarmed and unresisting on the battlefield."
    },
    {
      id: "1.46",
      sanskrit: "सञ्जय उवाच |\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् |\nविसृज्य सशरं चापं शोकसंविग्नमानसः ||१-४६||",
      hindi: "संजय ने कहा - युद्धभूमि में इस प्रकार कह कर अर्जुन ने अपना धनुष तथा बाण एक ओर रख दिया और शोक-संतप्त चित्त से रथ के आसन पर बैठ गया।",
      english: "Sanjaya said: Arjuna, having thus spoken on the battlefield, cast aside his bow and arrows and sat down on the chariot, his mind overwhelmed with grief."
    }
    ]
  },
  {
  chapter: 2,
  title: "Sāṅkhya Yoga",
  english_title: "The Yoga of Knowledge",
  verses: [
    {
      id: "2.1",
      sanskrit: "सञ्जय उवाच |\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् |\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः ||२-१||",
      hindi: "संजय ने कहा - करुणा से अभिभूत, शोकयुक्त, अश्रुपूरित तथा व्याकुल नेत्रों वाले अर्जुन को देखकर मधुसूदन कृष्ण ने यह शब्द कहे।",
      english: "Sanjaya said: Seeing Arjuna full of compassion, his mind depressed, his eyes full of tears, Madhusudana (Krishna) spoke these words."
    },
    {
      id: "2.2",
      sanskrit: "श्रीभगवानुवाच |\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् |\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ||२-२||",
      hindi: "श्री भगवान ने कहा - हे अर्जुन! तुम्हारे मन में यह कलुष कहाँ से आया? यह उन मनुष्यों के लिए तनिक भी अनुकूल नहीं है, जो जीवन के मूल्य को जानते हों। इससे उच्च लोकों की नहीं, अपितु अपयश की प्राप्ति होती है।",
      english: "The Supreme Personality of Godhead said: My dear Arjuna, how have these impurities come upon you? They are not at all befitting a man who knows the value of life. They lead not to higher planets, but to infamy."
    },
    {
      id: "2.3",
      sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||२-३||",
      hindi: "हे पृथापुत्र! इस हीन नपुंसकता को प्राप्त मत होओ। यह तुम्हें शोभा नहीं देती। हे शत्रुओं के दमनकर्ता! हृदय की क्षुद्र दुर्बलता को त्यागकर युद्ध के लिए खड़े होओ।",
      english: "O son of Pritha, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy."
    },
    {
      id: "2.4",
      sanskrit: "अर्जुन उवाच |\nकथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन |\nइषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ||२-४||",
      hindi: "अर्जुन ने कहा - हे मधुसूदन! हे अरिसूदन! मैं युद्धभूमि में किस तरह भीष्म तथा द्रोण जैसे पूजनीय व्यक्तियों पर बाण चलाऊँगा?",
      english: "Arjuna said: O killer of enemies, O killer of Madhu, how can I counterattack with arrows in battle men like Bhishma and Drona, who are worthy of my worship?"
    },
    {
      id: "2.5",
      sanskrit: "गुरूनहत्वा हि महानुभावान् श्रेयो भोक्तुं भैक्ष्यमपीह लोके |\nहत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान् रुधिरप्रदिग्धान् ||२-५||",
      hindi: "ऐसे महापुरुषों को जो मेरे गुरु हैं, उन्हें मारकर जीने की अपेक्षा इस संसार में भीख माँगकर खाना अच्छा है। भले ही वे सांसारिक लाभ के इच्छुक हों, किन्तु हैं तो गुरुजन ही! यदि उनका वध होता है तो हमारे द्वारा जो भी भोग होगा, वह रक्त-रंजित होगा।",
      english: "It would be better to live in this world by begging than to live at the cost of the lives of great souls who are my teachers. Even though desiring worldly gain, they are superiors. If they are killed, everything we enjoy will be tainted with blood."
    },
    {
      id: "2.6",
      sanskrit: "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः |\nयानेव हत्वा न जिजीविषामस् तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ||२-६||",
      hindi: "हम यह भी नहीं जानते कि हमारे लिए क्या श्रेष्ठ है - उनको जीतना या उनके द्वारा जीते जाना। यदि हम धृतराष्ट्र के पुत्रों का वध कर देते हैं तो हमें जीवित रहने की आवश्यकता नहीं है। फिर भी वे युद्धभूमि में हमारे समक्ष खड़े हैं।",
      english: "Nor do we know which is better—conquering them or being conquered by them. If we killed the sons of Dhritarashtra, we should not care to live. Yet they are now standing before us on the battlefield."
    },
    {
      id: "2.7",
      sanskrit: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः |\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ||२-७||",
      hindi: "अब मैं अपनी कृपणता तथा दुर्बलता के कारण अपने कर्तव्य के विषय में मोहित हो गया हूँ और अपनी सारी मानसिक शान्ति खो चुका हूँ। ऐसी अवस्था में मैं आपसे पूछ रहा हूँ कि जो मेरे लिए श्रेयस्कर हो, उसे निश्चित रूप से बताएँ। अब मैं आपका शिष्य हूँ और शरणागत हूँ। कृपया मुझे उपदेश दें।",
      english: "Now I am confused about my duty and have lost all composure because of miserly weakness. In this condition I am asking You to tell me for certain what is best for me. Now I am Your disciple, and a soul surrendered unto You. Please instruct me."
    },
    {
      id: "2.8",
      sanskrit: "न हि प्रपश्यामि ममापनुद्याद् यच्छोकमुच्छोषणमिन्द्रियाणाम् |\nअवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम् ||२-८||",
      hindi: "मुझे ऐसा कोई साधन नहीं दिखता जो मेरी इन्द्रियों को सुखाने वाले इस शोक को दूर कर सके। स्वर्ग पर देवताओं के आधिपत्य की तरह इस धनधान्य-सम्पन्न सारी पृथ्वी पर निष्कंटक राज्य प्राप्त करके भी मैं इस शोक को दूर नहीं कर सकूँगा।",
      english: "I can find no means to drive away this grief which is drying up my senses. I will not be able to dispel it even if I win a prosperous, unrivaled kingdom on earth with sovereignty like the demigods in heaven."
    },
    {
      id: "2.9",
      sanskrit: "सञ्जय उवाच |\nएवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप |\nन योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ||२-९||",
      hindi: "संजय ने कहा - इस प्रकार कहने के बाद शत्रुओं का दमन करने वाला अर्जुन कृष्ण से बोला, 'हे गोविन्द! मैं युद्ध नहीं करूँगा' और चुप हो गया।",
      english: "Sanjaya said: Having spoken thus, Arjuna, chastiser of enemies, told Krishna, 'Govinda, I shall not fight,' and fell silent."
    },
    {
      id: "2.10",
      sanskrit: "तमुवाच हृषीकेशः प्रहसन्निव भारत |\nसेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः ||२-१०||",
      hindi: "हे भरतवंशी! उस समय दोनों सेनाओं के मध्य शोकमग्न अर्जुन से कृष्ण ने मानो हँसते हुए ये शब्द कहे।",
      english: "O descendant of Bharata, at that time Krishna, smiling, in the midst of both the armies, spoke the following words to the grief-stricken Arjuna."
    },
    {
      id: "2.11",
      sanskrit: "श्रीभगवानुवाच |\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||२-११||",
      hindi: "श्री भगवान ने कहा - तुम पाण्डित्यपूर्ण वचन कहते हुए उनके लिए शोक कर रहे हो जो शोक करने योग्य नहीं हैं। जो विद्वान होते हैं, वे न तो जीवित के लिए, न ही मृत के लिए शोक करते हैं।",
      english: "The Supreme Personality of Godhead said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for the dead."
    },
    {
      id: "2.12",
      sanskrit: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः |\nन चैव न भविष्यामः सर्वे वयमतः परम् ||२-१२||",
      hindi: "ऐसा कभी नहीं हुआ कि मैं न रहा हूँ या तुम न रहे हो अथवा ये समस्त राजा न रहे हों; और न ऐसा है कि भविष्य में हम सब नहीं रहेंगे।",
      english: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
    },
    {
      id: "2.13",
      sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा |\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||२-१३||",
      hindi: "जिस प्रकार शरीरधारी आत्मा इस (वर्तमान) शरीर में बाल्यावस्था से तरुणावस्था में और फिर वृद्धावस्था में निरन्तर अग्रसर होता रहता है, उसी प्रकार मृत्यु होने पर आत्मा दूसरे शरीर में चला जाता है। धीर व्यक्ति ऐसे परिवर्तन से मोह को प्राप्त नहीं होता।",
      english: "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change."
    },
    {
      id: "2.14",
      sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||२-१४||",
      hindi: "हे कुन्तीपुत्र! सुख तथा दुख का क्षणिक उदय तथा कालक्रम में उनका अन्तर्धान होना सर्दी तथा गर्मी की ऋतुओं के आने-जाने के समान है। हे भरतवंशी! वे इन्द्रिय-बोध से उत्पन्न होते हैं और मनुष्य को चाहिए कि अविचल भाव से उनको सहन करना सीखे।",
      english: "O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed."
    },
    {
      id: "2.15",
      sanskrit: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ |\nसमदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ||२-१५||",
      hindi: "हे पुरुषश्रेष्ठ (अर्जुन)! जो पुरुष सुख तथा दुख में विचलित नहीं होता और इन दोनों में समभाव रहता है, वह निश्चित रूप से मुक्ति के योग्य है।",
      english: "O best among men [Arjuna], the person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation."
    },
    {
      id: "2.16",
      sanskrit: "नासतो विद्यते भावो नाभावो विद्यते सतः |\nउभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ||२-१६||",
      hindi: "तत्त्वदर्शियों ने यह निष्कर्ष निकाला है कि असत् (भौतिक शरीर) का तो कोई चिरस्थायित्व नहीं है, किन्तु सत् (आत्मा) अपरिवर्तित रहता है। उन्होंने इन दोनों की प्रकृति के अध्ययन द्वारा यह निष्कर्ष निकाला है।",
      english: "Those who are seers of the truth have concluded that of the nonexistent [the material body] there is no endurance and of the existent [the soul] there is no change. This they have concluded by studying the nature of both."
    },
    {
      id: "2.17",
      sanskrit: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् |\nविनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ||२-१७||",
      hindi: "जो सारे शरीर में व्याप्त है, उसे ही तुम अविनाशी समझो। उस अव्यय आत्मा को नष्ट करने में कोई भी समर्थ नहीं है।",
      english: "That which pervades the entire body you should know to be indestructible. No one is able to destroy that imperishable soul."
    },
    {
      id: "2.18",
      sanskrit: "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः |\nअनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ||२-१८||",
      hindi: "अविनाशी, अपरिमेय तथा शाश्वत जीव के भौतिक शरीर का अन्त अवश्यम्भावी है। अतः हे भरतवंशी! युद्ध करो।",
      english: "The material body of the indestructible, immeasurable and eternal living entity is sure to come to an end; therefore, fight, O descendant of Bharata."
    },
    {
      id: "2.19",
      sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् |\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते ||२-१९||",
      hindi: "जो इस जीवात्मा को मारने वाला समझता है तथा जो इसे मरा हुआ समझता है, वे दोनों ही अज्ञानी हैं, क्योंकि आत्मा न तो मरता है और न मारा जाता है।",
      english: "Neither he who thinks the living entity the slayer nor he who thinks it slain is in knowledge, for the self slays not nor is slain."
    },
    {
      id: "2.20",
      sanskrit: "न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ||२-२०||",
      hindi: "आत्मा के लिए किसी भी काल में न तो जन्म है, न मृत्यु। वह न तो कभी जन्मा है, न जन्म लेता है और न जन्म लेगा। वह अजन्मा, नित्य, शाश्वत तथा पुरातन है। शरीर के मारे जाने पर वह मारा नहीं जाता।",
      english: "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval. He is not slain when the body is slain."
    },
    {
      id: "2.21",
      sanskrit: "वेदाविनाशिनं नित्यं य एनमजमव्ययम् |\nकथं स पुरुषः पार्थ कं घातयति हन्ति कम् ||२-२१||",
      hindi: "हे पार्थ! जो व्यक्ति यह जानता है कि आत्मा अविनाशी, अजन्मा, शाश्वत तथा अव्यय है, वह भला किसी को कैसे मार सकता है या मरवा सकता है?",
      english: "O Partha, how can a person who knows that the soul is indestructible, eternal, unborn and immutable kill anyone or cause anyone to kill?"
    },
    {
      id: "2.22",
      sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि |\nतथा शरीराणि विहाय जीर्णान्य् अन्यानि संयाति नवानि देही ||२-२२||",
      hindi: "जिस प्रकार मनुष्य पुराने वस्त्रों को त्याग कर नए वस्त्र धारण करता है, उसी प्रकार आत्मा पुराने तथा व्यर्थ के शरीरों को त्याग कर नवीन भौतिक शरीर धारण करता है।",
      english: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones."
    },
    {
      id: "2.23",
      sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः |\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः ||२-२३||",
      hindi: "यह आत्मा न तो शस्त्र द्वारा काटा जा सकता है, न अग्नि द्वारा जलाया जा सकता है, न जल द्वारा भिगोया जा सकता है, न ही वायु द्वारा सुखाया जा सकता है।",
      english: "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind."
    },
    {
      id: "2.24",
      sanskrit: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च |\nनित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ||२-२४||",
      hindi: "यह जीवात्मा अखंडित तथा अघुलनशील है। इसे न तो जलाया जा सकता है, न ही सुखाया जा सकता है। यह शाश्वत, सर्वव्यापी, अविकारी, स्थिर तथा सदैव एक सा रहने वाला है।",
      english: "This individual soul is unbreakable and insoluble, and can be neither burned nor dried. He is everlasting, present everywhere, unchangeable, immovable and eternally the same."
    },
    {
      id: "2.25",
      sanskrit: "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते |\nतस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ||२-२५||",
      hindi: "यह आत्मा अव्यक्त, अकल्पनीय तथा अपरिवर्तनीय कहा जाता है। यह जानकर तुम्हें शरीर के लिए शोक नहीं करना चाहिए।",
      english: "It is said that the soul is invisible, inconceivable and immutable. Knowing this, you should not grieve for the body."
    },
    {
      id: "2.26",
      sanskrit: "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् |\nतथापि त्वं महाबाहो नैवं शोचितुमर्हसि ||२-२६||",
      hindi: "किन्तु, यदि तुम यह सोचते हो कि आत्मा (अथवा जीवन के लक्षण) का जन्म सदैव होता है तथा वह सदा के लिए मर जाता है, तो भी हे महाबाहु! तुम्हारे शोक करने का कोई कारण नहीं है।",
      english: "If, however, you think that the soul [or the symptoms of life] is always born and dies forever, you still have no reason to lament, O mighty-armed."
    },
    {
      id: "2.27",
      sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च |\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ||२-२७||",
      hindi: "जिसने जन्म लिया है उसकी मृत्यु निश्चित है और मृत्यु के पश्चात् पुनर्जन्म भी निश्चित है। अतः अपने अपरिहार्य कर्तव्य-पालन में तुम्हें शोक नहीं करना चाहिए।",
      english: "One who has taken his birth is sure to die, and after death one is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament."
    },
    {
      id: "2.28",
      sanskrit: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत |\nअव्यक्तनिधनान्येव तत्र का परिदेवना ||२-२८||",
      hindi: "सारे जीव प्रारम्भ में अव्यक्त रहते हैं, मध्य अवस्था में व्यक्त होते हैं और विनष्ट होने पर पुनः अव्यक्त हो जाते हैं। अतः शोक करने की क्या आवश्यकता है?",
      english: "All created beings are unmanifest in their beginning, manifest in their interim state, and unmanifest again when annihilated. So what need is there for lamentation?"
    },
    {
      id: "2.29",
      sanskrit: "आश्चर्यवत्पश्यति कश्चिदेनम् आश्चर्यवद्वदति तथैव चान्यः |\nआश्चर्यवच्चैनमन्यः शृणोति श्रुत्वाप्येनं वेद न चैव कश्चित् ||२-२९||",
      hindi: "कोई आत्मा को आश्चर्य से देखता है, कोई इसे आश्चर्य की तरह बताता है तथा कोई इसे आश्चर्य की तरह सुनता है, किन्तु कोई-कोई इसके विषय में सुनकर भी कुछ नहीं समझ पाते।",
      english: "Some look on the soul as amazing, some describe him as amazing, and some hear of him as amazing, while others, even after hearing about him, cannot understand him at all."
    },
    {
      id: "2.30",
      sanskrit: "देही नित्यमवध्योऽयं देहे सर्वस्य भारत |\nतस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ||२-३०||",
      hindi: "हे भरतवंशी! शरीर में रहने वाले (देही) का कभी भी वध नहीं किया जा सकता। अतः तुम्हें किसी भी जीव के लिए शोक करने की आवश्यकता नहीं है।",
      english: "O descendant of Bharata, he who dwells in the body can never be slain. Therefore you need not grieve for any living being."
    },
    {
      id: "2.31",
      sanskrit: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि |\nधर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ||२-३१||",
      hindi: "क्षत्रिय होने के नाते अपने विशिष्ट धर्म का विचार करते हुए तुम्हें जानना चाहिए कि धर्म के लिए युद्ध करने से बढ़कर तुम्हारे लिए अन्य कोई कार्य नहीं है। अतः तुम्हें संकोच करने की कोई आवश्यकता नहीं है।",
      english: "Considering your specific duty as a kshatriya, you should know that there is no better engagement for you than fighting on religious principles; and so there is no need for hesitation."
    },
    {
      id: "2.32",
      sanskrit: "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् |\nसुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ||२-३२||",
      hindi: "हे पार्थ! वे क्षत्रिय सुखी हैं जिन्हें ऐसे युद्ध के अवसर अपने-आप प्राप्त होते हैं, जिससे उनके लिए स्वर्गलोक के द्वार खुल जाते हैं।",
      english: "O Partha, happy are the kshatriyas to whom such fighting opportunities come unsought, opening for them the doors of the heavenly planets."
    },
    {
      id: "2.33",
      sanskrit: "अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि |\nततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ||२-३३||",
      hindi: "किन्तु यदि तुम युद्ध करने के इस धार्मिक कर्तव्य को सम्पन्न नहीं करते हो, तो तुम्हें निश्चित रूप से अपने कर्तव्य की उपेक्षा करने का पाप लगेगा और तुम योद्धा के रूप में भी अपना यश खो दोगे।",
      english: "If, however, you do not perform your religious duty of fighting, then you will certainly incur sins for neglecting your duties and thus lose your reputation as a fighter."
    },
    {
      id: "2.34",
      sanskrit: "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् |\nसम्भावितस्य चाकीर्तिर् मरणादतिरिच्यते ||२-३४||",
      hindi: "लोग सदैव तुम्हारे अपयश का वर्णन करेंगे और सम्मानित व्यक्ति के लिए अपयश तो मृत्यु से भी बढ़कर है।",
      english: "People will always speak of your infamy, and for a respectable person, dishonor is worse than death."
    },
    {
      id: "2.35",
      sanskrit: "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः |\nयेषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ||२-३५||",
      hindi: "जिन-जिन महान योद्धाओं ने तुम्हारे नाम तथा यश को सम्मान दिया है, वे सोचेंगे कि तुमने डर के मारे युद्धभूमि छोड़ दी है और इस तरह वे तुम्हें तुच्छ मानेंगे।",
      english: "The great generals who have held your name and fame in high esteem will think that you have left the battlefield out of fear only, and thus they will consider you insignificant."
    },
    {
      id: "2.36",
      sanskrit: "अवाच्यवादांश्च बहून् वदिष्यन्ति तवाहिताः |\nनिन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम् ||२-३६||",
      hindi: "तुम्हारे शत्रु अनेक प्रकार के कटु शब्दों से तुम्हारा वर्णन करेंगे और तुम्हारी सामर्थ्य का उपहास करेंगे। तुम्हारे लिए इससे बढ़कर दुखदायी और क्या हो सकता है?",
      english: "Your enemies will describe you in many unkind words and scorn your ability. What could be more painful for you?"
    },
    {
      id: "2.37",
      sanskrit: "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् |\nतस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ||२-३७||",
      hindi: "हे कुन्तीपुत्र! तुम यदि युद्ध में मारे जाओगे तो स्वर्ग प्राप्त करोगे या यदि तुम जीत जाओगे तो पृथ्वी के साम्राज्य का भोग करोगे। अतः दृढ़ संकल्प करके खड़े होओ और युद्ध करो।",
      english: "O son of Kunti, either you will be killed on the battlefield and attain the heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, get up with determination and fight."
    },
    {
      id: "2.38",
      sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ |\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ||२-३८||",
      hindi: "तुम सुख या दुख, हानि या लाभ, विजय या पराजय का विचार किये बिना युद्ध के लिए युद्ध करो। ऐसा करने पर तुम्हें कोई पाप नहीं लगेगा।",
      english: "Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat—and by so doing you shall never incur sin."
    },
    {
      id: "2.39",
      sanskrit: "एषा तेऽभिहिता साङ्ख्ये बुद्धिर्योगे त्विमां शृणु |\nबुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ||२-३९||",
      hindi: "यहाँ मैंने तुम्हें वैश्लेषिक अध्ययन (सांख्य) द्वारा इस ज्ञान का वर्णन किया है। अब निष्काम भाव से कर्म करना (कर्म-योग) जिसे कहते हैं, उसे सुनो। हे पृथापुत्र! तुम यदि ऐसे ज्ञान से कर्म करोगे तो कर्मों के बन्धन से अपने को मुक्त कर सकते हो।",
      english: "Thus far I have described this knowledge to you through analytical study. Now listen as I explain it in terms of working without fruitive results. O son of Pritha, when you act in such knowledge you can free yourself from the bondage of works."
    },
    {
      id: "2.40",
      sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते |\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ||२-४०||",
      hindi: "इस प्रयास में न तो हानि होती है, न ही ह्रास, अपितु इस पथ पर की गई अल्प प्रगति भी महान भय से रक्षा कर सकती है।",
      english: "In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear."
    },
    {
      id: "2.41",
      sanskrit: "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन |\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ||२-४१||",
      hindi: "जो इस मार्ग पर चलते हैं, वे अपने लक्ष्य में दृढ़ रहते हैं और उनका ध्येय भी एक होता है। हे कुरुनन्दन! जो दृढ़प्रतिज्ञ नहीं हैं, उनकी बुद्धि अनेक शाखाओं में विभक्त रहती है।",
      english: "Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched."
    },
    {
      id: "2.42-43",
      sanskrit: "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः |\nवेदवादरताः पार्थ नान्यदस्तीति वादिनः ||\nकामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् |\nक्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ||",
      hindi: "अल्पज्ञानी मनुष्य वेदों के उन अलंकारिक शब्दों के प्रति अत्यधिक आसक्त रहते हैं, जो स्वर्ग की प्राप्ति, अच्छे जन्म, शक्ति इत्यादि के लिए विविध सकाम कर्म करने की संस्तुति करते हैं। इन्द्रियतृप्ति तथा ऐश्वर्यमय जीवन की अभिलाषा के कारण वे कहते हैं कि इससे बढ़कर और कुछ नहीं है।",
      english: "Men of small knowledge are very much attached to the flowery words of the Vedas, which recommend various fruitive activities for elevation to heavenly planets, resultant good birth, power, and so forth. Being desirous of sense gratification and opulent life, they say that there is nothing more than this."
    },
    {
      id: "2.44",
      sanskrit: "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् |\nव्यवसायात्मिका बुद्धिः समाधौ न विधीयते ||२-४४||",
      hindi: "जो लोग इन्द्रियभोग तथा भौतिक ऐश्वर्य के प्रति अत्यधिक आसक्त होने से ऐसी वस्तुओं से मोहग्रस्त हो जाते हैं, उनके मनों में भगवान् के प्रति भक्ति का दृढ़ निश्चय नहीं होता।",
      english: "In the minds of those who are too attached to sense enjoyment and material opulence, and who are bewildered by such things, the resolute determination for devotional service to the Supreme Lord does not take place."
    },
    {
      id: "2.45",
      sanskrit: "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन |\nनिर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ||२-४५||",
      hindi: "वेदों में मुख्यतया प्रकृति के तीनों गुणों का वर्णन हुआ है। हे अर्जुन! इन तीनों गुणों से ऊपर उठो। समस्त द्वन्द्वों और लाभ-हानि की चिन्ताओं से मुक्त होकर आत्म-परायण बनो।",
      english: "The Vedas deal mainly with the subject of the three modes of material nature. O Arjuna, become transcendental to these three modes. Be free from all dualities and from all anxieties for gain and safety, and be established in the self."
    },
    {
      id: "2.46",
      sanskrit: "यावानर्थ उदपाने सर्वतः सम्प्लुतोदके |\nतावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ||२-४६||",
      hindi: "एक छोटे से कुएँ का सारा कार्य एक विशाल जलाशय से तुरन्त पूरा हो जाता है। इसी प्रकार वेदों के प्रयोजन उस व्यक्ति के लिए पूरे हो जाते हैं जो उनके पीछे के प्रयोजन को जानता है।",
      english: "All purposes served by a small well can at once be served by a great reservoir of water. Similarly, all the purposes of the Vedas can be served to one who knows the purpose behind them."
    },
    {
      id: "2.47",
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||२-४७||",
      hindi: "तुम्हें अपना कर्म (कर्तव्य) करने का अधिकार है, किन्तु कर्म के फलों के तुम अधिकारी नहीं हो। तुम न तो कभी अपने आपको अपने कर्मों के फलों का कारण मानो, न ही कर्म न करने में कभी आसक्त होओ।",
      english: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
    },
    {
      id: "2.48",
      sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय |\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ||२-४८||",
      hindi: "हे धनञ्जय! जय तथा पराजय की समस्त आसक्ति त्यागकर समभाव से अपना कर्म करो। ऐसी समता योग कहलाती है।",
      english: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga."
    },
    {
      id: "2.49",
      sanskrit: "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय |\nबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ||२-४९||",
      hindi: "हे धनञ्जय! भक्ति के द्वारा समस्त गर्हित कर्मों से दूर रहो और उसी भाव से भगवान् की शरण ग्रहण करो। जो व्यक्ति अपने सकाम कर्मफलों को भोगना चाहते हैं, वे कृपण हैं।",
      english: "O Dhananjaya, keep all abominable activities far distant by devotional service, and in that consciousness surrender unto the Lord. Those who want to enjoy the fruits of their work are misers."
    },
    {
      id: "2.50",
      sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते |\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ||२-५०||",
      hindi: "भक्ति में संलग्न मनुष्य इस जीवन में ही अच्छे तथा बुरे कार्यों से अपने को मुक्त कर लेता है। अतः योग के लिए प्रयत्न करो, क्योंकि सारा कौशल यही है।",
      english: "A man engaged in devotional service rids himself of both good and bad actions even in this life. Therefore strive for yoga, which is the art of all work."
    },
    {
      id: "2.51",
      sanskrit: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः |\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ||२-५१||",
      hindi: "इस तरह भक्ति में लगे रहकर बड़े-बड़े ऋषि, मुनि तथा भक्तगण अपने को इस भौतिक संसार में कर्म के फलों से मुक्त कर लेते हैं। इस प्रकार वे जन्म-मृत्यु के चक्र से छूट जाते हैं और भगवान् के पास जाकर उस अवस्था को प्राप्त करते हैं, जो समस्त दुखों से परे है।",
      english: "By thus engaging in devotional service to the Lord, great sages or devotees free themselves from the results of work in the material world. In this way they become free from the cycle of birth and death and attain the state beyond all miseries [by going back to Godhead]."
    },
    {
      id: "2.52",
      sanskrit: "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति |\nतदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ||२-५२||",
      hindi: "जब तुम्हारी बुद्धि मोह रूपी सघन वन को पार कर जाएगी तो तुम सुने हुए तथा सुनने योग्य सब के प्रति अन्यमनस्क हो जाओगे।",
      english: "When your intelligence has passed out of the dense forest of delusion, you shall become indifferent to all that has been heard and all that is to be heard."
    },
    {
      id: "2.53",
      sanskrit: "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला |\nसमाधावचला बुद्धिस्तदा योगमवाप्स्यसि ||२-५३||",
      hindi: "जब तुम्हारा मन वेदों की अलंकारमयी भाषा से विचलित न हो और वह आत्म-साक्षात्कार की समाधि में स्थिर हो जाय, तब तुम्हें दिव्य चेतना प्राप्त हो जाएगी।",
      english: "When your mind is no longer disturbed by the flowery language of the Vedas, and when it remains fixed in the trance of self-realization, then you will have attained the divine consciousness."
    },
    {
      id: "2.54",
      sanskrit: "अर्जुन उवाच |\nस्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव |\nस्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ||२-५४||",
      hindi: "अर्जुन ने कहा - हे कृष्ण! अध्यात्म में लीन चेतना वाले व्यक्ति (स्थितप्रज्ञ) के क्या लक्षण हैं? वह कैसे बोलता है तथा उसकी भाषा क्या है? वह किस तरह बैठता और चलता है?",
      english: "Arjuna said: O Krishna, what are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?"
    },
    {
      id: "2.55",
      sanskrit: "श्रीभगवानुवाच |\nप्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् |\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ||२-५५||",
      hindi: "श्री भगवान ने कहा - हे पार्थ! जब मनुष्य मनोधर्म से उत्पन्न होने वाली इन्द्रियतृप्ति की समस्त कामनाओं का परित्याग कर देता है और जब इस तरह से विशुद्ध हुआ उसका मन आत्मा में ही सन्तोष प्राप्त करता है, तो वह विशुद्ध दिव्य चेतना को प्राप्त (स्थितप्रज्ञ) कहा जाता है।",
      english: "The Supreme Personality of Godhead said: O Partha, when a man gives up all varieties of desire for sense gratification, which arise from mental concoction, and when his mind, thus purified, finds satisfaction in the self alone, then he is said to be in pure transcendental consciousness."
    },
    {
      id: "2.56",
      sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः |\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ||२-५६||",
      hindi: "जो त्रय तापों के होने पर भी मन में विचलित नहीं होता अथवा सुख में प्रसन्न नहीं होता और जो आसक्ति, भय तथा क्रोध से मुक्त है, वह स्थिर मन वाला मुनि कहलाता है।",
      english: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind."
    },
    {
      id: "2.57",
      sanskrit: "यः सर्वत्रानभिस्नेहस् तत् तत् प्राप्य शुभाशुभम् |\nनाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ||२-५७||",
      hindi: "इस भौतिक जगत् में जो व्यक्ति न तो शुभ की प्राप्ति से हर्षित होता है और न अशुभ के प्राप्त होने पर उससे घृणा करता है, वह पूर्ण ज्ञान में स्थिर होता है।",
      english: "In the material world, one who is unaffected by whatever good or evil he may obtain, neither praising it nor despising it, is firmly fixed in perfect knowledge."
    },
    {
      id: "2.58",
      sanskrit: "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः |\nइन्द्रियाणीन्द्रियार्थेभ्यस् तस्य प्रज्ञा प्रतिष्ठिता ||२-५८||",
      hindi: "जिस प्रकार कछुआ अपने अंगों को संकुचित करके खोल के भीतर कर लेता है, उसी तरह जो मनुष्य अपनी इन्द्रियों को इन्द्रिय विषयों से खींच लेता है, वह पूर्ण चेतना में दृढ़तापूर्वक स्थिर होता है।",
      english: "One who is able to withdraw his senses from sense objects, as the tortoise draws its limbs within the shell, is firmly fixed in perfect consciousness."
    },
    {
      id: "2.59",
      sanskrit: "विषया विनिवर्तन्ते निराहारस्य देहिनः |\nरसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ||२-५९||",
      hindi: "हो सकता है कि देहधारी जीव इन्द्रियभोग से परे रह सके, किन्तु उसमें इन्द्रियविषयों की इच्छा बनी रहती है। लेकिन उत्तम रस के अनुभव होने से ऐसे कार्यों को बन्द करने पर वह अपनी चेतना में स्थिर हो जाता है।",
      english: "The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But, ceasing such engagements by experiencing a higher taste, he is fixed in consciousness."
    },
    {
      id: "2.60",
      sanskrit: "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः |\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ||२-६०||",
      hindi: "हे अर्जुन! इन्द्रियाँ इतनी प्रबल तथा वेगवान हैं कि वे उस विवेकी पुरुष के मन को भी बलपूर्वक हर लेती हैं, जो उन्हें वश में करने का प्रयत्न करता है।",
      english: "The senses are so strong and impetuous, O Arjuna, that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them."
    },
    {
      id: "2.61",
      sanskrit: "तानि सर्वाणि संयम्य युक्त आसीत मत्परः |\nवशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ||२-६१||",
      hindi: "जो इन्द्रियों को पूर्णतया वश में रखते हुए अपनी चेतना को मुझमें स्थिर कर देता है, वह मनुष्य स्थिरबुद्धि कहलाता है।",
      english: "One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence."
    },
    {
      id: "2.62",
      sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||२-६२||",
      hindi: "इन्द्रियविषयों का चिन्तन करते हुए मनुष्य की उनमें आसक्ति उत्पन्न हो जाती है और ऐसी आसक्ति से काम उत्पन्न होता है और फिर काम से क्रोध प्रकट होता है।",
      english: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises."
    },
    {
      id: "2.63",
      sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||२-६३||",
      hindi: "क्रोध से पूर्ण मोह उत्पन्न होता है और मोह से स्मरणशक्ति का विभ्रम हो जाता है। जब स्मरणशक्ति भ्रमित हो जाती है, तो बुद्धि नष्ट हो जाती है और बुद्धि नष्ट होने पर मनुष्य भव-कूप में पुनः गिर जाता है।",
      english: "From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool."
    },
    {
      id: "2.64",
      sanskrit: "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् |\nआत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ||२-६४||",
      hindi: "किन्तु समस्त राग तथा द्वेष से मुक्त एवं अपनी इन्द्रियों को संयम द्वारा वश में करने में समर्थ व्यक्ति भगवान् की पूर्ण कृपा प्राप्त कर सकता है।",
      english: "But a person free from all attachment and aversion and able to control his senses through regulative principles of freedom can obtain the complete mercy of the Lord."
    },
    {
      id: "2.65",
      sanskrit: "प्रसादे सर्वदुःखानां हानिरस्योपजायते |\nप्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ||२-६५||",
      hindi: "इस प्रकार कृष्णभावनाभावित व्यक्ति के लिए भौतिक अस्तित्व के तीनों ताप नष्ट हो जाते हैं। ऐसी तुष्ट चेतना होने पर उसकी बुद्धि शीघ्र ही स्थिर हो जाती है।",
      english: "For one thus satisfied [in Krishna consciousness], the threefold miseries of material existence exist no longer; in such satisfied consciousness, one's intelligence is soon well established."
    },
    {
      id: "2.66",
      sanskrit: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना |\nन चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ||२-६६||",
      hindi: "जो व्यक्ति कृष्णभावना में भगवान् से सम्बन्धित नहीं है, उसकी न तो बुद्धि दिव्य होती है और न ही मन स्थिर होता है, जिसके बिना शान्ति की कोई सम्भावना नहीं है। और शान्ति के बिना सुख हो भी कैसे सकता है?",
      english: "One who is not connected with the Supreme [in Krishna consciousness] can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. And how can there be any happiness without peace?"
    },
    {
      id: "2.67",
      sanskrit: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते |\nतदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ||२-६७||",
      hindi: "जिस प्रकार पानी में तैरती नाव को प्रचण्ड वायु दूर बहा ले जाती है, उसी प्रकार विचरणशील इन्द्रियों में से कोई एक भी, जिस पर मन निरन्तर लगा रहता है, मनुष्य की बुद्धि को हर लेती है।",
      english: "As a strong wind sweeps away a boat on the water, even one of the roaming senses on which the mind focuses can carry away a man's intelligence."
    },
    {
      id: "2.68",
      sanskrit: "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः |\nइन्द्रियाणीन्द्रियार्थेभ्यस् तस्य प्रज्ञा प्रतिष्ठिता ||२-६८||",
      hindi: "अतः हे महाबाहु! जिस पुरुष की इन्द्रियाँ अपने-अपने विषयों से सब प्रकार से विरत होकर उसके वश में हैं, वही निस्सन्देह स्थिरबुद्धि है।",
      english: "Therefore, O mighty-armed, one whose senses are restrained from their objects is certainly of steady intelligence."
    },
    {
      id: "2.69",
      sanskrit: "या निशा सर्वभूतानां तस्यां जागर्ति संयमी |\nयस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ||२-६९||",
      hindi: "जो सब जीवों के लिए रात्रि है, वह आत्मसंयमी के जागने का समय है और जो समस्त जीवों के जागने का समय है, वह आत्मनिरीक्षक मुनि के लिए रात्रि है।",
      english: "What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage."
    },
    {
      id: "2.70",
      sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् |\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ||२-७०||",
      hindi: "जो पुरुष समुद्र में निरन्तर प्रवेश करती रहने वाली नदियों के समान इच्छाओं के निरन्तर प्रवाह से विचलित नहीं होता और जो सदैव स्थिर रहता है, वही शान्ति प्राप्त कर सकता है, न कि वह जो ऐसी इच्छाओं को तुष्ट करने की चेष्टा करता है।",
      english: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the man who strives to satisfy such desires."
    },
    {
      id: "2.71",
      sanskrit: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः |\nनिर्ममो निरहङ्कारः स शान्तिमधिगच्छति ||२-७१||",
      hindi: "जिस व्यक्ति ने इन्द्रियतृप्ति की समस्त इच्छाओं का परित्याग कर दिया है, जो इच्छाओं से रहित रहता है और जिसने सारी ममता त्याग दी है तथा अहंकार से रहित है, वही वास्तविक शान्ति को प्राप्त कर सकता है।",
      english: "A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego—he alone can attain real peace."
    },
    {
      id: "2.72",
      sanskrit: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति |\nस्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ||२-७२||",
      hindi: "हे पार्थ! यह आध्यात्मिक तथा ईश्वरीय जीवन का पथ है, जिसे प्राप्त करके मनुष्य मोहित नहीं होता। यदि कोई जीवन के अन्तिम समय में भी इस तरह स्थित हो, तो वह भगवद्धाम में प्रवेश कर सकता है।",
      english: "That is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of God."
    }
  ]
},
{
  chapter: 3,
  title: "Karma Yoga",
  english_title: "The Yoga of Action",
  verses: [
    {
      id: "3.1",
      sanskrit: "अर्जुन उवाच |\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन |\nतत्किं कर्मणि घोरे मां नियोजयसि केशव ||३-१||",
      hindi: "अर्जुन ने कहा - हे जनार्दन! हे केशव! यदि आप बुद्धि को सकाम कर्म से श्रेष्ठ समझते हैं तो फिर आप मुझे इस घोर युद्ध में क्यों लगाना चाहते हैं?",
      english: "Arjuna said: O Janardana, O Keshava, why do you want to engage me in this ghastly warfare, if you think that intelligence is better than fruitive work?"
    },
    {
      id: "3.2",
      sanskrit: "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे |\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ||३-२||",
      hindi: "आपके व्यामिश्रित (अनेकार्थक) उपदेशों से मेरी बुद्धि मोहित हो गई है। अतः कृपा करके निश्चयपूर्वक मुझे बताएँ कि इनमें से मेरे लिए सर्वाधिक श्रेयस्कर क्या होगा?",
      english: "My intelligence is bewildered by Your equivocal instructions. Therefore, please tell me decisively which will be most beneficial for me."
    },
    {
      id: "3.3",
      sanskrit: "श्रीभगवानुवाच |\nलोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ |\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ||३-३||",
      hindi: "श्री भगवान ने कहा - हे निष्पाप अर्जुन! मैं पहले ही बता चुका हूँ कि आत्म-साक्षात्कार का प्रयत्न करने वाले दो प्रकार के पुरुष होते हैं। कुछ इसे ज्ञानयोग द्वारा समझने का प्रयत्न करते हैं, तो कुछ भक्तियोग द्वारा।",
      english: "The Supreme Personality of Godhead said: O sinless Arjuna, I have already explained that there are two classes of men who try to realize the self. Some are inclined to understand it by empirical, philosophical speculation, and others by devotional service."
    },
    {
      id: "3.4",
      sanskrit: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते |\nन च सन्न्यसनादेव सिद्धिं समधिगच्छति ||३-४||",
      hindi: "न तो कर्म से विमुख होकर कोई कर्मफल से छुटकारा पा सकता है और न केवल संन्यास से सिद्धि प्राप्त की जा सकती है।",
      english: "Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection."
    },
    {
      id: "3.5",
      sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् |\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ||३-५||",
      hindi: "सारे मनुष्य प्रकृति के गुणों के अनुसार विवश होकर कर्म करने के लिए बाध्य हैं; अतः कोई भी एक क्षण के लिए भी बिना कर्म किए नहीं रह सकता।",
      english: "Everyone is forced to act helplessly according to the qualities he has acquired from the modes of material nature; therefore no one can refrain from doing something, not even for a moment."
    },
    {
      id: "3.6",
      sanskrit: "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् |\nइन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ||३-६||",
      hindi: "जो कर्मेन्द्रियों को तो वश में करता है, किन्तु जिसका मन इन्द्रिय विषयों का चिन्तन करता रहता है, वह निश्चित रूप से स्वयं को धोखा देता है और मिथ्याचारी कहलाता है।",
      english: "One who restrains the senses of action but whose mind dwells on sense objects certainly deludes himself and is called a pretender."
    },
    {
      id: "3.7",
      sanskrit: "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन |\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ||३-७||",
      hindi: "लेकिन जो व्यक्ति मन से इन्द्रियों को वश में करने का प्रयत्न करता है और बिना किसी आसक्ति के कर्मयोग (कृष्णभावनामृत में) प्रारम्भ करता है, वह कहीं श्रेष्ठ है।",
      english: "On the other hand, if a sincere person tries to control the active senses by the mind and begins karma-yoga [in Krishna consciousness] without attachment, he is by far superior."
    },
    {
      id: "3.8",
      sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः |\nशरीरयात्रापि च ते न प्रसिद्धयेदकर्मणः ||३-८||",
      hindi: "अपना नियत कर्म करो, क्योंकि कर्म न करने की अपेक्षा कर्म करना श्रेष्ठ है। कर्म के बिना तो शरीर-निर्वाह भी नहीं हो सकता।",
      english: "Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one's physical body without work."
    },
    {
      id: "3.9",
      sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः |\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ||३-९||",
      hindi: "भगवान् विष्णु के लिए यज्ञ के रूप में कर्म करना चाहिए, अन्यथा कर्म के द्वारा इस भौतिक जगत् में बन्धन उत्पन्न होता है। अतः हे कुन्तीपुत्र! उनकी प्रसन्नता के लिए अपने नियत कर्म करो। इस तरह तुम बन्धन से सदा मुक्त रहोगे।",
      english: "Work done as a sacrifice for Vishnu has to be performed; otherwise work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way you will always remain free from bondage."
    },
    {
      id: "3.10",
      sanskrit: "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः |\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ||३-१०||",
      hindi: "सृष्टि के प्रारम्भ में समस्त प्राणियों के स्वामी (प्रजापति) ने विष्णु के लिए यज्ञ सहित मनुष्यों तथा देवताओं की पीढ़ियों को रचा और उनसे कहा, 'तुम इस यज्ञ से सुखी रहो क्योंकि इसके करने से तुम्हें सुखपूर्वक रहने तथा मुक्ति प्राप्त करने के लिए समस्त वांछित वस्तुएँ प्राप्त हो सकेंगी।'",
      english: "In the beginning of creation, the Lord of all creatures sent forth generations of men and demigods, along with sacrifices for Vishnu, and blessed them by saying, 'Be thou happy by this yajna [sacrifice] because its performance will bestow upon you everything desirable for living happily and achieving liberation.'"
    },
    {
      id: "3.11",
      sanskrit: "देवान्भावयतानेन ते देवा भावयन्तु वः |\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ ||३-११||",
      hindi: "यज्ञों के द्वारा प्रसन्न होकर देवता तुम्हें भी प्रसन्न करेंगे और इस तरह मनुष्यों तथा देवताओं के मध्य सहयोग से सबों को सम्पन्नता प्राप्त होगी।",
      english: "The demigods, being pleased by sacrifices, will also please you, and thus, by cooperation between men and demigods, prosperity will reign for all."
    },
    {
      id: "3.12",
      sanskrit: "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः |\nतैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ||३-१२||",
      hindi: "जीवन की विभिन्न आवश्यकताओं की पूर्ति करने वाले विभिन्न देवता यज्ञ सम्पन्न होने पर प्रसन्न होकर तुम्हारी सारी आवश्यकताओं की पूर्ति करेंगे। किन्तु जो इन उपहारों को देवताओं को अर्पित किये बिना भोगता है, वह निश्चित रूप से चोर है।",
      english: "In charge of the various necessities of life, the demigods, being satisfied by the performance of yajna [sacrifice], will supply all necessities to you. But he who enjoys such gifts without offering them to the demigods in return is certainly a thief."
    },
    {
      id: "3.13",
      sanskrit: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः |\nभुञ्जते ते त्वघं पापा यः पचन्त्यात्मकारणात् ||३-१३||",
      hindi: "भगवान् के भक्त सभी प्रकार के पापों से मुक्त हो जाते हैं क्योंकि वे यज्ञ में अर्पित किये भोजन (प्रसाद) को ही खाते हैं। अन्य लोग जो अपने इन्द्रियसुख के लिए भोजन बनाते हैं, वे निश्चित रूप से पाप खाते हैं।",
      english: "The devotees of the Lord are released from all kinds of sins because they eat food which is offered first for sacrifice. Others, who prepare food for personal sense enjoyment, verily eat only sin."
    },
    {
      id: "3.14",
      sanskrit: "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः |\nयज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः ||३-१४||",
      hindi: "सारे प्राणी अन्न पर आश्रित हैं, जो वर्षा से उत्पन्न होता है। वर्षा यज्ञ सम्पन्न करने से होती है और यज्ञ नियत कर्मों से उत्पन्न होता है।",
      english: "All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajna [sacrifice], and yajna is born of prescribed duties."
    },
    {
      id: "3.15",
      sanskrit: "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् |\nतस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ||३-१५||",
      hindi: "नियत कर्मों का विधान वेदों में है और ये वेद साक्षात् श्रीभगवान् (परब्रह्म) से प्रकट हुए हैं। फलस्वरूप सर्वव्यापी ब्रह्म यज्ञ-कर्मों में सदा स्थित रहता है।",
      english: "Regulated activities are prescribed in the Vedas, and the Vedas are directly manifested from the Supreme Personality of Godhead. Consequently the all-pervading Transcendence is eternally situated in acts of sacrifice."
    },
    {
      id: "3.16",
      sanskrit: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः |\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति ||३-१६||",
      hindi: "हे अर्जुन! जो मनुष्य जीवन में इस प्रकार वेदों द्वारा स्थापित यज्ञ-चक्र का पालन नहीं करता, वह निश्चय ही पापमय जीवन व्यतीत करता है। ऐसा व्यक्ति केवल इन्द्रियों की तुष्टि के लिए रहता है, अतः उसका जीवन व्यर्थ ही है।",
      english: "My dear Arjuna, one who does not follow in human life the cycle of sacrifice thus established by the Vedas certainly leads a life full of sin. Living only for the satisfaction of the senses, such a person lives in vain."
    },
    {
      id: "3.17",
      sanskrit: "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः |\nआत्मन्येव च सन्तुष्टस् तस्य कार्यं न विद्यते ||३-१७||",
      hindi: "किन्तु जो व्यक्ति आत्मा में ही आनन्द लेता है तथा जिसका जीवन आत्म-साक्षात्कार युक्त है और जो अपने में ही पूर्णतया सन्तुष्ट रहता है, उसके लिए कोई कर्तव्य नहीं होता।",
      english: "But for one who takes pleasure in the self, whose human life is one of self-realization, and who is satisfied in the self only, fully satiated—for him there is no duty."
    },
    {
      id: "3.18",
      sanskrit: "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन |\nन चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ||३-१८||",
      hindi: "आत्म-साक्षात्कार व्यक्ति के लिए न तो अपने नियत कर्मों को करने की आवश्यकता रह जाती है, न ही ऐसा कर्म न करने का कोई कारण ही रहता है। उसे किसी अन्य जीव पर निर्भर रहने की आवश्यकता भी नहीं रह जाती।",
      english: "A self-realized man has no purpose to fulfill in the discharge of his prescribed duties, nor has he any reason not to perform such work. Nor has he any need to depend on any other living being."
    },
    {
      id: "3.19",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||३-१९||",
      hindi: "अतः कर्मफल में आसक्त हुए बिना मनुष्य को अपना कर्तव्य समझकर निरन्तर कर्म करते रहना चाहिए, क्योंकि अनासक्त होकर कर्म करने से परब्रह्म (भगवान्) की प्राप्ति होती है।",
      english: "Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment one attains the Supreme."
    },
    {
      id: "3.20",
      sanskrit: "कर्मणैव हि संसिद्धिमास्थिता जनकादयः |\nलोकसङ्ग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ||३-२०||",
      hindi: "जनक जैसे राजाओं ने केवल नियत कर्मों को करने से ही सिद्धि प्राप्त की। अतः सामान्य जनों को शिक्षा देने की दृष्टि से तुम्हें कर्म करना चाहिए।",
      english: "Kings such as Janaka attained perfection solely by performance of prescribed duties. Therefore, just for the sake of educating the people in general, you should perform your work."
    },
    {
      id: "3.21",
      sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः |\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ||३-२१||",
      hindi: "महापुरुष जो-जो आचरण करता है, सामान्य व्यक्ति उसी का अनुसरण करते हैं। वह अपने अनुसरणीय कार्यों से जो आदर्श प्रस्तुत करता है, सम्पूर्ण विश्व उसका अनुगमन करता है।",
      english: "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues."
    },
    {
      id: "3.22",
      sanskrit: "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन |\nनानवाप्तमवाप्तव्यं वर्त एव च कर्मणि ||३-२२||",
      hindi: "हे पृथापुत्र! तीनों लोकों में मेरे लिए कोई भी कर्म नियत नहीं है। न मुझे किसी वस्तु का अभाव है और न ही किसी वस्तु की आवश्यकता है - तो भी मैं नियत कर्म करने में तत्पर रहता हूँ।",
      english: "O son of Pritha, there is no work prescribed for Me within all the three planetary systems. Nor am I in want of anything, nor have I a need to obtain anything—and yet I am engaged in prescribed duties."
    },
    {
      id: "3.23",
      sanskrit: "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः |\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||३-२३||",
      hindi: "क्योंकि यदि मैं नियत कर्मों को सावधानीपूर्वक न करूँ, तो हे पार्थ! यह निश्चित है कि सारे मनुष्य मेरे ही पथ का अनुगमन करेंगे।",
      english: "For if I ever failed to engage in carefully performing prescribed duties, O Partha, certainly all men would follow My path."
    },
    {
      id: "3.24",
      sanskrit: "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् |\nसङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः ||३-२४||",
      hindi: "यदि मैं नियत कर्म न करूँ, तो ये सारे लोक नष्ट हो जाएँ। तब मैं अवांछित जन-समुदाय (वर्णसंकर) को उत्पन्न करने का कारण होऊँगा और इस तरह इन समस्त प्राणियों की शान्ति का विनाशक बनूँगा।",
      english: "If I did not perform prescribed duties, all these worlds would be put to ruination. I would be the cause of creating unwanted population, and I would thereby destroy the peace of all living beings."
    },
    {
      id: "3.25",
      sanskrit: "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत |\nकुर्याद्विद्वांस्तथासक्तश् चिकीर्षुर्लोकसङ्ग्रहम् ||३-२५||",
      hindi: "जिस प्रकार अज्ञानीजन फल की आसक्ति से अपना कर्तव्य करते हैं, उसी तरह विद्वान जनों को चाहिए कि वे लोगों को उचित पथ पर ले जाने के लिए अनासक्त रहकर अपना कर्तव्य करें।",
      english: "As the ignorant perform their duties with attachment to results, the learned may similarly act, but without attachment, for the sake of leading people on the right path."
    },
    {
      id: "3.26",
      sanskrit: "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् |\nजोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् ||३-२६||",
      hindi: "विद्वान् व्यक्ति को चाहिए कि वह सकाम कर्मों में आसक्त अज्ञानी पुरुषों को कर्म करने से न रोके, ताकि उनकी बुद्धि विचलित न हो। अपितु उसे चाहिए कि वह भक्तिभाव से कर्म करते हुए उन्हें सभी प्रकार के कार्यों में लगाए (जिससे कृष्णभावनामृत का क्रमिक विकास हो)।",
      english: "So as not to disrupt the minds of ignorant men attached to the fruitive results of prescribed duties, a learned person should not induce them to stop work. Rather, by working in the spirit of devotion, he should engage them in all sorts of activities [for the gradual development of Krishna consciousness]."
    },
    {
      id: "3.27",
      sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः |\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||३-२७||",
      hindi: "जीवात्मा अहंकार के प्रभाव से मोहग्रस्त होकर अपने आपको समस्त कर्मों का कर्ता मान बैठता है, जबकि वास्तव में वे प्रकृति के तीनों गुणों द्वारा सम्पन्न किये जाते हैं।",
      english: "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature."
    },
    {
      id: "3.28",
      sanskrit: "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः |\nगुणा गुणेषु वर्तन्त इति मत्वा न सज्जते ||३-२८||",
      hindi: "हे महाबाहु! भक्तिभावमय कर्म तथा सकाम कर्म के भेद को भलीभाँति जानते हुए जो परमसत्य को जानने वाला है, वह कभी भी अपने आपको इन्द्रियों तथा इन्द्रियतृप्ति में नहीं लगाता।",
      english: "One who is in knowledge of the Absolute Truth, O mighty-armed, does not engage himself in the senses and sense gratification, knowing well the differences between work in devotion and work for fruitive results."
    },
    {
      id: "3.29",
      sanskrit: "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु |\nतानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् ||३-२९||",
      hindi: "प्रकृति के गुणों से मोहग्रस्त होने पर अज्ञानी पुरुष पूर्णतया भौतिक कार्यों में संलग्न रहकर उनमें आसक्त हो जाते हैं। यद्यपि उनके ये कार्य उनमें ज्ञानभाव के कारण अधम होते हैं, किन्तु ज्ञानी को चाहिए कि उन्हें विचलित न करे।",
      english: "Bewildered by the modes of material nature, the ignorant fully engage themselves in material activities and become attached. But the wise should not unsettle them, although these duties are inferior due to the performers' lack of knowledge."
    },
    {
      id: "3.30",
      sanskrit: "मयि सर्वाणि कर्माणि सन्न्यस्याध्यात्मचेतसा |\nनिराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ||३-३०||",
      hindi: "अतः हे अर्जुन! अपने सारे कर्मों को मुझमें समर्पित करके, मेरे पूर्ण ज्ञान से युक्त होकर, लाभ की आकांक्षा से रहित, स्वामित्व के किसी दावे के बिना तथा आलस्य से रहित होकर युद्ध करो।",
      english: "Therefore, O Arjuna, surrendering all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight."
    },
    {
      id: "3.31",
      sanskrit: "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः |\nश्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः ||३-३१||",
      hindi: "जो व्यक्ति मेरे आदेशों के अनुसार अपना कर्तव्य करते रहते हैं और ईर्ष्यारहित होकर इस उपदेश का श्रद्धापूर्वक पालन करते हैं, वे सकाम कर्मों के बन्धन से मुक्त हो जाते हैं।",
      english: "Those persons who execute their duties according to My injunctions and who follow this teaching faithfully, without envy, become free from the bondage of fruitive actions."
    },
    {
      id: "3.32",
      sanskrit: "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् |\nसर्वज्ञानविमूढांस् तान्विद्धि नष्टानचेतसः ||३-३२||",
      hindi: "किन्तु जो ईर्ष्यावश इन उपदेशों की उपेक्षा करते हैं और उनका पालन नहीं करते, उन्हें समस्त ज्ञान से रहित, दिगभ्रमित तथा सिद्धि के प्रयासों में नष्ट हुआ समझना चाहिए।",
      english: "But those who, out of envy, disregard these teachings and do not follow them are to be considered bereft of all knowledge, befooled, and ruined in their endeavors for perfection."
    },
    {
      id: "3.33",
      sanskrit: "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि |\nप्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति ||३-३३||",
      hindi: "ज्ञानी पुरुष भी अपनी प्रकृति के अनुसार कार्य करता है, क्योंकि सभी प्राणी तीनों गुणों से प्राप्त अपनी प्रकृति का ही अनुसरण करते हैं। भला दमन करने से क्या हो सकता है?",
      english: "Even a man of knowledge acts according to his own nature, for everyone follows the nature he has acquired from the three modes. What can repression accomplish?"
    },
    {
      id: "3.34",
      sanskrit: "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ |\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ ||३-३४||",
      hindi: "प्रत्येक इन्द्रिय तथा उसके विषय से सम्बन्धित राग-द्वेष होते हैं। मनुष्य को ऐसे राग तथा द्वेष के वशीभूत नहीं होना चाहिए, क्योंकि ये आत्म-साक्षात्कार के मार्ग में अवरोधक हैं।",
      english: "There are principles to regulate attachment and aversion pertaining to the senses and their objects. One should not come under the control of such attachment and aversion, because they are stumbling blocks on the path of self-realization."
    },
    {
      id: "3.35",
      sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||३-३५||",
      hindi: "अपने नियत कर्मों को दोषपूर्ण ढंग से सम्पन्न करना भी अन्य के कर्मों को भलीभाँति करने से श्रेयस्कर है। अपने कर्मों को करते हुए मरना पराये कर्मों में प्रवृत्त होने की अपेक्षा श्रेष्ठतर है, क्योंकि अन्य किसी के मार्ग का अनुसरण भयावह होता है।",
      english: "It is far better to discharge one's prescribed duties, even though faultily, than another's duties perfectly. Destruction in the course of performing one's own duty is better than engaging in another's duties, for to follow another's path is dangerous."
    },
    {
      id: "3.36",
      sanskrit: "अर्जुन उवाच |\nअथ केन प्रयुक्तोऽयं पापं चरति पूरुषः |\nअनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः ||३-३६||",
      hindi: "अर्जुन ने कहा - हे वृष्णिवंशी! मनुष्य न चाहते हुए भी पापकर्मों के लिए प्रेरित क्यों होता है? ऐसा लगता है कि उसे बलपूर्वक उनमें लगाया जा रहा हो।",
      english: "Arjuna said: O descendant of Vrishni, by what is one impelled to sinful acts, even unwillingly, as if engaged by force?"
    },
    {
      id: "3.37",
      sanskrit: "श्रीभगवानुवाच |\nकाम एष क्रोध एष रजोगुणसमुद्भवः |\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ||३-३७||",
      hindi: "श्री भगवान ने कहा - हे अर्जुन! इसका कारण रजोगुण के सम्पर्क से उत्पन्न काम है, जो बाद में क्रोध का रूप धारण करता है और जो इस संसार का सर्वभक्षी पापी शत्रु है।",
      english: "The Supreme Personality of Godhead said: It is lust only, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world."
    },
    {
      id: "3.38",
      sanskrit: "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च |\nयथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् ||३-३८||",
      hindi: "जिस प्रकार अग्नि धुएँ से, दर्पण धूल से अथवा भ्रूण गर्भाशय से ढका रहता है, उसी प्रकार जीवात्मा इस काम की विभिन्न मात्राओं से ढका रहता है।",
      english: "As fire is covered by smoke, as a mirror is covered by dust, or as the embryo is covered by the womb, the living entity is similarly covered by different degrees of this lust."
    },
    {
      id: "3.39",
      sanskrit: "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा |\nकामरूपेण कौन्तेय दुष्पूरेणानलेन च ||३-३९||",
      hindi: "इस प्रकार ज्ञानी जीवात्मा की शुद्ध चेतना काम रूपी नित्य शत्रु से ढकी रहती है, जो कभी भी तुष्ट नहीं होता और अग्नि के समान जलता रहता है।",
      english: "Thus the wise living entity's pure consciousness becomes covered by his eternal enemy in the form of lust, which is never satisfied and which burns like fire."
    },
    {
      id: "3.40",
      sanskrit: "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते |\nएतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् ||३-४०||",
      hindi: "इन्द्रियाँ, मन तथा बुद्धि इस काम के निवास-स्थान हैं। इनके द्वारा यह काम जीवात्मा के वास्तविक ज्ञान को ढक कर उसे मोहित कर लेता है।",
      english: "The senses, the mind and the intelligence are the sitting places of this lust. Through them lust covers the real knowledge of the living entity and bewilders him."
    },
    {
      id: "3.41",
      sanskrit: "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ |\nपाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् ||३-४१||",
      hindi: "इसलिए हे भरतवंशियों में श्रेष्ठ अर्जुन! प्रारम्भ में ही इन्द्रियों को वश में करके इस पाप का महान प्रतीक (काम) का दमन करो और ज्ञान तथा आत्म-साक्षात्कार के इस विनाशकर्ता का वध करो।",
      english: "Therefore, O Arjuna, best of the Bharatas, in the very beginning curb this great symbol of sin [lust] by regulating the senses, and slay this destroyer of knowledge and self-realization."
    },
    {
      id: "3.42",
      sanskrit: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः |\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ||३-४२||",
      hindi: "कर्मेन्द्रियाँ जड़ पदार्थ की अपेक्षा श्रेष्ठ हैं, मन इन्द्रियों से बढ़कर है, बुद्धि मन से भी उच्च है और वह (आत्मा) बुद्धि से भी बढ़कर है।",
      english: "The working senses are superior to dull matter; mind is higher than the senses; intelligence is still higher than the mind; and he [the soul] is even higher than the intelligence."
    },
    {
      id: "3.43",
      sanskrit: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना |\nजहि शत्रुं महाबाहो कामरूपं दुरासदम् ||३-४३||",
      hindi: "इस प्रकार हे महाबाहु अर्जुन! अपने आपको भौतिक इन्द्रियों, मन तथा बुद्धि से परे जान कर और मन को सावधान आध्यात्मिक बुद्धि (कृष्णभावनामृत) से स्थिर करके आध्यात्मिक शक्ति द्वारा इस काम-रूपी दुर्जेय शत्रु को जीतो।",
      english: "Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence [Krishna consciousness] and thus—by spiritual strength—conquer this insatiable enemy known as lust."
    }
  ]
},
{
  chapter: 4,
  title: "Jñāna Karma Sanyāsa Yoga",
  english_title: "The Yoga of Knowledge, Action, and Renunciation",
  verses: [
    {
      id: "4.1",
      sanskrit: "श्रीभगवानुवाच |\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम् |\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ||४-१||",
      hindi: "श्री भगवान ने कहा - मैंने इस अमर योगविद्या का उपदेश सूर्यदेव विवस्वान को दिया और विवस्वान ने मनुष्यों के पिता मनु को उपदेश दिया और मनु ने इसका उपदेश इक्ष्वाकु को दिया।",
      english: "The Supreme Personality of Godhead said: I instructed this imperishable science of yoga to the sun-god, Vivasvan, and Vivasvan instructed it to Manu, the father of mankind, and Manu in turn instructed it to Iksvaku."
    },
    {
      id: "4.2",
      sanskrit: "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः |\nस कालेनेह महता योगो नष्टः परन्तप ||४-२||",
      hindi: "इस प्रकार यह परम विज्ञान गुरु-परम्परा द्वारा प्राप्त किया गया और राजर्षियों ने इसी विधि से इसे समझा। किन्तु कालक्रम में यह परम्परा छिन्न हो गई, अतः यह विज्ञान यथारूप में लुप्त हो गया लगता है।",
      english: "This supreme science was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But in course of time the succession was broken, and therefore the science as it is appears to be lost."
    },
    {
      id: "4.3",
      sanskrit: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः |\nभक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् ||४-३||",
      hindi: "आज मेरे द्वारा वही यह प्राचीन योग यानी परमेश्वर के साथ अपने सम्बन्ध का विज्ञान, तुमसे कहा जा रहा है, क्योंकि तुम मेरे भक्त तथा मित्र हो, अतः तुम इस विज्ञान के दिव्य रहस्य को समझ सकते हो।",
      english: "That very ancient science of the relationship with the Supreme is today told by Me to you because you are My devotee as well as My friend and can therefore understand the transcendental mystery of this science."
    },
    {
      id: "4.4",
      sanskrit: "अर्जुन उवाच |\nअपरं भवतो जन्म परं जन्म विवस्वतः |\nकथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति ||४-४||",
      hindi: "अर्जुन ने कहा - सूर्यदेव विवस्वान आप से पहले हो चुके हैं (ज्येष्ठ हैं), तो फिर मैं कैसे समझूँ कि प्रारम्भ में भी आपने उन्हें इस विद्या का उपदेश दिया था?",
      english: "Arjuna said: The sun-god Vivasvan is senior by birth to You. How am I to understand that in the beginning You instructed this science to him?"
    },
    {
      id: "4.5",
      sanskrit: "श्रीभगवानुवाच |\nबहूनि मे व्यतीतानि जन्मानि तव चार्जुन |\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप ||४-५||",
      hindi: "श्री भगवान ने कहा - हे परन्तप अर्जुन! तुम्हारे तथा मेरे अनेकानेक जन्म हो चुके हैं। मुझे तो उन सबका स्मरण है, किन्तु तुम्हें उनका स्मरण नहीं रह सकता।",
      english: "The Supreme Personality of Godhead said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of the enemy!"
    },
    {
      id: "4.6",
      sanskrit: "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् |\nप्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया ||४-६||",
      hindi: "यद्यपि मैं अजन्मा तथा अविनाशी हूँ और यद्यपि मैं समस्त जीवों का स्वामी हूँ, तो भी प्रत्येक युग में मैं अपने आदि दिव्य रूप में प्रकट होता हूँ।",
      english: "Although I am unborn and My transcendental body never deteriorates, and although I am the Lord of all living entities, I still appear in every millennium in My original transcendental form."
    },
    {
      id: "4.7",
      sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||४-७||",
      hindi: "हे भरतवंशी! जब भी और जहाँ भी धर्म का पतन होता है और अधर्म की प्रधानता होने लगती है, तब-तब मैं अवतार लेता हूँ।",
      english: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself."
    },
    {
      id: "4.8",
      sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम् |\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ||४-८||",
      hindi: "भक्तों का उद्धार करने, दुष्टों का विनाश करने तथा धर्म की फिर से स्थापना करने के लिए मैं हर युग में प्रकट होता हूँ।",
      english: "To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium."
    },
    {
      id: "4.9",
      sanskrit: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः |\nत्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ||४-९||",
      hindi: "हे अर्जुन! जो मेरे अविर्भाव तथा कर्मों की दिव्य प्रकृति को जानता है, वह इस शरीर को छोड़ने पर इस भौतिक संसार में पुनः जन्म नहीं लेता, अपितु मेरे सनातन धाम को प्राप्त होता है।",
      english: "One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna."
    },
    {
      id: "4.10",
      sanskrit: "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः |\nबहवो ज्ञानतपसा पूता मद्भावमागताः ||४-१०||",
      hindi: "आसक्ति, भय तथा क्रोध से मुक्त होकर, मुझमें पूर्णतया तन्मय होकर और मेरी शरण में आकर बहुत से व्यक्ति भूतकाल में मेरे ज्ञान से पवित्र हो चुके हैं। इस प्रकार से उन सबों ने मेरे प्रति दिव्यप्रेम को प्राप्त किया है।",
      english: "Being freed from attachment, fear and anger, being fully absorbed in Me and taking refuge in Me, many, many persons in the past became purified by knowledge of Me—and thus they all attained transcendental love for Me."
    },
    {
      id: "4.11",
      sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् |\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||४-११||",
      hindi: "जिस भाव से सारे लोग मेरी शरण ग्रहण करते हैं, उसी के अनुरूप मैं उन्हें फल देता हूँ। हे पार्थ! प्रत्येक व्यक्ति सभी प्रकार से मेरे पथ का अनुगमन करता है।",
      english: "As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pritha."
    },
    {
      id: "4.12",
      sanskrit: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः |\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा ||४-१२||",
      hindi: "इस संसार में मनुष्य सकाम कर्मों में सफलता चाहते हैं, फलस्वरूप वे देवताओं की पूजा करते हैं। निस्सन्देह इस संसार में मनुष्यों को सकाम कर्म का फल शीघ्र प्राप्त होता है।",
      english: "Men in this world desire success in fruitive activities, and therefore they worship the demigods. Quickly, of course, men get results from fruitive work in this world."
    },
    {
      id: "4.13",
      sanskrit: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः |\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ||४-१३||",
      hindi: "प्रकृति के तीनों गुणों और उनसे सम्बद्ध कर्म के अनुसार मेरे द्वारा मानव समाज के चार विभाग रचे गये। यद्यपि मैं इस व्यवस्था का स्रष्टा हूँ, किन्तु तुम यह जान लो कि मैं इतने पर भी अव्यय, अकर्ता हूँ।",
      english: "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me. And although I am the creator of this system, you should know that I am yet the nondoer, being unchangeable."
    },
    {
      id: "4.14",
      sanskrit: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा |\nइति मां योऽभिजानाति कर्मभिर्न स बध्यते ||४-१४||",
      hindi: "मुझ पर किसी कर्म का प्रभाव नहीं पड़ता, न ही मैं कर्मफल की कामना करता हूँ। जो मेरे इस सत्य को जानता है, वह भी कर्मों के फल से नहीं बँधता।",
      english: "There is no work that affects Me; nor do I aspire for the fruits of action. One who understands this truth about Me also does not become entangled in the fruitive reactions of work."
    },
    {
      id: "4.15",
      sanskrit: "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः |\nकुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ||४-१५||",
      hindi: "प्राचीन काल में समस्त मुक्त आत्माओं ने मेरी दिव्य प्रकृति को जानकर ही कर्म किया, अतः तुम्हें चाहिए कि उनके पदचिन्हों का अनुसरण करते हुए अपने कर्तव्य का पालन करो।",
      english: "All the liberated souls in ancient times acted with this understanding of My transcendental nature. Therefore you should perform your duty, following in their footsteps."
    },
    {
      id: "4.16",
      sanskrit: "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः |\nतत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||४-१६||",
      hindi: "कर्म क्या है और अकर्म क्या है, इसे निश्चित करने में बुद्धिमान व्यक्ति भी मोहग्रस्त हो जाते हैं। अतः मैं तुमको बताऊँगा कि कर्म क्या है, जिसे जानकर तुम सारे अशुभ से मुक्त हो सकोगे।",
      english: "Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune."
    },
    {
      id: "4.17",
      sanskrit: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः |\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः ||४-१७||",
      hindi: "कर्म की बारीकियों को समझना अत्यन्त कठिन है। अतः मनुष्य को चाहिए कि वह यह ठीक से जाने कि कर्म क्या है, विकर्म क्या है और अकर्म क्या है।",
      english: "The intricacies of action are very hard to understand. Therefore one should know properly what action is, what forbidden action is and what inaction is."
    },
    {
      id: "4.18",
      sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः |\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ||४-१८||",
      hindi: "जो मनुष्य कर्म में अकर्म और अकर्म में कर्म देखता है, वह सभी मनुष्यों में बुद्धिमान है और सब प्रकार के कर्मों में प्रवृत्त रहकर भी दिव्य स्थिति में रहता है।",
      english: "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities."
    },
    {
      id: "4.19",
      sanskrit: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः |\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः ||४-१९||",
      hindi: "जिस व्यक्ति का प्रत्येक प्रयास इन्द्रियतृप्ति की कामना से रहित होता है, उसे पूर्णज्ञानी समझा जाता है। उसे ही ज्ञानीजन ऐसा कर्ता कहते हैं, जिसने सकाम कर्मों को ज्ञान की अग्नि से भस्मसात् कर दिया है।",
      english: "One is understood to be in full knowledge whose every endeavor is devoid of desire for sense gratification. He is said by sages to be a worker for whom the reactions of work have been burned up by the fire of perfect knowledge."
    },
    {
      id: "4.20",
      sanskrit: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः |\nकर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः ||४-२०||",
      hindi: "अपने कर्मफल की सारी आसक्ति को त्याग कर, सदैव सन्तुष्ट तथा स्वतन्त्र रहकर, वह सभी प्रकार के कार्यों में व्यस्त रहकर भी कोई सकाम कर्म नहीं करता।",
      english: "Abandoning all attachment to the results of his activities, ever satisfied and independent, he performs no fruitive action, although engaged in all kinds of undertakings."
    },
    {
      id: "4.21",
      sanskrit: "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः |\nशारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् ||४-२१||",
      hindi: "ऐसा ज्ञानी पुरुष पूर्णतया संयमित मन तथा बुद्धि से कार्य करता है, अपनी सम्पत्ति के सारे स्वामित्व को त्याग देता है और केवल जीवन-निर्वाह के लिए कर्म करता है। इस तरह कार्य करता हुआ वह पाप रूपी फलों से प्रभावित नहीं होता।",
      english: "Such a man of understanding acts with mind and intelligence perfectly controlled, gives up all sense of proprietorship over his possessions, and acts only for the bare necessities of life. Thus working, he is not affected by sinful reactions."
    },
    {
      id: "4.22",
      sanskrit: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः |\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ||४-२२||",
      hindi: "जो स्वतः होने वाले लाभ से सन्तुष्ट रहता है, जो द्वन्द्व से मुक्त है और ईर्ष्या नहीं करता, जो सफलता तथा असफलता दोनों में स्थिर रहता है, वह कर्म करता हुआ भी कभी बँधता नहीं।",
      english: "He who is satisfied with gain which comes of its own accord, who is free from duality and does not envy, who is steady in both success and failure, is never entangled, although performing actions."
    },
    {
      id: "4.23",
      sanskrit: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः |\nयज्ञायाचरतः कर्म समग्रं प्रविलीयते ||४-२३||",
      hindi: "जो पुरुष प्रकृति के गुणों के प्रति अनासक्त है और जो दिव्य ज्ञान में पूर्णतया स्थित है, उसके सारे कर्म ब्रह्म में लीन हो जाते हैं।",
      english: "The work of a man who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence."
    },
    {
      id: "4.24",
      sanskrit: "ब्रह्मार्पणं ब्रह्म हविर् ब्रह्माग्नौ ब्रह्मणा हुतम् |\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ||४-२४||",
      hindi: "जो व्यक्ति कृष्णभावनामृत में पूर्णतया लीन रहता है, उसे अपने आध्यात्मिक कर्मों के योगदान के कारण अवश्य ही भगवद्धाम की प्राप्ति होती है, क्योंकि उसमें हवन आध्यात्मिक होता है और हवि भी आध्यात्मिक होती है।",
      english: "A person who is fully absorbed in Krishna consciousness is sure to attain the spiritual kingdom because of his full contribution to spiritual activities, in which the consummation is absolute and that which is offered is of the same spiritual nature."
    },
    {
      id: "4.25",
      sanskrit: "दैवमेवापरे यज्ञं योगिनः पर्युपासते |\nब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति ||४-२५||",
      hindi: "कुछ योगी विभिन्न प्रकार के यज्ञों द्वारा देवताओं की भलीभाँति पूजा करते हैं और कुछ परब्रह्म रूपी अग्नि में आहुति डालते हैं।",
      english: "Some yogis perfectly worship the demigods by offering different sacrifices to them, and some of them offer sacrifices in the fire of the Supreme Brahman."
    },
    {
      id: "4.26",
      sanskrit: "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति |\nशब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति ||४-२६||",
      hindi: "इनमें से कुछ (जो शुद्ध ब्रह्मचारी हैं) श्रवण आदि क्रियाओं तथा इन्द्रियों को मन की नियन्त्रण रूपी अग्नि में स्वाहा कर देते हैं, तो दूसरे (नियमित गृहस्थ) इन्द्रिय-विषयों को इन्द्रियों की अग्नि में स्वाहा कर देते हैं।",
      english: "Some [the unadulterated brahmacaris] sacrifice the hearing process and the senses in the fire of mental control, and others [the regulated householders] sacrifice the objects of the senses in the fire of the senses."
    },
    {
      id: "4.27",
      sanskrit: "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे |\nआत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते ||४-२७||",
      hindi: "दूसरे, जो मन तथा इन्द्रियों को वश में करके आत्म-साक्षात्कार करना चाहते हैं, सम्पूर्ण इन्द्रियों तथा प्राणवायु के कार्यों को संयमित मन रूपी अग्नि में आहुति कर देते हैं।",
      english: "Others, who are interested in achieving self-realization through control of the mind and senses, offer the functions of all the senses, and of the life breath, as oblations into the fire of the controlled mind."
    },
    {
      id: "4.28",
      sanskrit: "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे |\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ||४-२८||",
      hindi: "कठोर व्रत अङ्गीकार करके कुछ लोग अपनी सम्पत्ति का त्याग करके, कुछ कठिन तपस्या द्वारा, कुछ अष्टांगयोग पद्धति के अभ्यास द्वारा अथवा कुछ दिव्यज्ञान में उन्नति करने के लिए वेदों के अध्ययन द्वारा प्रबुद्ध बनते हैं।",
      english: "Having accepted strict vows, some become enlightened by sacrificing their possessions, and others by performing severe austerities, by practicing the yoga of eightfold mysticism, or by studying the Vedas to advance in transcendental knowledge."
    },
    {
      id: "4.29",
      sanskrit: "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे |\nप्राणापानगती रुद्ध्वा प्राणायामपरायणाः |\nअपरे नियताहाराः प्राणान्प्राणेषु जुह्वति ||४-२९||",
      hindi: "अन्य योगी भी हैं जो समाधि में रहने के लिए श्वास को रोककर प्राण को अपान में तथा अपान को प्राण में आहुति देते हैं। और अन्त में श्वास को रोककर प्राणायाम में तत्पर रहते हैं। अन्य योगी कम भोजन करके प्राण की प्राण में ही आहुति दे देते हैं।",
      english: "Still others, who are inclined to the process of breath restraint to remain in trance, practice by offering the movement of the outgoing breath into the incoming, and the incoming breath into the outgoing, and thus at last remain in trance, stopping all breathing. Others, curtailing the eating process, offer the outgoing breath into itself as a sacrifice."
    },
    {
      id: "4.30",
      sanskrit: "सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः |\nयज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् ||४-३०||",
      hindi: "ये सभी यज्ञ करने वाले यज्ञों का अर्थ जानने के कारण पापकर्मों से मुक्त हो जाते हैं और यज्ञों के फल रूपी अमृत को चखकर परम दिव्य आकाश की ओर प्रगति करते हैं।",
      english: "All these performers who know the meaning of sacrifice become cleansed of sinful reactions, and, having tasted the nectar of the results of sacrifices, they advance toward the supreme eternal atmosphere."
    },
    {
      id: "4.31",
      sanskrit: "नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम ||४-३१||",
      hindi: "हे कुरुश्रेष्ठ! जब यज्ञ के बिना मनुष्य इस लोक में या इस जीवन में ही सुखपूर्वक नहीं रह सकता, तो फिर अगले जन्म में कैसे रह सकेगा?",
      english: "O best of the Kuru dynasty, without sacrifice one can never live happily on this planet or in this life: what then of the next?"
    },
    {
      id: "4.32",
      sanskrit: "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे |\nकर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे ||४-३२||",
      hindi: "ये विभिन्न प्रकार के यज्ञ वेद द्वारा अनुमोदित हैं और ये सभी विभिन्न प्रकार के कर्मों से उत्पन्न हैं। इन्हें इस रूप में जानने पर तुम मुक्त हो जाओगे।",
      english: "All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated."
    },
    {
      id: "4.33",
      sanskrit: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप |\nसर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते ||४-३३||",
      hindi: "हे परन्तप! द्रव्ययज्ञ से ज्ञानयज्ञ श्रेष्ठ है। हे पार्थ! अन्ततः सारे कर्मयज्ञों का अवसान दिव्यज्ञान में होता है।",
      english: "O chastiser of the enemy, the sacrifice performed in knowledge is better than the mere sacrifice of material possessions. After all, O son of Pritha, all sacrifices of work culminate in transcendental knowledge."
    },
    {
      id: "4.34",
      sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया |\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ||४-३४||",
      hindi: "तुम गुरु के पास जाकर सत्य को जानने का प्रयास करो। उनसे विनीत होकर जिज्ञासा करो और उनकी सेवा करो। स्वरूपसिद्ध व्यक्ति तुम्हें ज्ञान प्रदान कर सकते हैं, क्योंकि उन्होंने सत्य का दर्शन किया है।",
      english: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth."
    },
    {
      id: "4.35",
      sanskrit: "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव |\nयेन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि ||४-३५||",
      hindi: "स्वरूपसिद्ध व्यक्ति से वास्तविक ज्ञान प्राप्त हो जाने पर तुम पुनः कभी ऐसे मोह को प्राप्त नहीं होगे, क्योंकि इस ज्ञान के द्वारा तुम देख सकोगे कि सभी जीव परमात्मा के अंशस्वरूप हैं, अर्थात् वे सब मेरे हैं।",
      english: "Having obtained real knowledge from a self-realized soul, you will never fall again into such illusion, for by this knowledge you will see that all living beings are but part of the Supreme, or, in other words, that they are Mine."
    },
    {
      id: "4.36",
      sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः |\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ||४-३६||",
      hindi: "यदि तुम्हें समस्त पापियों में भी सर्वाधिक पापी समझा जाये, तो भी तुम दिव्यज्ञान रूपी नाव में स्थित होकर दुख-सागर को पार करने में समर्थ होगे।",
      english: "Even if you are considered to be the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will be able to cross over the ocean of miseries."
    },
    {
      id: "4.37",
      sanskrit: "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन |\nज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ||४-३७||",
      hindi: "जैसे प्रज्ज्वलित अग्नि ईंधन को भस्म कर देती है, उसी तरह हे अर्जुन! ज्ञान रूपी अग्नि भौतिक कर्मों के समस्त फलों को जला डालती है।",
      english: "As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities."
    },
    {
      id: "4.38",
      sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ||४-३८||",
      hindi: "इस संसार में दिव्यज्ञान के समान कुछ भी उद्दात तथा शुद्ध नहीं है। ऐसा ज्ञान समस्त योग का परिपक्व फल है। जो व्यक्ति भक्ति में सिद्ध हो जाता है, वह यथासमय अपने अन्तर में इस ज्ञान का आस्वादन करता है।",
      english: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time."
    },
    {
      id: "4.39",
      sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः |\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ||४-३९||",
      hindi: "जो श्रद्धालु दिव्यज्ञान में समर्पित है और जिसने इन्द्रियों को वश में कर लिया है, वह इस ज्ञान को प्राप्त करने का अधिकारी है और इसे प्राप्त करते ही वह तुरन्त आध्यात्मिक शान्ति को प्राप्त होता है।",
      english: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace."
    },
    {
      id: "4.40",
      sanskrit: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति |\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः ||४-४०||",
      hindi: "किन्तु जो अज्ञानी तथा श्रद्धविहीन व्यक्ति शास्त्रों में संदेह करते हैं, वे भगवद्भावनामृत नहीं प्राप्त कर पाते, अपितु नीचे गिर जाते हैं। संशयात्मा के लिए न तो इस लोक में, न ही परलोक में कोई सुख है।",
      english: "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next."
    },
    {
      id: "4.41",
      sanskrit: "योगसन्न्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम् |\nआत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय ||४-४१||",
      hindi: "जो व्यक्ति अपने कर्मफलों का त्याग करते हुए भक्ति करता है और जिसके संशय दिव्यज्ञान द्वारा विनष्ट हो चुके होते हैं, वही वास्तव में आत्मपरायण है। हे धनञ्जय! वह कर्मों के बन्धन से नहीं बँधता।",
      english: "One who acts in devotional service, renouncing the fruits of his actions, and whose doubts have been destroyed by transcendental knowledge, is situated in the self. Thus he is not bound by the reactions of work, O conqueror of riches."
    },
    {
      id: "4.42",
      sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः |\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ||४-४२||",
      hindi: "अतः तुम्हारे हृदय में अज्ञान के कारण जो संशय उठे हैं, उन्हें ज्ञान रूपी शस्त्र से काट डालो। हे भारत! तुम योग से समन्वित होकर खड़े होओ और युद्ध करो।",
      english: "Therefore the doubts which have arisen in your heart out of ignorance should be slashed by the weapon of knowledge. Armed with yoga, O Bharata, stand and fight."
    }
  ]
},
{
  chapter: 5,
  title: "Karma Sanyāsa Yoga",
  english_title: "The Yoga of Renunciation",
  verses: [
    {
      id: "5.1",
      sanskrit: "अर्जुन उवाच |\nसन्न्यासं कर्मणां कृष्ण पुनर्योगं च शंससि |\nयच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् ||५-१||",
      hindi: "अर्जुन ने कहा - हे कृष्ण! पहले आप मुझसे कर्म त्यागने के लिए कहते हैं और फिर भक्तिपूर्वक कर्म करने का आदेश देते हैं। क्या आप कृपा करके निश्चित रूप से मुझे बताएँगे कि इन दोनों में से कौन अधिक श्रेयस्कर है?",
      english: "Arjuna said: O Krishna, first of all You ask me to renounce work, and then again You recommend work with devotion. Now will You kindly tell me definitely which of the two is more beneficial?"
    },
    {
      id: "5.2",
      sanskrit: "श्रीभगवानुवाच |\nसन्न्यासः कर्मयोगश्च निःश्रेयसकरावुभौ |\nतयोस्तु कर्मसन्न्यासात्कर्मयोगो विशिष्यते ||५-२||",
      hindi: "श्री भगवान ने उत्तर दिया - मुक्ति के लिए तो कर्म का परित्याग तथा भक्तिमय कर्म (कर्मयोग) दोनों ही उत्तम हैं। किन्तु इन दोनों में से कर्म के परित्याग से भक्तियुक्त कर्म श्रेष्ठ है।",
      english: "The Personality of Godhead replied: The renunciation of work and work in devotion are both good for liberation. But, of the two, work in devotional service is better than renunciation of work."
    },
    {
      id: "5.3",
      sanskrit: "ज्ञेयः स नित्यसन्न्यासी यो न द्वेष्टि न काङ्क्षति |\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते ||५-३||",
      hindi: "जो पुरुष न तो कर्मफलों से घृणा करता है और न कर्मफल की इच्छा करता है, वह नित्य संन्यासी जाना जाता है। हे महाबाहु! ऐसा मनुष्य समस्त द्वन्द्वों से रहित होकर भवबन्धन को पार कर पूर्णतया मुक्त हो जाता है।",
      english: "One who neither hates nor desires the fruits of his activities is known to be always renounced. Such a person, free from all dualities, easily overcomes material bondage and is completely liberated, O mighty-armed Arjuna."
    },
    {
      id: "5.4",
      sanskrit: "साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः |\nएकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् ||५-४||",
      hindi: "अज्ञानी ही भक्ति (कर्मयोग) को भौतिक जगत के वैश्लेषिक अध्ययन (सांख्य) से भिन्न कहते हैं। जो वस्तुतः ज्ञानी हैं, वे कहते हैं कि जो इनमें से किसी एक मार्ग का भी भलीभाँति अनुसरण करता है, उसे दोनों के फल प्राप्त होते हैं।",
      english: "Only the ignorant speak of devotional service [karma-yoga] as being different from the analytical study of the material world [sankhya]. Those who are actually learned say that he who applies himself well to one of these paths achieves the results of both."
    },
    {
      id: "5.5",
      sanskrit: "यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते |\nएकं साङ्ख्यं च योगं च यः पश्यति स पश्यति ||५-५||",
      hindi: "जो यह जानता है कि वैश्लेषिक अध्ययन (सांख्य) द्वारा प्राप्य स्थान भक्ति द्वारा भी प्राप्त किया जा सकता है, और इस तरह जो सांख्ययोग तथा भक्तियोग को एक समान देखता है, वही वस्तुओं को यथारूप में देखता है।",
      english: "One who knows that the position reached by means of analytical study can also be attained by devotional service, and who therefore sees analytical study and devotional service to be on the same level, sees things as they are."
    },
    {
      id: "5.6",
      sanskrit: "सन्न्यासस्तु महाबाहो दुःखमाप्तुमयोगतः |\nयोगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ||५-६||",
      hindi: "भक्ति में लगे बिना केवल समस्त कर्मों का परित्याग करने से कोई सुखी नहीं बन सकता। परन्तु भक्ति में लगा हुआ विचारवान व्यक्ति शीघ्र ही परब्रह्म को प्राप्त कर लेता है।",
      english: "Merely renouncing all activities yet not engaging in the devotional service of the Lord cannot make one happy. But a thoughtful person engaged in devotional service can achieve the Supreme without delay."
    },
    {
      id: "5.7",
      sanskrit: "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः |\nसर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते ||५-७||",
      hindi: "जो भक्तिभाव से कर्म करता है, जो विशुद्ध आत्मा है और अपने मन तथा इन्द्रियों को वश में रखता है, वह सबों को प्रिय होता है और सभी लोग उसे प्रिय होते हैं। ऐसा व्यक्ति कर्म करता हुआ भी कभी नहीं बँधता।",
      english: "One who works in devotion, who is a pure soul, and who controls his mind and senses is dear to everyone, and everyone is dear to him. Though always working, such a man is never entangled."
    },
    {
      id: "5.8-9",
      sanskrit: "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् |\nपश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन् ||\nप्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि |\nइन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् ||",
      hindi: "दिव्य भावनामृत से युक्त पुरुष देखता, सुनता, स्पर्श करता, सूँघता, खाता, चलता-फिरता, सोता तथा श्वास लेता हुआ भी अपने अन्तर में सदैव यही जानता रहता है कि वास्तव में वह कुछ भी नहीं करता। बोलते, त्यागते, ग्रहण करते या आँखें खोलते-बन्द करते हुए भी वह यह जानता रहता है कि भौतिक इन्द्रियाँ अपने-अपने विषयों में प्रवृत्त हैं, किन्तु वह इन सबसे पृथक् है।",
      english: "A person in the divine consciousness, although engaged in seeing, hearing, touching, smelling, eating, moving about, sleeping and breathing, always knows within himself that he actually does nothing at all. Because while speaking, evacuating, receiving, or opening or closing his eyes, he always knows that only the material senses are engaged with their objects and that he is aloof from them."
    },
    {
      id: "5.10",
      sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः |\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ||५-१०||",
      hindi: "जो व्यक्ति कर्मफलों को परमेश्वर को समर्पित करके आसक्तिरहित होकर अपना कर्म करता है, वह पाप कर्मों से उसी प्रकार अप्रभावित रहता है, जिस प्रकार कमलपत्र जल से अस्पृश्य रहता है।",
      english: "One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water."
    },
    {
      id: "5.11",
      sanskrit: "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि |\nयोगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये ||५-११||",
      hindi: "योगी आसक्तिरहित होकर शरीर, मन, बुद्धि तथा इन्द्रियों के द्वारा भी केवल शुद्धि के लिए कर्म करते हैं।",
      english: "The yogis, abandoning attachment, act with body, mind, intelligence and even with the senses, only for the purpose of purification."
    },
    {
      id: "5.12",
      sanskrit: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् |\nअयुक्तः कामकारेण फले सक्तो निबध्यते ||५-१२||",
      hindi: "निश्चल भक्त शुद्ध शान्ति प्राप्त करता है क्योंकि वह समस्त कर्मफल मुझे अर्पित कर देता है, किन्तु जो व्यक्ति भगवान् से युक्त नहीं है और जो अपने श्रम का फलकामी है, वह बँध जाता है।",
      english: "The steadily devoted soul attains unadulterated peace because he offers the result of all activities to Me; whereas a person who is not in union with the Divine, who is greedy for the fruits of his labor, becomes entangled."
    },
    {
      id: "5.13",
      sanskrit: "सर्वकर्माणि मनसा सन्न्यस्यास्ते सुखं वशी |\nनवद्वारे पुरे देही नैव कुर्वन्न कारयन् ||५-१३||",
      hindi: "जब देहधारी जीव अपनी प्रकृति को वश में कर लेता है और मन से समस्त कर्मों का परित्याग कर देता है, तब वह नौ द्वारों वाले नगर (भौतिक शरीर) में बिना कुछ किये या कराये सुखपूर्वक रहता है।",
      english: "When the embodied living being controls his nature and mentally renounces all actions, he resides happily in the city of nine gates [the material body], neither working nor causing work to be done."
    },
    {
      id: "5.14",
      sanskrit: "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः |\nन कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ||५-१४||",
      hindi: "शरीर रूपी नगर का स्वामी देहधारी जीवात्मा न तो कर्म का सृजन करता है, न लोगों को कर्म करने के लिए प्रेरित करता है, न ही कर्मफल की रचना करता है। यह सब तो भौतिक प्रकृति के गुणों द्वारा ही किया जाता है।",
      english: "The embodied spirit, master of the city of his body, does not create activities, nor does he induce people to act, nor does he create the fruits of action. All this is enacted by the modes of material nature."
    },
    {
      id: "5.15",
      sanskrit: "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः |\nअज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः ||५-१५||",
      hindi: "परमेश्वर न तो किसी के पापों का ग्रहण करता है, न पुण्यों का। किन्तु सारे देहधारी जीव उस अज्ञान के कारण मोहग्रस्त रहते हैं, जो उनके वास्तविक ज्ञान को आच्छादित किये रहता है।",
      english: "Nor does the Supreme Lord assume anyone's sinful or pious activities. Embodied beings, however, are bewildered because of the ignorance which covers their real knowledge."
    },
    {
      id: "5.16",
      sanskrit: "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः |\nतेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ||५-१६||",
      hindi: "किन्तु जब कोई उस ज्ञान से प्रबुद्ध होता है जिससे अविद्या का विनाश होता है, तो उसके ज्ञान से सब कुछ वैसे ही प्रकट हो जाता है, जैसे दिन में सूर्य से सारी वस्तुएँ प्रकाशित हो जाती हैं।",
      english: "When, however, one is enlightened with the knowledge by which nescience is destroyed, then his knowledge reveals everything, as the sun lights up everything in the daytime."
    },
    {
      id: "5.17",
      sanskrit: "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः |\nगच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः ||५-१७||",
      hindi: "जब मनुष्य की बुद्धि, मन, श्रद्धा तथा शरण सब कुछ भगवान् में स्थिर हो जाते हैं, तब वह पूर्णज्ञान द्वारा समस्त कल्मष से शुद्ध होता है और इस तरह मुक्ति के पथ पर अग्रसर होता है।",
      english: "When one's intelligence, mind, faith and refuge are all fixed in the Supreme, then one becomes fully cleansed of misgivings through complete knowledge and thus proceeds straight on the path of liberation."
    },
    {
      id: "5.18",
      sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि |\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||५-१८||",
      hindi: "विनीत साधु पुरुष अपने वास्तविक ज्ञान के कारण एक विद्वान तथा विनीत ब्राह्मण, गाय, हाथी, कुत्ते तथा चाण्डाल को समान दृष्टि (समभाव) से देखते हैं।",
      english: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater [outcaste]."
    },
    {
      id: "5.19",
      sanskrit: "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः |\nनिर्दोषं हि समं ब्रह्म तस्माद् ब्रह्मणि ते स्थिताः ||५-१९||",
      hindi: "जिनके मन एकत्व तथा समता में स्थित हैं, उन्होंने जन्म तथा मृत्यु के बन्धनों को पहले ही जीत लिया है। वे ब्रह्म के समान निर्दोष हैं और सदा ब्रह्म में ही स्थित रहते हैं।",
      english: "Those whose minds are established in sameness and equanimity have already conquered the conditions of birth and death. They are flawless like Brahman, and thus they are already situated in Brahman."
    },
    {
      id: "5.20",
      sanskrit: "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् |\nस्थिरबुद्धिरसम्मूढो ब्रह्मविद् ब्रह्मणि स्थितः ||५-२०||",
      hindi: "जो व्यक्ति प्रिय वस्तु को पाकर न तो हर्षित होता है और न अप्रिय वस्तु को पाकर विचलित होता है, जो स्थिरबुद्धि है, जो मोहरहित है और जो भगवद्विद्या को जानने वाला है, वह पहले से ही ब्रह्म में स्थित रहता है।",
      english: "A person who neither rejoices upon achieving something pleasant nor laments upon obtaining something unpleasant, who is self-intelligent, who is unbewildered, and who knows the science of God, is already situated in transcendence."
    },
    {
      id: "5.21",
      sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् |\nस ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते ||५-२१||",
      hindi: "ऐसा मुक्त पुरुष भौतिक इन्द्रियसुख की ओर आकृष्ट नहीं होता, अपितु सदैव समाधि में रहकर अपने अन्तर में आनन्द का अनुभव करता है। इस प्रकार स्वरूपसिद्ध व्यक्ति परब्रह्म में एकाग्रचित्त होने के कारण असीम सुख भोगता है।",
      english: "Such a liberated person is not attracted to material sense pleasure but is always in trance, enjoying the pleasure within. In this way the self-realized person enjoys unlimited happiness, for he concentrates on the Supreme."
    },
    {
      id: "5.22",
      sanskrit: "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते |\nआद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः ||५-२२||",
      hindi: "विवेकी पुरुष दुख के कारणों में भाग नहीं लेता, जो कि भौतिक इन्द्रियों के संसर्ग से उत्पन्न होते हैं। हे कुन्तीपुत्र! ऐसे भोगों का आदि तथा अन्त होता है, अतः चतुर व्यक्ति उनमें आनन्द नहीं लेता।",
      english: "An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kunti, such pleasures have a beginning and an end, and so the wise man does not delight in them."
    },
    {
      id: "5.23",
      sanskrit: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् |\nकामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः ||५-२३||",
      hindi: "यदि इस शरीर को त्यागने के पूर्व कोई मनुष्य इन्द्रियों के वेगों को सहन करने तथा इच्छा एवं क्रोध के वेग को रोकने में समर्थ होता है, तो वह इस संसार में सुखी रह सकता है।",
      english: "Before giving up this present body, if one is able to tolerate the urges of the material senses and check the force of desire and anger, he is well situated and is happy in this world."
    },
    {
      id: "5.24",
      sanskrit: "योऽन्तःसुखोऽन्तरारामस् तथान्तर्ज्योतिरेव यः |\nस योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ||५-२४||",
      hindi: "जो मनुष्य अपने में ही आनन्दित रहता है, जो अपने में ही रमण करता है और जो अपने में ही ज्ञान के प्रकाश से युक्त है, वह योगी वास्तव में पूर्णतः मुक्त है। वह परब्रह्म में अपनी पहचान के कारण अन्ततः परब्रह्म को प्राप्त होता है।",
      english: "One whose happiness is within, who is active and rejoices within, and whose aim is inward is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme."
    },
    {
      id: "5.25",
      sanskrit: "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः |\nछिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः ||५-२५||",
      hindi: "जो लोग संशय से उत्पन्न होने वाले द्वन्द्वों से परे हैं, जिनके मन आत्म-साक्षात्कार में रत हैं, जो समस्त जीवों के कल्याण-कार्य करने में सदैव व्यस्त रहते हैं और जो समस्त पापों से रहित हैं, वे ब्रह्मनिर्वाण (मुक्ति) को प्राप्त होते हैं।",
      english: "Those who are beyond the dualities that arise from doubts, whose minds are engaged within, who are always busy working for the welfare of all living beings, and who are free from all sins achieve liberation in the Supreme."
    },
    {
      id: "5.26",
      sanskrit: "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् |\nअभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् ||५-२६||",
      hindi: "जो क्रोध तथा समस्त भौतिक इच्छाओं से रहित हैं, जो स्वरूपसिद्ध, आत्मसंयमी हैं और संसिद्धि के लिए निरन्तर प्रयास करते हैं, उनकी मुक्ति निकट भविष्य में सुनिश्चित है।",
      english: "Those who are free from anger and all material desires, who are self-realized, self-disciplined and constantly endeavoring for perfection, are assured of liberation in the Supreme in the very near future."
    },
    {
      id: "5.27-28",
      sanskrit: "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः |\nप्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ ||\nयतेन्द्रियमनोबुद्धिर् मुनिर्मोक्षपरायणः |\nविगतेच्छाभयक्रोधो यः सदा मुक्त एव सः ||",
      hindi: "समस्त इन्द्रियविषयों को बाहर करके, दृष्टि को भौंहों के मध्य केन्द्रित करके, प्राण तथा अपान वायु को नथुनों के भीतर रोककर और इस तरह मन, इन्द्रियों तथा बुद्धि को वश में करके जो मोक्ष को लक्ष्य बनाता है, वह योगी इच्छा, भय तथा क्रोध से रहित हो जाता है। जो निरन्तर इस अवस्था में रहता है, वह अवश्य ही मुक्त है।",
      english: "Shutting out all external sense objects, keeping the eyes and vision concentrated between the two eyebrows, suspending the inward and outward breaths within the nostrils, and thus controlling the mind, senses and intelligence, the transcendentalist aiming at liberation becomes free from desire, fear and anger. One who is always in this state is certainly liberated."
    },
    {
      id: "5.29",
      sanskrit: "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् |\nसुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ||५-२९||",
      hindi: "मुझे समस्त यज्ञों तथा तपस्याओं का परम भोक्ता, समस्त लोकों तथा देवताओं का परमेश्वर तथा समस्त जीवों का उपकारी एवं हितैषी जानकर मेरे भावनामृत से पूर्ण पुरुष भौतिक दुखों से शान्ति लाभ करता है।",
      english: "A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries."
    }
  ]
},
{
  chapter: 6,
  title: "Dhyāna Yoga",
  english_title: "The Yoga of Meditation",
  verses: [
    {
      id: "6.1",
      sanskrit: "श्रीभगवानुवाच |\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः |\nस सन्न्यासी च योगी च न निरग्निर्न चाक्रियः ||६-१||",
      hindi: "श्री भगवान ने कहा - जो पुरुष अपने कर्मफल के प्रति अनासक्त है और जो अपने कर्तव्य का पालन करता है, वही संन्यासी और असली योगी है। वह नहीं, जो न तो अग्नि जलाता है और न कर्म करता है।",
      english: "The Supreme Lord said: One who is unattached to the fruits of his work and who works as he is obligated is in the renounced order of life, and he is the true mystic, not he who lights no fire and performs no duty."
    },
    {
      id: "6.2",
      sanskrit: "यं सन्न्यासमिति प्राहुर्योगं तं विद्धि पाण्डव |\nन ह्यसन्न्यस्तसङ्कल्पो योगी भवति कश्चन ||६-२||",
      hindi: "हे पाण्डुपुत्र! जिसे संन्यास कहते हैं, उसे ही तुम योग अर्थात् परब्रह्म से युक्त होना जानो, क्योंकि इन्द्रियतृप्ति के लिए इच्छा को त्यागे बिना कोई कभी योगी नहीं हो सकता।",
      english: "What is called renunciation you should know to be the same as yoga, or linking oneself with the Supreme, O son of Pandu, for one can never become a yogi unless he renounces the desire for sense gratification."
    },
    {
      id: "6.3",
      sanskrit: "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते |\nयोगारूढस्य तस्यैव शमः कारणमुच्यते ||६-३||",
      hindi: "अष्टांगयोग के नव-अभ्यासी के लिए कर्म साधन कहलाता है और योगसिद्ध पुरुष के लिए समस्त भौतिक कार्यकलापों का परित्याग ही साधन कहा जाता है।",
      english: "For one who is a neophyte in the eightfold yoga system, work is said to be the means; and for one who is already elevated in yoga, cessation of all material activities is said to be the means."
    },
    {
      id: "6.4",
      sanskrit: "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते |\nसर्वसङ्कल्पसन्न्यासी योगारूढस्तदोच्यते ||६-४||",
      hindi: "जब कोई पुरुष समस्त भौतिक इच्छाओं का त्याग करके न तो इन्द्रियतृप्ति के लिए कार्य करता है और न सकाम कर्मों में प्रवृत्त होता है, तो वह योगारूढ़ कहलाता है।",
      english: "A person is said to be elevated in yoga when, having renounced all material desires, he neither acts for sense gratification nor engages in fruitive activities."
    },
    {
      id: "6.5",
      sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||६-५||",
      hindi: "मनुष्य को चाहिए कि अपने मन की सहायता से अपना उद्धार करे और अपने को नीचे न गिरने दे। यह मन बद्धजीव का मित्र भी है और शत्रु भी।",
      english: "One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well."
    },
    {
      id: "6.6",
      sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः |\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ||६-६||",
      hindi: "जिसने मन को जीत लिया है, उसके लिए मन सर्वश्रेष्ठ मित्र है, किन्तु जो ऐसा नहीं कर पाया, उसके लिए मन सबसे बड़ा शत्रु बना रहेगा।",
      english: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy."
    },
    {
      id: "6.7",
      sanskrit: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः |\nशीतोष्णसुखदुःखेषु तथा मानापमानयोः ||६-७||",
      hindi: "जिसने मन को जीत लिया है, उसने पहले ही परमात्मा को प्राप्त कर लिया है, क्योंकि उसने शान्ति प्राप्त कर ली है। ऐसे पुरुष के लिए सुख-दुख, सर्दी-गर्मी एवं मान-अपमान एक से हैं।",
      english: "For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a man happiness and distress, heat and cold, honor and dishonor are all the same."
    },
    {
      id: "6.8",
      sanskrit: "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः |\nयुक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः ||६-८||",
      hindi: "वह व्यक्ति आत्म-साक्षात्कार को प्राप्त तथा योगी कहलाता है, जो अपने अर्जित ज्ञान तथा अनुभूति से पूर्णतया सन्तुष्ट रहता है। ऐसा व्यक्ति अध्यात्म को प्राप्त तथा जितेन्द्रिय कहलाता है। वह सभी वस्तुओं को - चाहे वे कंकड़ हों, पत्थर हों या कि सोना - एकसमान देखता है।",
      english: "A person is said to be established in self-realization and is called a yogi [or mystic] when he is fully satisfied by virtue of acquired knowledge and realization. Such a person is situated in transcendence and is self-controlled. He sees everything—whether it be pebbles, stones or gold—as the same."
    },
    {
      id: "6.9",
      sanskrit: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु |\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ||६-९||",
      hindi: "जब कोई निष्कपट हितैषियों, प्रिय मित्रों, तटस्थों, मध्यस्थों, ईर्ष्यालुओं, शत्रुओं तथा मित्रों, पुण्यात्माओं एवं पापियों को समान भाव से देखता है, तो वह और भी उन्नत माना जाता है।",
      english: "A person is considered still more advanced when he regards honest well-wishers, affectionate benefactors, the neutral, mediators, the envious, friends and enemies, the pious and the sinners all with an equal mind."
    },
    {
      id: "6.10",
      sanskrit: "योगी युञ्जीत सततमात्मानं रहसि स्थितः |\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः ||६-१०||",
      hindi: "योगी को चाहिए कि वह सदैव अपने शरीर, मन तथा आत्मा को परमेश्वर में लगाए, एकान्त स्थान में रहे और बड़ी सावधानी के साथ अपने मन को वश में करे। उसे समस्त आकांक्षाओं तथा संग्रहभाव की इच्छाओं से मुक्त होना चाहिए।",
      english: "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind. He should be free from desires and feelings of possessiveness."
    },
    {
      id: "6.11-12",
      sanskrit: "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः |\nनात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ||\nतत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः |\nउपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये ||",
      hindi: "योगाभ्यास के लिए योगी को एकान्त स्थान में जाकर भूमि पर कुशा बिछा देनी चाहिए और फिर उसे मृगछाला तथा मुलायम वस्त्र से ढक देना चाहिए। आसन न तो बहुत ऊँचा हो, न बहुत नीचा। यह पवित्र स्थान में स्थित हो। योगी को चाहिए कि इस पर दृढ़तापूर्वक बैठे और मन, इन्द्रियों तथा कर्मों को वश में करते हुए तथा मन को एक बिन्दु पर स्थिर करके हृदय को शुद्ध करने के लिए योगाभ्यास करे।",
      english: "To practice yoga, one should go to a secluded place and should lay kusha grass on the ground and then cover it with a deerskin and a soft cloth. The seat should be neither too high nor too low and should be situated in a sacred place. The yogi should then sit on it very firmly and practice yoga to purify the heart by controlling his mind, senses and activities and fixing the mind on one point."
    },
    {
      id: "6.13-14",
      sanskrit: "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः |\nसम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् ||\nप्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः |\nमनः संयम्य मच्चित्तो युक्त आसीत मत्परः ||",
      hindi: "योगाभ्यासी को चाहिए कि वह अपने शरीर, गर्दन तथा सिर को सीधा रखे और नासिका के अगले सिरे पर दृष्टि लगाए। इस प्रकार वह अविचलित तथा दमित मन से, भयरहित, विषयी-जीवन से पूर्णतया मुक्त होकर अपने हृदय में मेरा चिन्तन करे और मुझे ही अपना चरम लक्ष्य बनाए।",
      english: "One should hold one's body, neck and head erect in a straight line and stare steadily at the tip of the nose. Thus, with an unagitated, subdued mind, devoid of fear, completely free from sex life, one should meditate upon Me within the heart and make Me the ultimate goal of life."
    },
    {
      id: "6.15",
      sanskrit: "युञ्जन्नेवं सदात्मानं योगी नियतमानसः |\nशान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति ||६-१५||",
      hindi: "इस प्रकार शरीर, मन तथा कर्म में निरन्तर संयम का अभ्यास करते हुए संयमित मन वाले योगी इस भौतिक अस्तित्व के समाप्त होने पर भगवद्धाम (निर्वाण) को प्राप्त करते हैं।",
      english: "Thus practicing constant control of the body, mind and activities, the mystic transcendentalist, his mind regulated, attains to the kingdom of God [or the abode of Krishna] by cessation of material existence."
    },
    {
      id: "6.16",
      sanskrit: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः |\nन चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन ||६-१६||",
      hindi: "हे अर्जुन! जो अधिक खाता है या बहुत कम खाता है, जो अधिक सोता है अथवा जो पर्याप्त नहीं सोता, उसके योगी बनने की कोई सम्भावना नहीं है।",
      english: "There is no possibility of one's becoming a yogi, O Arjuna, if one eats too much or eats too little, sleeps too much or does not sleep enough."
    },
    {
      id: "6.17",
      sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||६-१७||",
      hindi: "जो खाने, सोने, आमोद-प्रमोद तथा काम करने की आदतों में नियमित रहता है, वह योगाभ्यास द्वारा समस्त भौतिक क्लेशों को नष्ट कर सकता है।",
      english: "He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system."
    },
    {
      id: "6.18",
      sanskrit: "यदा विनियतं चित्तमात्मन्येवावतिष्ठते |\nनिःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा ||६-१८||",
      hindi: "जब योगी योगाभ्यास द्वारा अपने मानसिक कार्यकलापों को वश में कर लेता है और अध्यात्म में स्थित हो जाता है अर्थात् समस्त भौतिक इच्छाओं से रहित हो जाता है, तब वह योग में सुस्थिर कहा जाता है।",
      english: "When the yogi, by practice of yoga, disciplines his mental activities and becomes situated in transcendence—devoid of all material desires—he is said to be well established in yoga."
    },
    {
      id: "6.19",
      sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता |\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||६-१९||",
      hindi: "जिस प्रकार वायुरहित स्थान में दीपक हिलता-डुलता नहीं, उसी तरह जिस योगी का मन वश में होता है, वह आत्म-तत्त्व के ध्यान में सदैव स्थिर रहता है।",
      english: "As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self."
    },
    {
      id: "6.20-23",
      sanskrit: "यत्रोपरमते चित्तं निरुद्धं योगसेवया |\nयत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति ||\nसुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम् |\nवेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः ||\nयं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः |\nयस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ||\nतं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम् ||",
      hindi: "सिद्धि की अवस्था में, जिसे समाधि कहते हैं, मनुष्य का मन योगाभ्यास के द्वारा भौतिक मानसिक क्रियाओं से पूर्णतया संयमित हो जाता है। इस सिद्धि की विशेषता यह है कि मनुष्य शुद्ध मन से अपने को देख सकता है और अपने में आनन्द उठा सकता है। उस आनन्दमयी स्थिति में वह दिव्य इन्द्रियों द्वारा असीम दिव्यसुख में स्थित रहता है। इस तरह स्थापित मनुष्य कभी सत्य से विचलित नहीं होता और इस सुख की प्राप्ति हो जाने पर वह इससे बड़ा कोई दूसरा लाभ नहीं मानता। ऐसी स्थिति को पाकर मनुष्य बड़ी से बड़ी कठिनाइयों में भी विचलित नहीं होता। यह निस्सन्देह भौतिक संसर्ग से उत्पन्न होने वाले समस्त दुखों से वास्तविक मुक्ति है।",
      english: "In the stage of perfection called trance, or samadhi, one's mind is completely restrained from material mental activities by practice of yoga. This perfection is characterized by one's ability to see the self by the pure mind and to relish and rejoice in the self. In that joyous state, one is situated in boundless transcendental happiness, realized through transcendental senses. Established thus, one never departs from the truth, and upon gaining this he thinks there is no greater gain. Being situated in such a position, one is never shaken, even in the midst of greatest difficulty. This indeed is actual freedom from all miseries arising from material contact."
    },
    {
      id: "6.24",
      sanskrit: "स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा |\nसङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः |\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः ||६-२४||",
      hindi: "मनुष्य को चाहिए कि संकल्प तथा श्रद्धा के साथ योगाभ्यास में लगे और पथ से विचलित न हो। उसे चाहिए कि मनोधर्म से उत्पन्न समस्त इच्छाओं को निरपवाद रूप से त्याग दे और इस प्रकार मन के द्वारा सभी ओर से इन्द्रियों को वश में करे।",
      english: "One should engage oneself in the practice of yoga with determination and faith and not be deviated from the path. One should abandon, without exception, all material desires born of mental speculation and thus control all the senses on all sides by the mind."
    },
    {
      id: "6.25",
      sanskrit: "शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया |\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत् ||६-२५||",
      hindi: "धीरे-धीरे, क्रमशः, पूर्ण विश्वास पूर्वक बुद्धि के द्वारा समाधि में स्थित होना चाहिए और इस प्रकार मन को आत्मा में ही स्थित करना चाहिए तथा अन्य कुछ भी नहीं सोचना चाहिए।",
      english: "Gradually, step by step, one should become situated in trance by means of intelligence sustained by full conviction, and thus the mind should be fixed on the self alone and should think of nothing else."
    },
    {
      id: "6.26",
      sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||६-२६||",
      hindi: "मन अपनी चंचलता तथा अस्थिरता के कारण जहाँ कहीं भी विचरण करे, मनुष्य को चाहिए कि उसे वहाँ से खींचे और अपने वश में लाये।",
      english: "From wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the self."
    },
    {
      id: "6.27",
      sanskrit: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् |\nउपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ||६-२७||",
      hindi: "जिस योगी का मन मुझमें स्थिर रहता है, वह निश्चय ही परम सुख प्राप्त करता है। वह रजोगुण से परे हो जाता है, वह परमात्मा के साथ अपनी गुणात्मक एकता को समझता है और इस प्रकार अपने समस्त विगत कर्मों के फल से निवृत्त हो जाता है।",
      english: "The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is freed from all reactions to past deeds."
    },
    {
      id: "6.28",
      sanskrit: "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः |\nसुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते ||६-२८||",
      hindi: "इस प्रकार आत्मसंयमी योगी समस्त भौतिक कल्मष से मुक्त होकर भगवान् की दिव्य प्रेमाभक्ति में परमानन्द प्राप्त करता है।",
      english: "Thus the self-controlled yogi, constantly engaged in yoga practice, becomes free from all material contamination and achieves the highest stage of perfect happiness in transcendental loving service to the Lord."
    },
    {
      id: "6.29",
      sanskrit: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि |\nईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः ||६-२९||",
      hindi: "वास्तविक योगी अपने हृदय में समस्त जीवों में मुझको तथा मुझमें समस्त जीवों को देखता है। निस्सन्देह स्वरूपसिद्ध व्यक्ति मुझ परमेश्वर को सर्वत्र देखता है।",
      english: "A true yogi observes Me in all beings and also sees every being in Me. Indeed, the self-realized person sees Me, the same Supreme Lord, everywhere."
    },
    {
      id: "6.30",
      sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति |\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||६-३०||",
      hindi: "जो मुझे सर्वत्र देखता है और सब कुछ मुझमें देखता है, उसके लिए न तो मैं कभी अदृश्य होता हूँ और न वह मेरे लिए अदृश्य होता है।",
      english: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me."
    },
    {
      id: "6.31",
      sanskrit: "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः |\nसर्वथा वर्तमानोऽपि स योगी मयि वर्तते ||६-३१||",
      hindi: "जो योगी परमात्मा के रूप में प्रत्येक जीव के हृदय में स्थित मुझको जानकर मेरी भक्ति करता है, वह प्रत्येक अवस्था में मुझमें ही स्थित रहता है।",
      english: "Such a yogi, who engages in the worshipful service of the Supersoul, knowing that I and the Supersoul are one, remains always in Me in all circumstances."
    },
    {
      id: "6.32",
      sanskrit: "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन |\nसुखं वा यदि वा दुःखं स योगी परमो मतः ||६-३२||",
      hindi: "हे अर्जुन! वह पूर्ण योगी है, जो अपनी तुलना से समस्त प्राणियों को उनके सुखों तथा दुखों में वास्तविक समानता का दर्शन करता है।",
      english: "He is a perfect yogi who, by comparison to his own self, sees the true equality of all beings, in both their happiness and their distress, O Arjuna!"
    },
    {
      id: "6.33",
      sanskrit: "अर्जुन उवाच |\nयोऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन |\nएतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् ||६-३३||",
      hindi: "अर्जुन ने कहा - हे मधुसूदन! आपने जिस योगपद्धति का संक्षेप में वर्णन किया है, वह मेरे लिए अव्यावहारिक तथा असहनीय है, क्योंकि मन चंचल तथा अस्थिर है।",
      english: "Arjuna said: O Madhusudana, the system of yoga which you have summarized appears impractical and unendurable to me, for the mind is restless and unsteady."
    },
    {
      id: "6.34",
      sanskrit: "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम् |\nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ||६-३४||",
      hindi: "हे कृष्ण! चूँकि मन चंचल, उच्छृंखल, हठीला तथा अत्यन्त बलवान है, अतः मुझे इसे वश में करना वायु को वश में करने से भी अधिक कठिन लगता है।",
      english: "For the mind is restless, turbulent, obstinate and very strong, O Krishna, and to subdue it, I think, is more difficult than controlling the wind."
    },
    {
      id: "6.35",
      sanskrit: "श्रीभगवानुवाच |\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम् |\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||६-३५||",
      hindi: "श्री भगवान ने कहा - हे महाबाहु कुन्तीपुत्र! चंचल मन को वश में करना निस्सन्देह अत्यन्त कठिन है, किन्तु उपयुक्त अभ्यास द्वारा तथा विरक्ति द्वारा ऐसा सम्भव है।",
      english: "Lord Sri Krishna said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by suitable practice and by detachment."
    },
    {
      id: "6.36",
      sanskrit: "असंयतात्मना योगो दुष्प्राप इति मे मतिः |\nवश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः ||६-३६||",
      hindi: "जिसका मन उच्छृंखल है, उसके लिए आत्म-साक्षात्कार कठिन कार्य होता है। किन्तु जिसका मन संयमित है और जो समुचित उपाय करता है, उसकी सफलता ध्रुव है। ऐसा मेरा मत है।",
      english: "For one whose mind is unbridled, self-realization is difficult work. But he whose mind is controlled and who strives by appropriate means is assured of success. That is My opinion."
    },
    {
      id: "6.37",
      sanskrit: "अर्जुन उवाच |\nअयतिः श्रद्धयोपेतो योगाच्चलितमानसः |\nअप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति ||६-३७||",
      hindi: "अर्जुन ने कहा - हे कृष्ण! उस असफल योगी की गति क्या है, जो प्रारम्भ में श्रद्धापूर्वक आत्म-साक्षात्कार की विधि ग्रहण करता है, किन्तु बाद में भौतिकता के कारण उससे विचलित हो जाता है और योग-सिद्धि को प्राप्त नहीं कर पाता?",
      english: "Arjuna said: O Krishna, what is the destination of the unsuccessful transcendentalist, who in the beginning takes to the process of self-realization with faith but who later desists due to worldly-mindedness and thus does not attain perfection in mysticism?"
    },
    {
      id: "6.38",
      sanskrit: "कच्चिन्नोभयविभ्रष्टश् छिन्नाभ्रमिव नश्यति |\nअप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि ||६-३८||",
      hindi: "हे महाबाहु कृष्ण! क्या ब्रह्म-प्राप्ति के मार्ग से भ्रष्ट व्यक्ति आध्यात्मिक तथा भौतिक दोनों ही सफलताओं से च्युत नहीं होता और छिन्न-भिन्न बादल की भाँति विनष्ट नहीं हो जाता, जिसके ফলে उसके लिए किसी लोक में कोई स्थान नहीं रहता?",
      english: "O mighty-armed Krishna, does not such a man, who is bewildered from the path of transcendence, fall away from both spiritual and material success and perish like a riven cloud, with no position in any sphere?"
    },
    {
      id: "6.39",
      sanskrit: "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः |\nत्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते ||६-३९||",
      hindi: "हे कृष्ण! यही मेरा सन्देह है और मैं आपसे इसे पूर्णतया दूर करने की प्रार्थना कर रहा हूँ। आपके अतिरिक्त अन्य कोई ऐसा नहीं है, जो इस सन्देह को नष्ट कर सके।",
      english: "This is my doubt, O Krishna, and I ask You to dispel it completely. But for You, no one is to be found who can destroy this doubt."
    },
    {
      id: "6.40",
      sanskrit: "श्रीभगवानुवाच |\nपार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते |\nन हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति ||६-४०||",
      hindi: "श्री भगवान ने कहा - हे पृथापुत्र! कल्याण-कार्यों में निरत योगी का न तो इस लोक में और न परलोक में ही विनाश होता है। हे मित्र! भलाई करने वाला कोई भी व्यक्ति बुराई से पराजित नहीं होता।",
      english: "The Supreme Personality of Godhead said: Son of Pritha, a transcendentalist engaged in auspicious activities does not meet with destruction either in this world or in the spiritual world; one who does good, My friend, is never overcome by evil."
    },
    {
      id: "6.41",
      sanskrit: "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः |\nशुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते ||६-४१||",
      hindi: "असफल योगी पवित्र आत्माओं के लोकों में अनेकानेक वर्षों तक भोग करने के बाद या तो सदाचारी पुरुषों के परिवार में या धनवानों के कुल में जन्म लेता है।",
      english: "The unsuccessful yogi, after many, many years of enjoyment on the planets of the pious living entities, is born into a family of righteous people, or into a family of rich aristocracy."
    },
    {
      id: "6.42",
      sanskrit: "अथवा योगिनामेव कुले भवति धीमताम् |\nएतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ||६-४२||",
      hindi: "अथवा (यदि दीर्घकाल तक योग करने के बाद असफल रहे तो) वह ऐसे योगियों के कुल में जन्म लेता है, जो परम बुद्धिमान हैं। निस्सन्देह इस संसार में ऐसा जन्म दुर्लभ है।",
      english: "Or [if unsuccessful after long practice of yoga] he takes his birth in a family of transcendentalists who are surely great in wisdom. Certainly, such a birth is rare in this world."
    },
    {
      id: "6.43",
      sanskrit: "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् |\nयतते च ततो भूयः संसिद्धौ कुरुनन्दन ||६-४३||",
      hindi: "हे कुरुनन्दन! ऐसा जन्म पाकर वह अपने पूर्वजन्म की दैवी चेतना को पुनः प्राप्त करता है और पूर्ण सफलता प्राप्त करने के उद्देश्य से वह आगे उन्नति करने का प्रयास करता है।",
      english: "On taking such a birth, he revives the divine consciousness of his previous life, and he again tries to make further progress in order to achieve complete success, O son of Kuru."
    },
    {
      id: "6.44",
      sanskrit: "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः |\nजिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते ||६-४४||",
      hindi: "अपने पूर्वजन्म की दैवी चेतना के प्रभाव से वह स्वतः ही योग के नियमों की ओर आकर्षित हो जाता है। ऐसा जिज्ञासु योगी शास्त्रों के अनुष्ठानों से परे स्थित होता है।",
      english: "By virtue of the divine consciousness of his previous life, he automatically becomes attracted to the yogic principles—even without seeking them. Such an inquisitive transcendentalist stands always above the ritualistic principles of the scriptures."
    },
    {
      id: "6.45",
      sanskrit: "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः |\nअनेकजन्मसंसिद्धस् ततो याति परां गतिम् ||६-४५||",
      hindi: "और जब योगी समस्त कल्मष से शुद्ध होकर सच्ची निष्ठा से आगे उन्नति करने का प्रयास करता है, तो अन्ततोगत्वा अनेकानेक जन्मों के अभ्यास के पश्चात् सिद्धि लाभ करके वह परम गन्तव्य को प्राप्त करता है।",
      english: "And when the yogi engages himself with sincere endeavor in making further progress, being washed of all contaminations, then ultimately, achieving perfection after many, many births of practice, he attains the supreme goal."
    },
    {
      id: "6.46",
      sanskrit: "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः |\nकर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ||६-४६||",
      hindi: "योगी तपस्वी से, ज्ञानी से तथा सकाम कर्मी से बढ़कर होता है। अतः हे अर्जुन! तुम सभी प्रकार से योगी बनो।",
      english: "A yogi is greater than the ascetic, greater than the empiricist and greater than the fruitive worker. Therefore, O Arjuna, in all circumstances, be a yogi."
    },
    {
      id: "6.47",
      sanskrit: "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना |\nश्रद्धावान्भजते यो मां स मे युक्ततमो मतः ||६-४७||",
      hindi: "और समस्त योगियों में से जो योगी अत्यन्त श्रद्धापूर्वक मेरे परायण होकर अपने अन्तःकरण में मेरे विषय में सोचता है और मेरी दिव्य प्रेमाभक्ति करता है, वह योग में मुझसे परम अन्तरंग रूप में युक्त रहता है और सबों में श्रेष्ठ है। यही मेरा मत है।",
      english: "And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me—he is the most intimately united with Me in yoga and is the highest of all. That is My opinion."
    }
  ]
},
 {
  chapter: 7,
  title: "Jñāna Vijñāna Yoga",
  english_title: "The Yoga of Knowledge and Realization",
  verses: [
    {
      id: "7.1",
      sanskrit: "श्रीभगवानुवाच |\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः |\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु ||७-१||",
      hindi: "श्री भगवान ने कहा - हे पृथापुत्र! अब सुनो कि तुम किस तरह मेरी भावना से पूर्ण होकर और मन को मुझमें आसक्त करके योगाभ्यास करते हुए मुझे पूर्णतया संशयरहित जान सकते हो।",
      english: "The Supreme Personality of Godhead said: Now hear, O son of Pritha, how by practicing yoga in full consciousness of Me, with mind attached to Me, you can know Me in full, free from doubt."
    },
    {
      id: "7.2",
      sanskrit: "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः |\nयज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते ||७-२||",
      hindi: "अब मैं तुमसे पूर्ण रूप से व्यावहारिक तथा दिव्य ज्ञान कहूँगा। इसे जान लेने पर तुम्हें जानने के लिए और कुछ भी शेष नहीं रहेगा।",
      english: "I shall now declare unto you in full this knowledge, both phenomenal and numinous. This being known, nothing further shall remain for you to know."
    },
    {
      id: "7.3",
      sanskrit: "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये |\nयततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः ||७-३||",
      hindi: "हजारों मनुष्यों में से कोई एक सिद्धि के लिए प्रयत्नशील होता है और इस तरह सिद्धि प्राप्त करने वालों में से विरला ही कोई मुझे वास्तव में जान पाता है।",
      english: "Out of many thousands among men, one may endeavor for perfection, and of those who have achieved perfection, hardly one knows Me in truth."
    },
    {
      id: "7.4",
      sanskrit: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च |\nअहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा ||७-४||",
      hindi: "पृथ्वी, जल, अग्नि, वायु, आकाश, मन, बुद्धि तथा अहंकार - ये आठ प्रकार से विभक्त मेरी भिन्ना (अपरा) प्रकृतियाँ हैं।",
      english: "Earth, water, fire, air, ether, mind, intelligence and false ego—all together these eight constitute My separated material energies."
    },
    {
      id: "7.5",
      sanskrit: "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् |\nजीवभूतां महाबाहो ययेदं धार्यते जगत् ||७-५||",
      hindi: "हे महाबाहु! इनके अतिरिक्त मेरी एक अन्य परा शक्ति है जो उन जीवों से युक्त है, जो इस भौतिक अपरा प्रकृति के साधनों का विदोहन कर रहे हैं।",
      english: "Besides these, O mighty-armed Arjuna, there is another, superior energy of Mine, which comprises the living entities who are exploiting the resources of this material, inferior nature."
    },
    {
      id: "7.6",
      sanskrit: "एतद्योनीनि भूतानि सर्वाणीत्युपधारय |\nअहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा ||७-६||",
      hindi: "सारे प्राणी इन दोनों शक्तियों के संयोग से उत्पन्न होते हैं। और यह जान लो कि इस जगत् में जो भी भौतिक तथा आध्यात्मिक है, उसकी उत्पत्ति तथा प्रलय मैं ही हूँ।",
      english: "All created beings have their source in these two natures. Of all that is material and all that is spiritual in this world, know for certain that I am both the origin and the dissolution."
    },
    {
      id: "7.7",
      sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय |\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ||७-७||",
      hindi: "हे धनञ्जय! मुझसे श्रेष्ठ कोई सत्य नहीं है। जिस प्रकार मोती धागे में गुँथे रहते हैं, उसी प्रकार सब कुछ मुझ पर ही आश्रित है।",
      english: "O conqueror of wealth, there is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread."
    },
    {
      id: "7.8",
      sanskrit: "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः |\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु ||७-८||",
      hindi: "हे कुन्तीपुत्र! मैं जल का स्वाद हूँ, सूर्य तथा चन्द्रमा का प्रकाश हूँ, वैदिक मन्त्रों में ओंकार हूँ, आकाश में ध्वनि हूँ तथा मनुष्य में सामर्थ्य हूँ।",
      english: "O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable om in the Vedic mantras; I am the sound in ether and ability in man."
    },
    {
      id: "7.9",
      sanskrit: "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ |\nजीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु ||७-९||",
      hindi: "मैं पृथ्वी की असली सुगन्ध हूँ और अग्नि की ऊष्मा हूँ। मैं समस्त जीवों का जीवन तथा तपस्वियों का तप हूँ।",
      english: "I am the original fragrance of the earth, and I am the heat in fire. I am the life of all that lives, and I am the penances of all ascetics."
    },
    {
      id: "7.10",
      sanskrit: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् |\nबुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम् ||७-१०||",
      hindi: "हे पार्थ! यह जान लो कि मैं ही समस्त जीवों का आदि बीज हूँ, मैं बुद्धिमानों की बुद्धि तथा समस्त तेजस्वी पुरुषों का तेज हूँ।",
      english: "O son of Pritha, know that I am the original seed of all existences, the intelligence of the intelligent, and the prowess of all powerful men."
    },
    {
      id: "7.11",
      sanskrit: "बलं बलवतां चाहं कामरागविवर्जितम् |\nधर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ ||७-११||",
      hindi: "हे भरतश्रेष्ठ! मैं बलवानों का कामनाओं तथा इच्छा से रहित बल हूँ। मैं वह काम हूँ जो धर्म के विरुद्ध नहीं है।",
      english: "I am the strength of the strong, devoid of passion and desire. I am sex life which is not contrary to religious principles, O lord of the Bharatas [Arjuna]."
    },
    {
      id: "7.12",
      sanskrit: "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये |\nमत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि ||७-१२||",
      hindi: "तुम जान लो कि मेरी शक्ति द्वारा सारे गुण प्रकट होते हैं, चाहे वे सत्त्वगुण हों, रजोगुण हों या तमोगुण। एक प्रकार से मैं सब कुछ हूँ, किन्तु हूँ स्वतन्त्र। मैं प्रकृति के गुणों के अधीन नहीं हूँ, अपितु वे मेरे अधीन हैं।",
      english: "Know that all states of being—be they of goodness, passion or ignorance—are manifested by My energy. I am, in one sense, everything, but I am independent. I am not under the modes of material nature, for they, on the contrary, are within Me."
    },
    {
      id: "7.13",
      sanskrit: "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत् |\nमोहितं नाभिजानाति मामेभ्यः परमव्ययम् ||७-१३||",
      hindi: "तीन गुणों (सत्त्व, रज तथा तम) के द्वारा मोहग्रस्त यह सारा संसार मुझ गुणातीत तथा अविनाशी को नहीं जानता।",
      english: "Deluded by the three modes [goodness, passion and ignorance], the whole world does not know Me, who am above the modes and inexhaustible."
    },
    {
      id: "7.14",
      sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया |\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ||७-१४||",
      hindi: "प्रकृति के तीन गुणों वाली मेरी इस दैवी शक्ति को पार कर पाना कठिन है। किन्तु जो मेरे शरणागत हो जाते हैं, वे सरलता से इसे पार कर जाते हैं।",
      english: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it."
    },
    {
      id: "7.15",
      sanskrit: "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः |\nमाययापहृतज्ञाना आसुरं भावमाश्रिताः ||७-१५||",
      hindi: "जो निपट मूर्ख हैं, जो मनुष्यों में अधम हैं, जिनका ज्ञान माया द्वारा हर लिया गया है तथा जो असुरों की नास्तिक प्रकृति को धारण करने वाले हैं, ऐसे दुष्ट मेरी शरण ग्रहण नहीं करते।",
      english: "Those miscreants who are grossly foolish, who are lowest among mankind, whose knowledge is stolen by illusion, and who partake of the atheistic nature of demons do not surrender unto Me."
    },
    {
      id: "7.16",
      sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन |\nआर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ ||७-१६||",
      hindi: "हे भरतश्रेष्ठ! चार प्रकार के पुण्य आत्मा मेरी भक्ति करते हैं - आर्त, जिज्ञासु, अर्थार्थी तथा ज्ञानी।",
      english: "O best among the Bharatas, four kinds of pious men begin to render devotional service unto Me—the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute."
    },
    {
      id: "7.17",
      sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते |\nप्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः ||७-१७||",
      hindi: "इनमें से जो परमज्ञानी है और शुद्धभक्ति में लगा रहता है, वह सर्वश्रेष्ठ है, क्योंकि मैं उसे अत्यन्त प्रिय हूँ और वह मुझे प्रिय है।",
      english: "Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to Me."
    },
    {
      id: "7.18",
      sanskrit: "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम् |\nआस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम् ||७-१८||",
      hindi: "निस्सन्देह ये सब उदारचेता व्यक्ति हैं, किन्तु जो मेरे ज्ञान को प्राप्त है, उसे मैं अपने ही समान मानता हूँ। वह मेरी दिव्य सेवा में तत्पर रहकर मुझ सर्वोच्च लक्ष्य को निश्चित रूप से प्राप्त करता है।",
      english: "All these devotees are undoubtedly magnanimous souls, but he who is situated in knowledge of Me I consider to be just like My own self. Being engaged in My transcendental service, he is sure to attain Me, the highest and most perfect goal."
    },
    {
      id: "7.19",
      sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते |\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः ||७-१९||",
      hindi: "अनेक जन्म-जन्मान्तर के बाद जिसे सचमुच ज्ञान होता है, वह मुझको समस्त कारणों का कारण जानकर मेरी शरण में आता है। ऐसा महात्मा अत्यन्त दुर्लभ होता है।",
      english: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare."
    },
    {
      id: "7.20",
      sanskrit: "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः |\nतं तं नियममास्थाय प्रकृत्या नियताः स्वया ||७-२०||",
      hindi: "जिनकी बुद्धि भौतिक इच्छाओं द्वारा मारी गई है, वे देवताओं की शरण में जाते हैं और वे अपने-अपने स्वभाव के अनुसार पूजा के विशेष विधि-विधानों का पालन करते हैं।",
      english: "Those whose intelligence has been stolen by material desires surrender unto demigods and follow the particular rules and regulations of worship according to their own natures."
    },
    {
      id: "7.21",
      sanskrit: "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति |\nतस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम् ||७-२१||",
      hindi: "मैं प्रत्येक जीव के हृदय में परमात्मा स्वरूप स्थित हूँ। जैसे ही कोई किसी देवता की पूजा करने की इच्छा करता है, मैं उसकी श्रद्धा को उसी विशेष देवता के प्रति स्थिर करता हूँ।",
      english: "I am in everyone's heart as the Supersoul. As soon as one desires to worship some demigod, I make his faith steady so that he can devote himself to that particular deity."
    },
    {
      id: "7.22",
      sanskrit: "स तया श्रद्धया युक्तस्तस्याराधनमीहते |\nलभते च ततः कामान्मयैव विहितान्हि तान् ||७-२२||",
      hindi: "ऐसी श्रद्धा से समन्वित वह देवता विशेष की पूजा करने का यत्न करता है और अपनी इच्छा की पूर्ति करता है। किन्तु वास्तविकता तो यह है कि ये सारे लाभ केवल मेरे द्वारा ही प्रदत्त हैं।",
      english: "Endowed with such a faith, he endeavors to worship a particular demigod and obtains his desires. But in actuality these benefits are bestowed by Me alone."
    },
    {
      id: "7.23",
      sanskrit: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम् |\nदेवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि ||७-२३||",
      hindi: "अल्पबुद्धि वाले व्यक्ति देवताओं की पूजा करते हैं और उन्हें प्राप्त होने वाले फल सीमित तथा क्षणिक होते हैं। देवताओं की पूजा करने वाले देवलोक को जाते हैं, किन्तु मेरे भक्त अन्ततः मेरे परमधाम को प्राप्त होते हैं।",
      english: "Men of small intelligence worship the demigods, and their fruits are limited and temporary. Those who worship the demigods go to the planets of the demigods, but My devotees ultimately reach My supreme planet."
    },
    {
      id: "7.24",
      sanskrit: "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः |\nपरं भावमजानन्तो ममाव्ययमनुत्तमम् ||७-२४||",
      hindi: "बुद्धिहीन मनुष्य मुझको ठीक से न जानने के कारण सोचते हैं कि मैं (भगवान् कृष्ण) पहले निराकार था और अब मैंने इस स्वरूप को धारण किया है। वे अपने अल्पज्ञान के कारण मेरी अविनाशी तथा सर्वोच्च प्रकृति को नहीं जान पाते।",
      english: "Unintelligent men, who do not know Me perfectly, think that I, the Supreme Personality of Godhead, Krishna, was impersonal before and have now assumed this personality. Due to their small knowledge, they do not know My higher nature, which is imperishable and supreme."
    },
    {
      id: "7.25",
      sanskrit: "नाहं प्रकाशः सर्वस्य योगमायासमावृतः |\nमूढोऽयं नाभिजानाति लोको मामजमव्ययम् ||७-२५||",
      hindi: "मैं मूर्खों तथा अल्पज्ञों के लिए कभी भी प्रकट नहीं हूँ। उनके लिए तो मैं अपनी अन्तरंगा शक्ति (योगमाया) द्वारा आच्छादित रहता हूँ, अतः वे यह नहीं जान पाते कि मैं अजन्मा तथा अविनाशी हूँ।",
      english: "I am never manifest to the foolish and unintelligent. For them I am covered by My internal potency, and therefore they do not know that I am unborn and infallible."
    },
    {
      id: "7.26",
      sanskrit: "वेदाहं समतीतानि वर्तमानानि चार्जुन |\nभविष्याणि च भूतानि मां तु वेद न कश्चन ||७-२६||",
      hindi: "हे अर्जुन! श्री भगवान होने के नाते मैं जो कुछ भूतकाल में घटित हो चुका है, जो वर्तमान में घटित हो रहा है और जो भविष्य में होने वाला है, वह सब कुछ जानता हूँ। मैं समस्त जीवों को भी जानता हूँ, किन्तु मुझे कोई नहीं जानता।",
      english: "O Arjuna, as the Supreme Personality of Godhead, I know everything that has happened in the past, all that is happening in the present, and all things that are yet to come. I also know all living entities; but Me no one knows."
    },
    {
      id: "7.27",
      sanskrit: "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत |\nसर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप ||७-२७||",
      hindi: "हे भरतवंशी! हे शत्रुविजेता! समस्त जीव जन्म से ही इच्छा तथा घृणा से उत्पन्न द्वन्द्वों से मोहग्रस्त होकर मोह को प्राप्त होते हैं।",
      english: "O scion of Bharata, O conqueror of the foe, all living entities are born into delusion, bewildered by the dualities arising from desire and hate."
    },
    {
      id: "7.28",
      sanskrit: "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम् |\nते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः ||७-२८||",
      hindi: "जिन मनुष्यों ने पूर्वजन्मों में तथा इस जन्म में पुण्यकर्म किये हैं और जिनके पापकर्मों का पूर्णतया उच्छेदन हो चुका होता है, वे मोह के द्वन्द्वों से मुक्त हो जाते हैं और संकल्पपूर्वक मेरी सेवा में तत्पर होते हैं।",
      english: "Persons who have acted piously in previous lives and in this life and whose sinful actions are completely eradicated are freed from the dualities of delusion, and they engage themselves in My service with determination."
    },
    {
      id: "7.29",
      sanskrit: "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये |\nते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम् ||७-२९||",
      hindi: "जो बुद्धिमान व्यक्ति वृद्धावस्था तथा मृत्यु से मुक्ति पाने का प्रयत्न करते हैं, वे भक्तिपूर्वक मेरी शरण ग्रहण करते हैं। वे वास्तव में ब्रह्म हैं क्योंकि वे दिव्य कर्मों के विषय में पूरी तरह से जानते हैं।",
      english: "Intelligent persons who are endeavoring for liberation from old age and death take refuge in Me in devotional service. They are actually Brahman because they entirely know everything about transcendental activities."
    },
    {
      id: "7.30",
      sanskrit: "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः |\nप्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः ||७-३०||",
      hindi: "जो मुझ परमेश्वर को मेरी पूर्ण चेतना में रहकर मुझे जगत का, देवताओं का तथा समस्त यज्ञविधियों का नियामक जानते हैं, वे अपनी मृत्यु के समय भी मुझ भगवान् को जान और समझ सकते हैं।",
      english: "Those in full consciousness of Me, who know Me, the Supreme Lord, to be the governing principle of the material manifestation, of the demigods, and of all methods of sacrifice, can understand and know Me, the Supreme Personality of Godhead, even at the time of death."
    }
  ]
},
{
  chapter: 8,
  title: "Akṣara Brahma Yoga",
  english_title: "The Yoga of the Imperishable Brahman",
  verses: [
    {
      id: "8.1",
      sanskrit: "अर्जुन उवाच |\nकिं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम |\nअधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते ||८-१||",
      hindi: "अर्जुन ने पूछा - हे पुरुषोत्तम! ब्रह्म क्या है? आत्मा क्या है? सकाम कर्म क्या है? यह भौतिक जगत क्या है? तथा देवता क्या हैं? कृपा करके यह सब बताइए।",
      english: "Arjuna inquired: O my Lord, O Supreme Person, what is Brahman? What is the self? What are fruitive activities? What is this material manifestation? And what are the demigods? Please explain this to me."
    },
    {
      id: "8.2",
      sanskrit: "अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन |\nप्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः ||८-२||",
      hindi: "हे मधुसूदन! यज्ञ का स्वामी कौन है और वह शरीर में कैसे रहता है? और मृत्यु के समय भक्ति में लगे रहने वाले आपको कैसे जान पाते हैं?",
      english: "Who is the Lord of sacrifice, and how does He live in the body, O Madhusudana? And how can those engaged in devotional service know You at the time of death?"
    },
    {
      id: "8.3",
      sanskrit: "श्रीभगवानुवाच |\nअक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते |\nभूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः ||८-३||",
      hindi: "श्री भगवान ने कहा - अविनाशी और दिव्य जीव ब्रह्म कहलाता है और उसका नित्य स्वभाव अध्यात्म (आत्म) कहलाता है। जीवों के भौतिक शरीर से सम्बन्धित गतिविधि कर्म या सकाम कर्म कहलाती है।",
      english: "The Supreme Personality of Godhead said: The indestructible, transcendental living entity is called Brahman, and his eternal nature is called adhyatma, the self. Action pertaining to the development of the material bodies of the living entities is called karma, or fruitive activities."
    },
    {
      id: "8.4",
      sanskrit: "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम् |\nअधियज्ञोऽहमेवात्र देहे देहभृतां वर ||८-४||",
      hindi: "हे देहधारियों में श्रेष्ठ! निरन्तर परिवर्तनशील यह भौतिक प्रकृति अधिभूत कहलाती है। भगवान् का विराट रूप, जिसमें सूर्य तथा चन्द्र जैसे समस्त देवता सम्मिलित हैं, अधिदैव कहलाता है। तथा प्रत्येक देहधारी के हृदय में परमात्मा स्वरूप स्थित मैं (श्रीकृष्ण) अधियज्ञ (यज्ञ का स्वामी) कहलाता हूँ।",
      english: "O best of the embodied beings, the physical nature, which is constantly changing, is called adhibhuta [the material manifestation]. The universal form of the Lord, which includes all the demigods, like the sun and moon, is called adhidaiva. And I, the Supreme Lord, represented as the Supersoul in the heart of every embodied being, am called adhiyajna [the Lord of sacrifice]."
    },
    {
      id: "8.5",
      sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् |\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ||८-५||",
      hindi: "और जीवन के अन्त में जो केवल मेरा स्मरण करते हुए शरीर का त्याग करता है, वह तुरन्त मेरे स्वभाव को प्राप्त करता है। इसमें रंचमात्र भी सन्देह नहीं है।",
      english: "And whoever, at the end of his life, quits his body, remembering Me alone, at once attains My nature. Of this there is no doubt."
    },
    {
      id: "8.6",
      sanskrit: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् |\nतं तमेवैति कौन्तेय सदा तद्भावभावितः ||८-६||",
      hindi: "हे कुन्तीपुत्र! शरीर त्यागते समय मनुष्य जिस-जिस भाव का स्मरण करता है, वह उस भाव को निश्चित रूप से प्राप्त होता है।",
      english: "Whatever state of being one remembers when he quits his body, O son of Kunti, that state he will attain without fail."
    },
    {
      id: "8.7",
      sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च |\nमय्यर्पितमनोबुद्धिर् मामेवैष्यस्यसंशयम् ||८-७||",
      hindi: "अतः हे अर्जुन! तुम्हें सदैव कृष्ण रूप में मेरा चिन्तन करना चाहिए और साथ ही युद्ध करने के कर्तव्य को भी पूरा करना चाहिए। अपने कर्मों को मुझे समर्पित करके तथा अपने मन एवं बुद्धि को मुझमें स्थिर करके तुम निश्चित रूप से मुझे प्राप्त कर सकोगे।",
      english: "Therefore, Arjuna, you should always think of Me in the form of Krishna and at the same time carry out your prescribed duty of fighting. With your activities dedicated to Me and your mind and intelligence fixed on Me, you will attain Me without doubt."
    },
    {
      id: "8.8",
      sanskrit: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना |\nपरमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ||८-८||",
      hindi: "हे पार्थ! जो व्यक्ति मुझ परमेश्वर का ध्यान करने में अपना मन निरन्तर लगाये रखकर अविचलित भाव से मेरा स्मरण करता है, वह मुझको अवश्य प्राप्त होता है।",
      english: "He who meditates on Me as the Supreme Personality of Godhead, his mind constantly engaged in remembering Me, undeviated from the path, he, O Partha, is sure to reach Me."
    },
    {
      id: "8.9",
      sanskrit: "कविं पुराणमनुशासितारम् अणोरणीयांसमनुस्मरेद्यः |\nसर्वस्य धातारमचिन्त्यरूपम् आदित्यवर्णं तमसः परस्तात् ||८-९||",
      hindi: "मनुष्य को चाहिए कि परमपुरुष का ध्यान सर्वज्ञ, पुरातन, नियन्ता, लघुतम से भी लघुतर, प्रत्येक के पालनकर्ता, समस्त भौतिकबुद्धि से परे, अचिन्त्य तथा नित्य पुरुष के रूप में करे। वे सूर्य की भाँति तेजस्वी हैं और इस भौतिक प्रकृति से परे, दिव्य हैं।",
      english: "One should meditate upon the Supreme Person as the one who knows everything, as He who is the oldest, who is the controller, who is smaller than the smallest, who is the maintainer of everything, who is beyond all material conception, who is inconceivable, and who is always a person. He is luminous like the sun, and He is transcendental, beyond this material nature."
    },
    {
      id: "8.10",
      sanskrit: "प्रयाणकाले मनसाचलेन भक्त्या युक्तो योगबलेन चैव |\nभ्रुवोर्मध्ये प्राणमावेश्य सम्यक् स तं परं पुरुषमुपैति दिव्यम् ||८-१०||",
      hindi: "मृत्यु के समय जो व्यक्ति अपने प्राण को भौंहों के मध्य स्थिर कर लेता है और योगशक्ति के द्वारा अविचलित मन से पूर्णभक्ति के साथ परमेश्वर के स्मरण में अपने को लगाता है, वह निश्चित रूप से भगवान् को प्राप्त होता है।",
      english: "One who, at the time of death, fixes his life air between the eyebrows and, by the strength of yoga, engages himself in remembering the Supreme Lord with full devotion, will certainly attain to the Supreme Personality of Godhead."
    },
    {
      id: "8.11",
      sanskrit: "यदक्षरं वेदविदो वदन्ति विशन्ति यद्यतयो वीतरागाः |\nयदिच्छन्तो ब्रह्मचर्यं चरन्ति तत्ते पदं सङ्ग्रहेण प्रवक्ष्ये ||८-११||",
      hindi: "जो वेदों के ज्ञाता हैं, जो ओंकार का उच्चारण करते हैं और जो संन्यास आश्रम के बड़े-बड़े मुनि हैं, वे ब्रह्म में प्रवेश करते हैं। ऐसी सिद्धि की इच्छा करने वाले ब्रह्मचर्य व्रत का अभ्यास करते हैं। अब मैं तुम्हें यह विधि बताऊँगा, जिससे कोई भी व्यक्ति मुक्ति-लाभ कर सकता है।",
      english: "Persons who are learned in the Vedas, who utter omkara and who are great sages in the renounced order enter into Brahman. Desiring such perfection, one practices celibacy. I shall now briefly explain to you this process by which one may attain salvation."
    },
    {
      id: "8.12",
      sanskrit: "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च |\nमूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम् ||८-१२||",
      hindi: "समस्त ऐन्द्रिय क्रियाओं से विरक्ति को योग की स्थिति (योग-धारणा) कहा जाता है। इन्द्रियों के समस्त द्वारों को बन्द करके तथा मन को हृदय में और प्राणवायु को सिर पर केन्द्रित करके मनुष्य अपने को योग में स्थापित करता है।",
      english: "The yogic situation is that of detachment from all sensual engagements. Closing all the doors of the senses and fixing the mind on the heart and the life air at the top of the head, one establishes himself in yoga."
    },
    {
      id: "8.13",
      sanskrit: "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन् |\nयः प्रयाति त्यजन्देहं स याति परमां गतिम् ||८-१३||",
      hindi: "इस योगाभ्यास में स्थित होकर तथा अक्षरों के परम संयोग (ओंकार) का उच्चारण करते हुए यदि कोई भगवान् का चिन्तन करता हुआ शरीर त्यागता है, तो वह निश्चित रूप से आध्यात्मिक लोकों को जाता है।",
      english: "After being situated in this yoga practice and vibrating the sacred syllable om, the supreme combination of letters, if one thinks of the Supreme Personality of Godhead and quits his body, he will certainly reach the spiritual planets."
    },
    {
      id: "8.14",
      sanskrit: "अनन्यचेताः सततं यो मां स्मरति नित्यशः |\nतस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः ||८-१४||",
      hindi: "हे अर्जुन! जो अनन्य भाव से निरन्तर मेरा स्मरण करता है, उसके लिए मैं सुलभ हूँ, क्योंकि वह मेरी भक्ति में प्रवृत्त रहता है।",
      english: "For one who always remembers Me without deviation, I am easy to obtain, O son of Pritha, because of his constant engagement in devotional service."
    },
    {
      id: "8.15",
      sanskrit: "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम् |\nनाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः ||८-१५||",
      hindi: "मुझे प्राप्त करके महापुरुष, जो भक्तियोगी हैं, कभी भी दुखों से पूर्ण इस अनित्य जगत् में नहीं लौटते, क्योंकि उन्हें परम सिद्धि प्राप्त हो चुकी होती है।",
      english: "After attaining Me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection."
    },
    {
      id: "8.16",
      sanskrit: "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन |\nमामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते ||८-१६||",
      hindi: "इस भौतिक जगत् में सर्वोच्च लोक से लेकर निम्नतम सारे लोक दुखों के घर हैं, जहाँ जन्म तथा मरण का चक्कर लगा रहता है। किन्तु हे कुन्तीपुत्र! जो मेरे धाम को प्राप्त कर लेता है, वह फिर कभी जन्म नहीं लेता।",
      english: "From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode, O son of Kunti, never takes birth again."
    },
    {
      id: "8.17",
      sanskrit: "सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः |\nरात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ||८-१७||",
      hindi: "मानवीय गणना के अनुसार एक हजार युग मिलकर ब्रह्मा का एक दिन बनता है। और इतनी ही बड़ी ब्रह्मा की रात्रि भी होती है।",
      english: "By human calculation, a thousand ages taken together form the duration of Brahma's one day. And such also is the duration of his night."
    },
    {
      id: "8.18",
      sanskrit: "अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे |\nरात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके ||८-१८||",
      hindi: "ब्रह्मा के दिन के प्रारम्भ में सारे जीव अव्यक्त अवस्था से व्यक्त होते हैं और फिर जब रात्रि आती है तो वे पुनः अव्यक्त में विलीन हो जाते हैं।",
      english: "At the beginning of Brahma's day, all living entities become manifest from the unmanifest state, and thereafter, when the night falls, they are merged into the unmanifest again."
    },
    {
      id: "8.19",
      sanskrit: "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते |\nरात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे ||८-१९||",
      hindi: "हे पार्थ! जब-जब ब्रह्मा का दिन आता है तो सारे जीव प्रकट होते हैं और ब्रह्मा की रात्रि होते ही वे असहाय होकर विलीन हो जाते हैं।",
      english: "Again and again, when Brahma's day arrives, all living entities come into being, and with the arrival of Brahma's night they are helplessly annihilated."
    },
    {
      id: "8.20",
      sanskrit: "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः |\nयः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति ||८-२०||",
      hindi: "इसके अतिरिक्त एक अन्य अव्यक्त प्रकृति है, जो शाश्वत है और इस व्यक्त तथा अव्यक्त पदार्थ से परे है। यह परा (श्रेष्ठ) और कभी न नाश होने वाली है। जब इस संसार का सब कुछ लय हो जाता है, तब भी उसका नाश नहीं होता।",
      english: "Yet there is another unmanifest nature, which is eternal and is transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. When all in this world is annihilated, that part remains as it is."
    },
    {
      id: "8.21",
      sanskrit: "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम् |\nयं प्राप्य न निवर्तन्ते तद्धाम परमं मम ||८-२१||",
      hindi: "जिसे वेदान्ती अप्राप्य तथा अव्यक्त बताते हैं, जो जीवों की परं गति है, जिसे प्राप्त कर लेने पर कोई इस संसार में वापस नहीं आता, वही मेरा परमधाम है।",
      english: "That which the Vedantists describe as unmanifest and infallible, that which is known as the supreme destination, that place from which, having attained it, one never returns—that is My supreme abode."
    },
    {
      id: "8.22",
      sanskrit: "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया |\nयस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम् ||८-२२||",
      hindi: "भगवान्, जो सबसे महान हैं, अनन्य भक्ति द्वारा ही प्राप्त किये जा सकते हैं। यद्यपि वे अपने धाम में विराजमान हैं, तो भी वे सर्वव्यापी हैं और सब कुछ उन्हीं में स्थित है।",
      english: "The Supreme Personality of Godhead, who is greater than all, is attainable by unalloyed devotion. Although He is present in His abode, He is all-pervading, and everything is situated within Him."
    },
    {
      id: "8.23",
      sanskrit: "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः |\nप्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ ||८-२३||",
      hindi: "हे भरतश्रेष्ठ! अब मैं तुम्हें उन विभिन्न कालों के विषय में बताऊँगा, जिनमें इस संसार से प्रयाण करने के बाद योगी पुनः आता है अथवा नहीं आता।",
      english: "O best of the Bharatas, I shall now explain to you the different times at which, passing away from this world, the yogi does or does not come back."
    },
    {
      id: "8.24",
      sanskrit: "अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम् |\nतत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः ||८-२४||",
      hindi: "जो परब्रह्म के ज्ञाता हैं, वे अग्नि, प्रकाश, दिन के शुभ मुहूर्त में, शुक्लपक्ष में अथवा जब सूर्य उत्तरायण में रहता है, उन छह मासों में इस संसार से शरीर त्याग करने पर उस परब्रह्म को प्राप्त करते हैं।",
      english: "Those who know the Supreme Brahman attain that Supreme by passing away from the world during the influence of the fiery god, in the light, at an auspicious moment of the day, during the fortnight of the waxing moon, or during the six months when the sun travels in the north."
    },
    {
      id: "8.25",
      sanskrit: "धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम् |\nतत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते ||८-२५||",
      hindi: "जो योगी धुएँ, रात्रि, कृष्णपक्ष में या जब सूर्य दक्षिणायन रहता है, उन छह मासों में दिवंगत होता है, वह चन्द्रलोक को जाता है, किन्तु वहाँ से पुनः (पृथ्वी पर) चला आता है।",
      english: "The mystic who passes away from this world during the smoke, the night, the fortnight of the waning moon, or the six months when the sun passes to the south reaches the moon planet but again comes back."
    },
    {
      id: "8.26",
      sanskrit: "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते |\nएकया यात्यनावृत्तिमन्ययावर्तते पुनः ||८-२६||",
      hindi: "वैदिक मतानुसार इस संसार से प्रयाण करने के दो मार्ग हैं - एक प्रकाश का और दूसरा अंधकार का। जब कोई प्रकाशमार्ग से जाता है तो वापस नहीं आता, किन्तु अंधकार के मार्ग से जाने वाला पुनः लौटकर आता है।",
      english: "According to Vedic opinion, there are two ways of passing from this world—one in light and one in darkness. When one passes in light, he does not come back; but when one passes in darkness, he returns."
    },
    {
      id: "8.27",
      sanskrit: "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन |\nतस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन ||८-२७||",
      hindi: "हे अर्जुन! यद्यपि भक्तगण इन दोनों मार्गों को जानते हैं, किन्तु वे मोहग्रस्त नहीं होते। अतः तुम भक्ति में सदैव स्थिर रहो।",
      english: "Although the devotees know these two paths, O Arjuna, they are never bewildered. Therefore be always fixed in devotion."
    },
    {
      id: "8.28",
      sanskrit: "वेदेषु यज्ञेषु तपःसु चैव दानेषु यत्पुण्यफलं प्रदिष्टम् |\nअत्येति तत्सर्वमिदं विदित्वा योगी परं स्थानमुपैति चाद्यम् ||८-२८||",
      hindi: "जो व्यक्ति भक्तिमार्ग स्वीकार करता है, वह वेद-अध्ययन, तपस्या, दान, दार्शनिक तथा सकाम कर्म करने से प्राप्त होने वाले फलों से वंचित नहीं होता। वह मात्र भक्ति सम्पन्न करके इन समस्त फलों को प्राप्त करता है और अन्त में परम नित्यधाम को प्राप्त होता है।",
      english: "A person who accepts the path of devotional service is not bereft of the results derived from studying the Vedas, performing austere sacrifices, giving charity or pursuing philosophical and fruitive activities. Simply by performing devotional service, he attains all these, and at the end he reaches the supreme eternal abode."
    }
  ]
}
  // When you create Chapter 9, you will add its data object here.
  // { chapter: 9, title: "...", verses: [...] },
];
