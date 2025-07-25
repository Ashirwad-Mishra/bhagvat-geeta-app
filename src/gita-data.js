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
},
{
  chapter: 9,
  title: "Rāja Vidyā Rāja Guhya Yoga",
  english_title: "The Yoga of Royal and Secret Knowledge",
  verses: [
    {
      id: "9.1",
      sanskrit: "श्रीभगवानुवाच |\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे |\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||९-१||",
      hindi: "श्री भगवान ने कहा - हे अर्जुन! चूँकि तुम मुझसे कभी ईर्ष्या नहीं करते, इसलिए मैं तुम्हें यह परम गुह्यज्ञान तथा अनुभूति बतलाऊँगा, जिसे जानकर तुम संसार के सारे क्लेशों से मुक्त हो जाओगे।",
      english: "The Supreme Personality of Godhead said: My dear Arjuna, because you are never envious of Me, I shall impart to you this most confidential knowledge and realization, knowing which you shall be relieved of the miseries of material existence."
    },
    {
      id: "9.2",
      sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् |\nप्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् ||९-२||",
      hindi: "यह ज्ञान सब विद्याओं का राजा है, जो समस्त रहस्यों में सर्वाधिक गोपनीय है। यह परम शुद्ध है और चूँकि यह आत्मा की प्रत्यक्ष अनुभूति कराने वाला है, अतः यह धर्म का सिद्धान्त है। यह अविनाशी है और अत्यन्त सुखपूर्वक सम्पन्न किया जाता है।",
      english: "This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed."
    },
    {
      id: "9.3",
      sanskrit: "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप |\nअप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि ||९-३||",
      hindi: "हे परन्तप! जो लोग भक्ति में श्रद्धा नहीं रखते, वे मुझे प्राप्त नहीं कर पाते। अतः वे इस भौतिक जगत् में जन्म-मृत्यु के मार्ग पर वापस आते रहते हैं।",
      english: "Those who are not faithful in this devotional service cannot attain Me, O conqueror of enemies. Therefore they return to the path of birth and death in this material world."
    },
    {
      id: "9.4",
      sanskrit: "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना |\nमत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः ||९-४||",
      hindi: "यह सम्पूर्ण जगत् मेरे अव्यक्त रूप द्वारा व्याप्त है। समस्त जीव मुझमें हैं, किन्तु मैं उनमें नहीं हूँ।",
      english: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them."
    },
    {
      id: "9.5",
      sanskrit: "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् |\nभूतभृन्न च भूतस्थो ममात्मा भूतभावनः ||९-५||",
      hindi: "यद्यपि सारी वस्तुएँ मुझमें स्थित हैं, किन्तु मैं उनमें नहीं हूँ। मेरे इस अचिन्त्य योग-ऐश्वर्य को देखो! यद्यपि मैं समस्त जीवों का पालक (भर्ता) हूँ और सर्वव्यापी हूँ, लेकिन मैं इस भौतिक अभिव्यक्ति का अंश नहीं हूँ, क्योंकि मैं सृष्टि का कारणस्वरूप हूँ।",
      english: "And yet everything that is created does not rest in Me. Behold My mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for My Self is the very source of creation."
    },
    {
      id: "9.6",
      sanskrit: "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान् |\nतथा सर्वाणि भूतानि मत्स्थानीत्युपधारय ||९-६||",
      hindi: "जिस प्रकार सर्वत्र बहने वाली प्रबल वायु सदैव आकाश में स्थित रहती है, उसी प्रकार तुम जान लो कि समस्त उत्पन्न प्राणी मुझमें स्थित रहते हैं।",
      english: "Understand that as the mighty wind, blowing everywhere, rests always in the sky, all created beings rest in Me."
    },
    {
      id: "9.7",
      sanskrit: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् |\nकल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ||९-७||",
      hindi: "हे कुन्तीपुत्र! कल्प का अन्त होने पर सारे प्राणी मेरी प्रकृति में प्रवेश करते हैं और अन्य कल्प के आरम्भ होने पर मैं उन्हें अपनी शक्ति से पुनः उत्पन्न करता हूँ।",
      english: "O son of Kunti, at the end of the millennium all material manifestations enter into My nature, and at the beginning of another millennium, by My potency, I create them again."
    },
    {
      id: "9.8",
      sanskrit: "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः |\nभूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् ||९-८||",
      hindi: "सम्पूर्ण विराट जगत् मेरे अधीन है। यह मेरी इच्छा से बारम्बार स्वतः प्रकट होता रहता है और मेरी ही इच्छा से अन्त में विनष्ट होता है।",
      english: "The whole cosmic order is under Me. Under My will it is automatically manifested again and again, and under My will it is annihilated at the end."
    },
    {
      id: "9.9",
      sanskrit: "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय |\nउदासीनवदासीनमसक्तं तेषु कर्मसु ||९-९||",
      hindi: "हे धनञ्जय! ये सारे कर्म मुझे नहीं बाँध पाते। मैं इन समस्त कर्मों से उदासीन तथा अनासक्त भाव से पृथक् रहता हूँ।",
      english: "O Dhananjaya, all this work cannot bind Me. I am ever detached from all these material activities, seated as though neutral."
    },
    {
      id: "9.10",
      sanskrit: "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् |\nहेतुनानेन कौन्तेय जगद्विपरिवर्तते ||९-१०||",
      hindi: "हे कुन्तीपुत्र! यह भौतिक प्रकृति मेरी शक्तियों में से एक है और मेरी अध्यक्षता में कार्य करती है, जिससे सारे चर तथा अचर प्राणी उत्पन्न होते हैं। इसके शासन में यह जगत् बारम्बार सृजित और विनष्ट होता रहता है।",
      english: "This material nature, which is one of My energies, is working under My direction, O son of Kunti, producing all moving and nonmoving beings. Under its rule this manifestation is created and annihilated again and again."
    },
    {
      id: "9.11",
      sanskrit: "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् |\nपरं भावमजानन्तो मम भूतमहेश्वरम् ||९-११||",
      hindi: "जब मैं मनुष्य रूप में अवतरित होता हूँ, तो मूर्ख मेरा उपहास करते हैं। वे मुझ परमेश्वर के उस दिव्य स्वभाव को नहीं जानते जो समस्त वस्तुओं का स्वामी है।",
      english: "Fools deride Me when I descend in the human form. They do not know My transcendental nature as the Supreme Lord of all that be."
    },
    {
      id: "9.12",
      sanskrit: "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः |\nराक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः ||९-१२||",
      hindi: "जो लोग इस प्रकार मोहग्रस्त होते हैं, वे आसुरी तथा नास्तिक विचारों के प्रति आकृष्ट रहते हैं। इस मोहग्रस्त अवस्था में उनकी मुक्ति-कामना, उनके सकाम कर्म तथा ज्ञान का अनुशीलन, सभी निष्फल हो जाते हैं।",
      english: "Those who are thus bewildered are attracted by demonic and atheistic views. In that deluded condition, their hopes for liberation, their fruitive activities, and their culture of knowledge are all defeated."
    },
    {
      id: "9.13",
      sanskrit: "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः |\nभजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ||९-१३||",
      hindi: "हे पार्थ! मोहमुक्त महात्माजन दैवी प्रकृति की शरण में रहते हैं। वे मेरी पूजा भक्तिपूर्वक करते हैं, क्योंकि वे मुझे आदि तथा अविनाशी श्रीभगवान् के रूप में जानते हैं।",
      english: "O son of Pritha, those who are not deluded, the great souls, are under the protection of the divine nature. They are fully engaged in devotional service because they know Me as the Supreme Personality of Godhead, original and inexhaustible."
    },
    {
      id: "9.14",
      sanskrit: "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः |\nनमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते ||९-१४||",
      hindi: "ये महात्मा मेरी महिमा का नित्य कीर्तन करते हुए, दृढ़संकल्प के साथ प्रयास करते हुए, मुझे नमस्कार करते हुए, भक्तिभाव से मेरी पूजा करते हैं।",
      english: "Always chanting My glories, endeavoring with great determination, bowing down before Me, these great souls perpetually worship Me with devotion."
    },
    {
      id: "9.15",
      sanskrit: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते |\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् ||९-१५||",
      hindi: "अन्य लोग जो ज्ञान के अनुशीलन द्वारा यज्ञ करते हैं, वे भगवान् की पूजा उनके अद्वय रूप में, विविध रूपों में तथा विराट रूप में करते हैं।",
      english: "Others, who engage in sacrifice by the cultivation of knowledge, worship the Supreme Lord as the one without a second, as diverse in many, and in the universal form."
    },
    {
      id: "9.16",
      sanskrit: "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम् |\nमन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम् ||९-१६||",
      hindi: "किन्तु वैदिक अनुष्ठान, यज्ञ, पितरों को दिया जाने वाला अर्पण, औषधि, दिव्य ध्वनि (मन्त्र), घी, अग्नि तथा आहुति भी मैं ही हूँ।",
      english: "But it is I who am the ritual, I the sacrifice, the offering to the ancestors, the healing herb, the transcendental chant. I am the butter and the fire and the offering."
    },
    {
      id: "9.17",
      sanskrit: "पिताहमस्य जगतो माता धाता पितामहः |\nवेद्यं पवित्रमोङ्कार ऋक्साम यजुरेव च ||९-१७||",
      hindi: "मैं इस ब्रह्माण्ड का पिता, माता, आश्रय तथा पितामह हूँ। मैं ज्ञेय (जानने योग्य), शोधक तथा ओंकार हूँ। मैं ऋग्वेद, सामवेद तथा यजुर्वेद भी हूँ।",
      english: "I am the father of this universe, the mother, the support and the grandsire. I am the object of knowledge, the purifier and the syllable om. I am also the Rig, the Sama and the Yajur Vedas."
    },
    {
      id: "9.18",
      sanskrit: "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत् |\nप्रभवः प्रलयः स्थानं निधानं बीजमव्ययम् ||९-१८||",
      hindi: "मैं ही लक्ष्य, पालक, स्वामी, साक्षी, धाम, शरणस्थली तथा अत्यन्त प्रिय मित्र हूँ। मैं सृष्टि तथा प्रलय, सबका आधार, आश्रय तथा अविनाशी बीज भी हूँ।",
      english: "I am the goal, the sustainer, the master, the witness, the abode, the refuge and the most dear friend. I am the creation and the annihilation, the basis of everything, the resting place and the eternal seed."
    },
    {
      id: "9.19",
      sanskrit: "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च |\nअमृतं चैव मृत्युश्च सदसच्चाहमर्जुन ||९-१९||",
      hindi: "हे अर्जुन! मैं ही ताप प्रदान करता हूँ और वर्षा को रोकता तथा लाता हूँ। मैं अमृत हूँ और साक्षात् मृत्यु भी। आत्मा तथा पदार्थ (सत् तथा असत्) दोनों मुझमें ही हैं।",
      english: "O Arjuna, I give heat, and I withhold and send forth the rain. I am immortality, and I am also death personified. Both spirit and matter are in Me."
    },
    {
      id: "9.20",
      sanskrit: "त्रैविद्या मां सोमपाः पूतपापा यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते |\nते पुण्यमासाद्य सुरेन्द्रलोकम् अश्नन्ति दिव्यान्दिवि देवभोगान् ||९-२०||",
      hindi: "जो वेदों का अध्ययन करते तथा सोमरस का पान करते हैं, वे स्वर्ग की प्राप्ति की कामना करते हैं। वे अप्रत्यक्ष रूप से मेरी पूजा करते हैं। वे पापकर्मों से शुद्ध होकर इन्द्र के पवित्र स्वर्गिक धाम में जन्म लेते हैं, जहाँ वे देवताओं का सा आनन्द भोगते हैं।",
      english: "Those who study the Vedas and drink the soma juice, seeking the heavenly planets, worship Me indirectly. Purified of sinful reactions, they take birth on the pious, heavenly planet of Indra, where they enjoy godly delights."
    },
    {
      id: "9.21",
      sanskrit: "ते तं भुक्त्वा स्वर्गलोकं विशालं क्षीणे पुण्ये मर्त्यलोकं विशन्ति |\nएवं त्रयीधर्ममनुप्रपन्ना गतागतं कामकामा लभन्ते ||९-२१||",
      hindi: "इस प्रकार जब वे (उन लोगों) विशाल स्वर्गिक इन्द्रियसुख को भोग लेते हैं और उनके पुण्यकर्मों के फल क्षीण हो जाते हैं, तो वे इस मृत्युलोक में पुनः लौट आते हैं। इस प्रकार जो तीनों वेदों के सिद्धान्तों में दृढ रहकर इन्द्रियसुख की कामना करते हैं, उन्हें जन्म-मृत्यु का चक्र ही मिल पाता है।",
      english: "When they have thus enjoyed vast heavenly sense pleasure and the results of their pious activities are exhausted, they return to this mortal planet again. Thus those who seek sense enjoyment by adhering to the principles of the three Vedas achieve only repeated birth and death."
    },
    {
      id: "9.22",
      sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||९-२२||",
      hindi: "किन्तु जो लोग अनन्यभाव से मेरे दिव्य स्वरूप का ध्यान करते हुए निरन्तर मेरी पूजा करते हैं, उनकी जो आवश्यकताएँ होती हैं, उन्हें मैं पूरा करता हूँ और जो कुछ उनके पास है, उसकी रक्षा करता हूँ।",
      english: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have."
    },
    {
      id: "9.23",
      sanskrit: "येऽप्यन्यदेवताभक्ता यजन्ते श्रद्धयान्विताः |\nतेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् ||९-२३||",
      hindi: "हे कुन्तीपुत्र! जो लोग अन्य देवताओं के भक्त हैं और उनकी श्रद्धापूर्वक पूजा करते हैं, वास्तव में वे भी अविधिपूर्वक मेरी ही पूजा करते हैं।",
      english: "Those who are devotees of other gods and who worship them with faith actually worship only Me, O son of Kunti, but they do so in a wrong way."
    },
    {
      id: "9.24",
      sanskrit: "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च |\nन तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते ||९-२४||",
      hindi: "मैं ही समस्त यज्ञों का एकमात्र भोक्ता तथा स्वामी हूँ। अतः जो लोग मेरे वास्तविक दिव्य स्वभाव को नहीं पहचान पाते, वे नीचे गिर जाते हैं।",
      english: "I am the only enjoyer and master of all sacrifices. Therefore, those who do not recognize My true transcendental nature fall down."
    },
    {
      id: "9.25",
      sanskrit: "यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः |\nभूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् ||९-२५||",
      hindi: "जो देवताओं की पूजा करते हैं, वे देवताओं के बीच जन्म लेंगे, जो पितरों को पूजते हैं, वे पितरों के पास जाते हैं, जो भूत-प्रेतों की पूजा करते हैं, वे उन्हीं के बीच जन्म लेते हैं और जो मेरी पूजा करते हैं, वे मेरे साथ निवास करते हैं।",
      english: "Those who worship the demigods will take birth among the demigods; those who worship the ancestors go to the ancestors; those who worship ghosts and spirits will take birth among such beings; and those who worship Me will live with Me."
    },
    {
      id: "9.26",
      sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति |\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||९-२६||",
      hindi: "यदि कोई प्रेम तथा भक्ति के साथ मुझे पत्र, पुष्प, फल या जल प्रदान करता है, तो मैं उसे स्वीकार करता हूँ।",
      english: "If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it."
    },
    {
      id: "9.27",
      sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् |\nयत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ||९-२७||",
      hindi: "हे कुन्तीपुत्र! तुम जो कुछ करते हो, जो कुछ खाते हो, जो कुछ अर्पित करते हो या दान देते हो और जो भी तपस्या करते हो, उसे मुझे अर्पित करते हुए करो।",
      english: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering to Me."
    },
    {
      id: "9.28",
      sanskrit: "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः |\nसन्न्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ||९-२८||",
      hindi: "इस तरह तुम कर्म के बन्धन तथा इसके शुभ-अशुभ फलों से मुक्त हो सकोगे। इस संन्यासयोग में अपने चित्त को स्थिर करके तुम मुक्त होकर मेरे पास आ सकोगे।",
      english: "In this way you will be freed from bondage to work and its auspicious and inauspicious results. With your mind fixed on Me in this principle of renunciation, you will be liberated and come to Me."
    },
    {
      id: "9.29",
      sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः |\nये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ||९-२९||",
      hindi: "मैं न तो किसी से द्वेष करता हूँ, न ही किसी के साथ पक्षपात करता हूँ। मैं सबों के लिए समभाव हूँ। किन्तु जो भी भक्तिपूर्वक मेरी सेवा करता है, वह मेरा मित्र है, मुझमें स्थित रहता है और मैं भी उसका मित्र हूँ।",
      english: "I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him."
    },
    {
      id: "9.30",
      sanskrit: "अपि चेत्सुदुराचारो भजते मामनन्यभाक् |\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः ||९-३०||",
      hindi: "यदि कोई जघन्य से जघन्य कर्म करता है, किन्तु यदि वह भक्ति में रत रहता है तो उसे साधु मानना चाहिए, क्योंकि वह अपने संकल्प में अडिग रहता है।",
      english: "Even if one commits the most abominable action, if he is engaged in devotional service he is to be considered saintly because he is properly situated in his determination."
    },
    {
      id: "9.31",
      sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति |\nकौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति ||९-३१||",
      hindi: "वह तुरन्त धर्मात्मा बन जाता है और स्थायी शान्ति को प्राप्त होता है। हे कुन्तीपुत्र! निडर होकर घोषणा कर दो कि मेरे भक्त का कभी विनाश नहीं होता।",
      english: "He quickly becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes."
    },
    {
      id: "9.32",
      sanskrit: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः |\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ||९-३२||",
      hindi: "हे पार्थ! जो लोग मेरी शरण ग्रहण करते हैं, वे भले ही निम्नजन्मा स्त्री, वैश्य (वणिक) तथा शूद्र (श्रमिक) क्यों न हों, वे परमधाम को प्राप्त करते हैं।",
      english: "O son of Pritha, those who take shelter in Me, though they be of lower birth—women, vaishyas [merchants] and shudras [laborers]—can approach the supreme destination."
    },
    {
      id: "9.33",
      sanskrit: "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा |\nअनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् ||९-३३||",
      hindi: "फिर धर्मात्मा ब्राह्मणों, भक्तों तथा राजर्षियों के लिए तो कहना ही क्या है! अतः इस क्षणिक दुखमय संसार में आ जाने पर मेरी प्रेमाभक्ति में अपने आपको लगाओ।",
      english: "How much more this is so of the righteous brahmanas, the devotees and the saintly kings. Therefore, having come to this temporary, miserable world, engage in loving service unto Me."
    },
    {
      id: "9.34",
      sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु |\nमामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ||९-३४||",
      hindi: "अपने मन को मेरे नित्य चिन्तन में लगाओ, मेरे भक्त बनो, मुझे नमस्कार करो और मेरी ही पूजा करो। इस प्रकार मुझमें पूर्णतया तल्लीन होने पर तुम निश्चित रूप से मुझको प्राप्त होगे।",
      english: "Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me."
    }
  ]
},
 {
  chapter: 10,
  title: "Vibhūti Yoga",
  english_title: "The Yoga of Divine Glories",
  verses: [
    {
      id: "10.1",
      sanskrit: "श्रीभगवानुवाच |\nभूय एव महाबाहो श्रृणु मे परमं वचः |\nयत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ||१०-१||",
      hindi: "श्री भगवान् बोले: हे महाबाहु अर्जुन! अब फिर से तू मेरा सबसे श्रेष्ठ वचन सुन। मैं तेरे परम प्रिय और कल्याण की इच्छा से तुझे यह कह रहा हूँ।",
      english: "The Blessed Lord said: Listen again, O mighty-armed Arjuna. Because you are My dear friend, for your benefit I shall speak to you further, giving knowledge that is better than what I have already explained."
    },
    {
      id: "10.2",
      sanskrit: "न मे विदुः सुरगणाः प्रभवं न महर्षयः |\nअहमादिर्हि देवानां महर्षीणां च सर्वशः ||१०-२||",
      hindi: "मुझे न तो देवगण जानते हैं, और न ही महान् ऋषिगण। क्योंकि मैं ही देवताओं और महर्षियों का सर्वथा आदिपुरुष हूँ।",
      english: "Neither the hosts of demigods nor the great sages know My origin, for in every respect I am the source of the demigods and sages."
    },
    {
      id: "10.3",
      sanskrit: "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् |\nअसंमूढः स मर्त्येषु सर्वपापैः प्रमुच्यते ||१०-३||",
      hindi: "जो मनुष्य मुझे अजन्मा, अनादि और समस्त लोकों का परमेश्वर जानता है, वह मोह से रहित होता है और समस्त पापों से मुक्त हो जाता है।",
      english: "He who knows Me as the unborn, as the beginningless, as the great Lord of the worlds—he among mortals is undeluded; he is freed from all sins."
    },
    {
      id: "10.4",
      sanskrit: "बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यम् दमः शमः |\nसुखं दुःखं भवोऽभावो भयं चाभयमेव च ||१०-४||\nअहिंसा समता तुष्टिस्तपो दानं यशोऽयशः |\nभवन्ति भावा भूतानां मत्त एव पृथग्विधाः ||१०-५||",
      hindi: "बुद्धि, ज्ञान, संशय न होना, क्षमा, सत्य, इन्द्रिय संयम, मन की शान्ति, सुख-दुःख, उत्पत्ति और विनाश, भय और अभय, अहिंसा, समता, सन्तुष्टि, तप, दान, यश और अपयश—ये सब भूतों में मुझसे ही उत्पन्न होते हैं।",
      english: "Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, control of the senses, control of the mind, happiness and distress, birth and death, fear and fearlessness, nonviolence, equanimity, satisfaction, austerity, charity, fame and infamy—all these various qualities of living beings are created by Me alone."
    },
    {
      id: "10.6",
      sanskrit: "महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा |\nमद्भावा मानसा जाता यस्यांशां विबुधाः प्रजा: ||१०-६||",
      hindi: "सात महर्षि और चार प्राचीन मनु, सब मेरे मन से उत्पन्न हुए। और उनके वंशज संसार के प्राणी हैं।",
      english: "The seven great sages and before them the four Manus, who are progenitors of mankind, are born from My mind, and from them, all the people of the world have descended."
    },
    {
      id: "10.7",
      sanskrit: "एतां विभूतिं योगं च मम यो वेत्ति तत्वतः |\nसोऽविकम्पेन योगेन युज्यते नात्र संशयः ||१०-७||",
      hindi: "जो मुझमें इन दिव्य विभूतियों और योग के तत्त्व को यथार्थ रूप में जानता है, वह अविचलित योग से मुझसे जुड़ा रहता है; इसमें कोई संदेह नहीं।",
      english: "He who comprehends in truth this glory and power of Mine, is united with Me through unfaltering Yoga. Of this there is no doubt."
    },
    {
      id: "10.8",
      sanskrit: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते |\nइति मत्वा भजन्ते मां बुद्धा भावसमन्विताः ||१०-८||",
      hindi: "मैं ही सबका उद्गम हूँ; मुझसे ही सब कुछ प्रवाहित होता है। यह जानकर बुद्धिमान भक्त प्रेम से मेरी पूजा करते हैं।",
      english: "I am the source of all spiritual and material worlds. Everything emanates from Me; the wise who know this perfectly engage in My devotional service and worship Me with all their hearts."
    },
    {
      id: "10.9",
      sanskrit: "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम् |\nकथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च ||१०-९||",
      hindi: "मेरा चिन्तन करने वाले, मुझमें जीवन समर्पित करने वाले, एक-दूसरे को उपदेश देते हैं और मेरी महिमा का वर्णन करके सन्तुष्ट और आनन्दित होते हैं।",
      english: "The thoughts of My pure devotees dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me."
    },
    {
      id: "10.10",
      sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् |\nददामि बुद्धियोगं तं येन मामुपयान्ति ते ||१०-१०||",
      hindi: "जो हमेशा भक्ति में लगे रहते हैं, उन्हें मैं वह बुद्धियोग देता हूँ जिससे वे मुझे प्राप्त कर लेते हैं।",
      english: "To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me."
    },
    {
      id: "10.11",
      sanskrit: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः |\nनाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ||१०-११||",
      hindi: "उन पर दया करके, मैं उनके भीतर स्थित होकर, अज्ञान के अंधकार को ज्ञान के उज्ज्वल दीप से दूर करता हूँ।",
      english: "To show them special mercy, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance."
    },
    {
      id: "10.12",
      sanskrit: "अर्जुन उवाच |\nपरं ब्रह्म परं धाम पवित्रं परमानम् |\nपुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् ||१०-१२||",
      hindi: "अर्जुन ने कहा: आप परम ब्रह्म, परम धाम, परम पवित्र आत्मा, सनातन पुरुष, दिव्य आदि-देव, अजन्मा और सर्वव्यापी हैं।",
      english: "Arjuna said: You are the Supreme Brahman, the ultimate abode, the purest, the Absolute Truth. You are the eternal, transcendental, original Person, the unborn, the greatest."
    },
    {
      id: "10.13",
      sanskrit: "आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा |\nअसितो देवलो व्यासः स्वयं चैव ब्रवीषि मे ||१०-१३||",
      hindi: "ऋषि, देवर्षि नारद, असित, देवल, व्यास—सभी आपकी दिव्यता का वर्णन करते हैं, और आप स्वयं भी ऐसा कहते हैं।",
      english: "All the great sages such as Narada, Asita, Devala, and Vyasa proclaim this of You, and now You Yourself are declaring it to me."
    },
    {
      id: "10.14",
      sanskrit: "सर्वमेतदृतं मन्ये यन्मां वदसि केशव |\nन हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः ||१०-१४||",
      hindi: "हे केशव! जो कुछ भी आप मुझसे कह रहे हैं, उसे मैं सत्य मानता हूँ। न तो देवगण और न ही असुरगण आपकी दिव्यता को जान सकते हैं।",
      english: "O Krishna, I totally accept as truth all that You have told me. Neither the gods nor demons, O Lord, know Thy personality."
    },
    {
      id: "10.15",
      sanskrit: "स्वयमेवात्मानं वेत्थ त्वं पुरुषोत्तम |\nभूतभावन भूतेश देवदेव जगत्पते ||१०-१५||",
      hindi: "हे पुरुषोत्तम! केवल आप ही अपने-आप को जानते हैं, क्योंकि आप समस्त जीवों के उत्पन्नकर्ता, स्वामी, देवों के देव एवं जगत के अधिपति हैं।",
      english: "Indeed, You alone know Yourself by Your own internal potency, O Supreme Person, origin of all beings, Lord of all beings, God of gods, Lord of the universe!"
    },
    {
      id: "10.16",
      sanskrit: "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः |\nयाभिर्विभूतिभिर्लोकानिमांस्त्वं व्यापक्श्य ||१०-१६||",
      hindi: "कृपया मुझे विस्तार से अपनी दिव्य विभूतियों का वर्णन करें, जिनके द्वारा आप इन समस्त लोकों में व्याप्त हैं।",
      english: "Please tell me in detail of Your divine powers, by which You pervade all these worlds."
    },
    {
      id: "10.17",
      sanskrit: "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् |\nकेषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ||१०-१७||",
      hindi: "हे योगेश्वर! मैं किस तरह निरंतर आपका ध्यान करूं और आपको जानूं? मुझे यह विस्तार से बताइए।",
      english: "How should I meditate on You? In what various forms are You to be thought of, O Blessed Lord?"
    },
    {
      id: "10.18",
      sanskrit: "विस्तरेणात्मनो योगं विभूतिं च जनार्दन |\nभूयः कथय तृप्तिर्हि श्रृण्वतो नास्ति मेऽमृतम् ||१०-१८||",
      hindi: "हे जनार्दन! अपनी योगशक्ति और विभूतियों का फिर से विस्तार से वर्णन कीजिए। मुझे सुनकर कभी तृप्ति नहीं होती।",
      english: "Please describe again in detail, Your mystic power and opulences, for I am never satiated in hearing Your nectar."
    },
    {
      id: "10.19",
      sanskrit: "श्रीभगवानुवाच |\nहन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः |\nप्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ||१०-१९||",
      hindi: "श्रीभगवान् बोले: हे कुरुश्रेष्ठ अर्जुन! अब मैं अपनी मुख्य-मुख्य दिव्य विभूतियाँ कहूँगा; मेरा विस्तार का कोई अंत नहीं।",
      english: "The Blessed Lord said: Yes, I will tell you of My special divine manifestations. O best of the Kurus, for there is no end to My expansions."
    },
    {
      id: "10.20",
      sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः |\nअहमादिश्च मध्यं च भूतानामन्त एव च ||१०-२०||",
      hindi: "हे गुडाकेश! मैं समस्त जीवों के हृदय में स्थित आत्मा हूँ। मैं ही जीवों का आदि, मध्य और अंत हूँ।",
      english: "I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings."
    },
    {
      id: "10.21",
      sanskrit: "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् |\nमरीचिर्मरुतामस्मि नकषत्राणामहं शशी ||१०-२१||",
      hindi: "मैं आदित्यों में विष्णु हूँ, प्रकाशों में तेजस्वी सूर्य, मरुतों में मरीचि हूँ और नक्षत्रों में चंद्रमा हूँ।",
      english: "Of the Adityas I am Vishnu; of lights I am the radiant sun; of the Maruts I am Marichi; among stars I am the moon."
    },
    {
      id: "10.22",
      sanskrit: "वेदनां सामवेदोऽस्मि देवानामस्मि वासवः |\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ||१०-२२||",
      hindi: "वेदों में मैं सामवेद हूँ, देवों में इन्द्र हूँ, इन्द्रियों में मन हूँ और प्राणियों में चेतना हूँ।",
      english: "Of the Vedas I am the Sama-veda; of the demigods I am Indra; of the senses I am the mind, and in living beings I am consciousness."
    },
    {
      id: "10.23",
      sanskrit: "रुद्राणां शंकरश्चास्मि वित्तेशो यक्षरक्षसाम् |\nवसूनां पावकश्चास्मि मेरुः शिखरिणामहम् ||१०-२३||",
      hindi: "रुद्रों में मैं शंकर हूँ, यक्षों में कुबेर हूँ, वसुओं में अग्नि हूँ और पर्वतों में मेरु हूँ।",
      english: "Of all the Rudras I am Shiva, of the Yaksas and Rakshasas I am the lord of wealth (Kubera), of Vasus I am fire, and of mountains I am Meru."
    },
    {
      id: "10.24",
      sanskrit: "पूरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् |\nसेनानीनामहं स्कन्दः सरसामस्मि सागरः ||१०-२४||",
      hindi: "पुरोहितों में मैं बृहस्पति हूँ, सेनापतियों में कार्तिकेय (स्कंद) हूँ, और जलाशयों में समुद्र हूँ।",
      english: "Of priests, O Arjuna, know Me to be the chief, Brihaspati; of commanders I am Skanda; of bodies of water I am the ocean."
    },
    {
      id: "10.25",
      sanskrit: "महर्षीणां भरद्वाजोऽहं गिरामस्म्येकमक्षरम् |\nयज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः ||१०-२५||",
      hindi: "महर्षियों में मैं भरद्वाज हूँ, वाणियों में एक अक्षर (ओंकार) हूँ, यज्ञों में जप-यज्ञ हूँ, और स्थावरों में हिमालय हूँ।",
      english: "Of the great sages I am Bhrigu; of vibrations I am the transcendental Om. Of sacrifices I am the chanting of the holy names [japa], and of immovable things I am the Himalayas."
    },
    {
      id: "10.26",
      sanskrit: "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः |\nगन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः ||१०-२६||",
      hindi: "वृक्षों में मैं अश्वत्थ (पीपल) हूँ, देवर्षियों में नारद हूँ, गंधर्वों में चित्ररथ हूँ, और सिद्धों में कपिल मुनि हूँ।",
      english: "Of all trees I am the pippal (Ashvattha); among divine sages I am Narada; of Gandharvas I am Chitraratha; among perfected beings I am the sage Kapila."
    },
    {
      id: "10.27",
      sanskrit: "उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम् |\nऐरावतं गजेन्द्राणां नराणां च नराधिपम् ||१०-२७||",
      hindi: "घोड़ों में मैं अमृत से उत्पन्न उच्चैःश्रवा हूँ; हाथियों में ऐरावत हूँ, और मानवों में राजा हूँ।",
      english: "Of horses know Me to be Uchchaihshravas, produced during the churning of the ocean for nectar; of elephants I am Airavata, and among men, I am the monarch."
    },
    {
      id: "10.28",
      sanskrit: "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् |\nप्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः ||१०-२८||",
      hindi: "अस्त्रों में मैं वज्र हूँ, गायों में कामधेनु हूँ, सन्तानों में कामदेव हूँ, और सर्पों में वासुकि हूँ।",
      english: "Among weapons I am the thunderbolt; among cows I am Kamadhenu; I am the cause of procreation, and among serpents I am Vasuki."
    },
    {
      id: "10.29",
      sanskrit: "अनन्तश्चास्मि नागानां वरुणो यादसामहम् |\nअर्यमा पितृणामस्मि यमः संयमतामहम् ||१०-२९||",
      hindi: "नागों में मैं अनंत हूँ, जलचरों में वरुण हूँ, पितरों में अर्यमा हूँ, और नियंत्रकों में यमराज हूँ।",
      english: "Of the many-hooded Nagas I am Ananta; among aquatics I am Varuna; among departed ancestors I am Aryama; among dispensers of law I am Yama."
    },
    {
      id: "10.30",
      sanskrit: "प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम् |\nमृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ||१०-३०||",
      hindi: "दैत्यगणों में मैं प्रह्लाद हूँ, समय का प्रतिनिधि हूँ, पशुओं में सिंह हूँ, और पक्षियों में गरुड़ हूँ।",
      english: "Among the Daityas I am Prahlada; among subduers I am time; among beasts I am the lion; among birds I am Garuda."
    },
    {
      id: "10.31",
      sanskrit: "पवनः पवतामस्मि रामः शस्त्रभृतामहम् |\nझषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ||१०-३१||",
      hindi: "शुद्ध करने वालों में वायु हूँ; योद्धाओं में राम हूँ; मछलियों में मत्स्यराज (मकर) हूँ; नदियों में गंगा हूँ।",
      english: "Of purifiers I am the wind; of the wielders of weapons I am Rama; among fishes I am the shark, and of flowing rivers I am the Ganges."
    },
    {
      id: "10.32",
      sanskrit: "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन |\nअध्यात्मविज्ञानविद्यानां वादः प्रवदतामहम् ||१०-३२||",
      hindi: "सृजन में आदि, मध्य और अंत मैं हूँ; अध्यात्मविद्या में विज्ञान हूँ; विवाद में मैं तर्क हूँ।",
      english: "Of all creations, I am the beginning and the end and also the middle, O Arjuna; of sciences I am the science of the self, and among logicians I am the conclusive truth."
    },
    {
      id: "10.33",
      sanskrit: "अक्षराणामकारोऽस्मि द्वंद्वः सामासिकस्य च |\nअहमेवाक्षयः कालो धर्मवृन्दो वृणीत तम् ||१०-३३||",
      hindi: "अक्षरों में मैं 'अ' हूँ, समासों में द्वंद्व समास हूँ, मैं ही अन्त रहित काल हूँ, और धर्मों का समूह भी मैं ही हूँ।",
      english: "Of letters I am the letter 'A', and among compound words I am the dual compound. I am also inexhaustible time, and I am the creator facing everywhere."
    },
    {
      id: "10.34",
      sanskrit: "मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम् |\nकीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा ||१०-३४||",
      hindi: "मैं सबका सर्वनाश करने वाला मृत्यु हूँ, और उत्पन्न होने वालों का जन्म भी हूँ; स्त्रियों में कीर्ति, श्री, वाणी, स्मृति, मेधा, धैर्य और क्षमा हूँ।",
      english: "I am all-devouring death, and I am the generating principle of all that is yet to be. Among women, I am fame, fortune, speech, memory, intelligence, steadfastness, and patience."
    },
    {
      id: "10.35",
      sanskrit: "बृहत्साम तथा साम्नां गायत्री छन्दसामहम् |\nमासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः ||१०-३५||",
      hindi: "सामवेद के भजनों में बृहत्साम और छन्दों में गायत्री हूँ; महीनों में मार्गशीर्ष हूं और ऋतुओं में वसंत हूँ।",
      english: "Of hymns in the Sama Veda I am the Brihat-sama, of metres I am the Gayatri. Of months I am Margashirsha (November-December), and of seasons I am spring."
    },
    {
      id: "10.36",
      sanskrit: "द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् |\nजयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् ||१०-३६||",
      hindi: "धोखे करने वालों में मैं जुआ हूँ; तेजस्वियों में तेज हूँ; विजय मैं हूँ; निश्चय मैं हूँ; और सद्गुणी पुरुषों में सत् मैं हूँ।",
      english: "I am also the gambling of cheats, and of the splendid I am the splendor. I am victory, I am adventure, and I am the strength of the strong."
    },
    {
      id: "10.37",
      sanskrit: "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जयः |\nमुनीनामप्यहं व्यासः कवीनामुशना कविः ||१०-३७||",
      hindi: "वृष्णिवंशी में मैं वासुदेव (कृष्ण) हूँ; पाण्डवों में अर्जुन हूँ; मुनियों में व्यास हूँ; और कवियों में शुक्राचार्य हूँ।",
      english: "Among the Vrishnis I am Vasudeva; among the Pandavas I am Arjuna; among sages I am Vyasa; and among poets I am Ushanas."
    },
    {
      id: "10.38",
      sanskrit: "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् |\nमौनं चैवास्मि रहस्यानां ज्ञानं ज्ञानवतामहम् ||१०-३८||",
      hindi: "दण्ड देने वालों में मैं दण्ड हूँ; विजय चाहने वालों में नीति हूँ; रहस्यों में मौन हूँ; और ज्ञानियों में ज्ञान हूँ।",
      english: "Among all means of suppressing lawlessness I am punishment, and among those who seek victory I am morality. Among secrets I am silence, and among wise I am wisdom."
    },
    {
      id: "10.39",
      sanskrit: "यच्चापि सर्वभूतानां बीजं तदहमर्जुन |\nन तदस्ति विना यत्स्यान्मया भूतं चराचरम् ||१०-३९||",
      hindi: "हे अर्जुन! समस्त प्राणियों का जो भी बीज है, वह मैं ही हूँ। मेरे बिना कोई भी चराचर जीवित नहीं रहता।",
      english: "Furthermore, O Arjuna, I am the generating seed of all existences. There is no being—moving or nonmoving—that can exist without Me."
    },
    {
      id: "10.40",
      sanskrit: "नान्तोऽस्ति मम दिव्यानां विभूतिनां परन्तप |\nएष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया ||१०-४०||",
      hindi: "हे परन्तप अर्जुन! मेरी दिव्य विभूतियों का कोई अन्त नहीं है; मैंने तुझे अपने विभूतियों का संक्षिप्त वर्णन किया है।",
      english: "O conqueror of enemies, there is no end to My divine manifestations. What I have spoken to you is but a mere indication of My infinite opulences."
    },
    {
      id: "10.41",
      sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा |\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ||१०-४१||",
      hindi: "जो भी विभूतियुक्त, समृद्ध या तेजस्वी वस्तु है, वह मेरी तेज का अंश है—यह जान ले।",
      english: "Know that all opulent, beautiful and glorious creations spring from but a spark of My splendor."
    },
    {
      id: "10.42",
      sanskrit: "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन |\nविष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ||१०-४२||",
      hindi: "हे अर्जुन! इतने से तुझे क्या लाभ? मैं अपने एक अंश से इस सम्पूर्ण जगत को धारित करता हूँ।",
      english: "But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe."
    }
  ]
},
{
  chapter: 11,
  title: "विश्वरूपदर्शन योग",
  english_title: "The Yoga of the Vision of the Cosmic Form",
  verses: [
    {
      id: "11.1",
      sanskrit: "तस्यैवात्म्यतिरेकेण किं पुनर्ज्ञानमुच्यते |\nविषीदसि मत्प्रेति न तु मे सखा मृष्यसे ||११-१||",
      hindi: "हे मेरे परम सखा! उस दिव्य स्वरूप को देखकर यदि तुम मोहग्रस्त होकर हतोत्साहित हो रहे हो और मुझसे दूर हो रहे हो, तो यह उचित नहीं है।",
      english: "If you become disheartened seeing My universal form, why should you not be disheartened? Do not grieve, because friendship with Me is unbroken."
    },
    {
      id: "11.2",
      sanskrit: "ततो मे याचितः श्रीर्मामक्षूपी महात्मनः |\nद्वादश रूपाणि कृष्ण पश्यमि मग्नमेदसः ||११-२||",
      hindi: "तब हे महात्मा! आपसे विद्या के लिए प्रार्थना करते हुए मैंने कहा – हे कृष्ण! मैं आपकी बारह रूपें दशानन स्वरूप में देखता हूं, कृपया और रूप दिखायें।",
      english: "Then the blessed Lord Sri Krishna said: O Arjuna, I will now describe My divine manifestations, beginning with the twelve forms with great heads that you saw."
    },
    {
      id: "11.3",
      sanskrit: "अर्जुन उवाच |\nमदानीं त्वया ददर्श विश्वरूपं महात्मनः |\nदिव्यं दशनयनं दिव्यं सर्वলোকव्यापिनम् ||११-३||",
      hindi: "अर्जुन बोले: हे महात्मा! मैंने तुम्हारा यह दिव्य, अनेक नेत्रों और सब लोकों में फैला हुआ विराट स्वरूप अभी अभी देखा।",
      english: "Arjuna said: O Mighty One, I have just now seen Your divine cosmic form with its many faces, eyes and wondrous sights, displaying forms of many colors and arrays."
    },
    {
      id: "11.4",
      sanskrit: "एवं दيدृशे तिमिरे मां वाचं कृत्वा हरिश्चरः |\nप्रणम्य स्वयम्भूमेन विस्मितो ममांशुसः ||११-४||",
      hindi: "इस प्रकार विराट रूप देखकर तुमने मुझसे बात की, मैं स्वयम्भू के सम्मुख नमस्कार कर, तुम्हारे तेवर देखकर विस्मित हो गया।",
      english: "After seeing Me thus, O Arjuna, you spoke to Me, bowing before Me, astonished by My great radiance."
    },
    {
      id: "11.5",
      sanskrit: "एवं दिदृक्षः शौर्यं तेजः शोभां च भास्करः |\nसर्वैर्मुनिभिः संयुता दैवताः स्तुवन्ति मामकम् ||११-५||",
      hindi: "हे भास्कर (सूर्य)! आपने जो पराक्रम, तेज और शोभा का अवतार देखा, वह सभी मुनियों और देवताओं द्वारा प्रशंसित है।",
      english: "Beholding My heroic power and brilliant features, all the great sages and divine beings worship Me with reverence."
    },
    {
      id: "11.6",
      sanskrit: "देवाः सर्वे नरर्षिभिः सुकृतिनो मदाश्रिताः |\nजघृनु मां दृढभक्त्या तमुवाच परमं मम ||११-६||",
      hindi: "मेरा पूजन करते हुए सभी देव, मुनि एवं भाग्यशाली जीव दृढ़ भक्ति से मुझे देखकर बोले कि तुम परम हो।",
      english: "All the celestial gods and sages, devoted to Me with firm faith, began to praise Me as the Supreme Absolute."
    },
    {
      id: "11.7",
      sanskrit: "पश्यामि देहिनां देवांश्च सर्वांस्तथैव च मानवाः |\nपश्यमि पार्थ जगत्कृत्स्नमिमं दिव्यं रूपमैश्वरम् ||११-७||",
      hindi: "हे पार्थ! मैं समस्त देवताओं, मनुष्यों, और सृष्टि के प्राणियों का दिव्य और महान रूप देख रहा हूँ।",
      english: "O Partha, I see all the gods, all humans and all beings, and this entire cosmic form of Yours, O Supreme."
    },
    {
      id: "11.8",
      sanskrit: "पश्यामि च तव दैवतं रूपं परमं राजधानीम |\nअनेकवक्त्रं अनेकाद्भुतं अनेकदिव्याभरणम् ||११-८||",
      hindi: "मैं तुम्हारा परम दिव्य रूप देखता हूँ जिसमें अनेक मुख, अनेक भयंकर रूप और अनेक प्रकार के दिव्य आभूषण हैं।",
      english: "I see Your divine universal form, with many faces, many eyes, many wondrous forms, and adorned with many divine ornaments."
    },
    {
      id: "11.9",
      sanskrit: "नानावर्णं नभनसि दिवि नानावृत्तिं च पृथिवीम् |\nनानाविधान च देवता: सन्तस्ते देवदर्शनम् ||११-९||",
      hindi: "मैं देखता हूँ कि आकाश में और पृथ्वी में अनेक रंग और अनेक आकार हैं, सभी देवता तुम्हारे इस रूप को देख रहे हैं।",
      english: "In the sky and on earth are numerous colors and forms; multitudes of gods behold this wondrous form of Yours."
    },
    {
      id: "11.10",
      sanskrit: "इदं तव महत्सत्त्वस्य दर्शनं ददामि ते |\nइहैवाभूदितं गुह्यमेकं वक्ष्याम्यश्च मे ||११-१०||",
      hindi: "हे अर्जुन! मैं तुम्हें यह मेरा विराट रूप दिखाता हूँ जो दुर्लभ है। अभी मैं तुम्हें मेरी उस अद्भुत प्रकृति का रहस्य बताऊंगा।",
      english: "O Arjuna, I reveal to you this great cosmic form, rare and difficult to see. Now I will tell you more about My wondrous nature."
    },
    {
      id: "11.11",
      sanskrit: "विश्चितायमानो मुहूर्तं दर्शनानां मेरे कुतूहलम् |\nसर्वान्भूतान् तव रूपं समं चापि विश्वरूपम् ||११-११||",
      hindi: "मैं थोड़ी देर के लिए भी तुम्हारे अद्भुत विराट रूप को देखकर दंग रह गया, जो समस्त जीवों का एकरूप है।",
      english: "For a moment, I marveled at Your wondrous universal form, seeing all beings and the entire cosmic manifestation."
    },
    {
      id: "11.12",
      sanskrit: "अवक्तव्यं मया तत्त्वतः विश्वरूपं महात्मनः |\nदृश्यते मेऽयं रूपः पश्य शूरोऽहं त्वां समाहितम् ||११-१२||",
      hindi: "मेरा यह विराट रूप तत्त्वतः अवर्णनीय है, हे शूरवीर! मैं सांत्वना करता हूँ और तुम्हें ऐसा सोचकर देख रहा हूँ।",
      english: "This cosmic form of Yours is indescribable in truth. O valiant one, I behold you with composed mind and heart."
    },
    {
      id: "11.13",
      sanskrit: "न ते विदुः सुरगणाः प्रभवं न महर्षयः |\nअहं ब्रह्मास्मि सर्वस्य प्रभव सर्वमित्युत्तमम् ||११-१३||",
      hindi: "हे भगवान! देवगण और महर्षि भी आपकी उत्पत्ति को नहीं जानते हैं। आप सर्वप्रभु, सर्वव्यापी और ब्रह्म के सर्वोच्च रूप हैं।",
      english: "O Lord, neither the gods nor the great sages know Your origin. You are Brahman, the source of all, the supreme cause of all."
    },
    {
      id: "11.14",
      sanskrit: "अनेकवक्त्रं अनेकाद्भुजं अनेकपादपद्मम् |\nसत्त्वमात्मामसि देव सकलामसि देवदेव ||११-१४||",
      hindi: "तुम कई मुखों और भुजाओं वाले, अनेक पद और पद्मों के साथ हो, तुम समस्त देवों के देव होने के साथ आत्मा और प्रकृति का स्वरूप हो।",
      english: "You are the one with many faces, arms, and feet, and You possess all divine qualities. You are the God of gods, the soul and nature of all."
    },
    {
      id: "11.15",
      sanskrit: "न च मां तं दृष्ट्वाऽत्र निगूढं रूपमव्ययं |\nनातिमृगतृष्णोऽसति न च मे द्रोणोऽस्ति किं चन ||११-१५||",
      hindi: "मैंने तुम्हारे इस अद्भुत आतत्मिक रूप को पहले कभी नहीं देखा है। मैं न कोई मृगमरीचिका हूँ, न मेरे मन में कोई भ्रम है।",
      english: "I have never before seen this mystic, imperishable form of Yours. I am not under any illusion nor do I have any doubt, O Lord."
    },
    {
      id: "11.16",
      sanskrit: "भयमिहैव विजानीयां तव दैविरोधिनः सभाम् |\nएवमुक्तस्त्वया कृष्ण परमं व्यथितो ह्यहम् ||११-१६||",
      hindi: "हे कृष्ण! तुम्हारे विरोधियों के संप्रदाय को देखकर मैं आज भयभीत हूँ। तुमसे ऐसा बोलकर मैं अत्यंत व्यथित हूँ।",
      english: "Seeing your hostile assembly, O Krishna, I am terrified and deeply disturbed while speaking to You thus."
    },
    {
      id: "11.17",
      sanskrit: "एष मां दुःखमदं जन्म योगोऽयं जगतोऽस्मि मम |\nअनेन तु न विन्देयं वृतिं विजितात्मनाम् ||११-१७||",
      hindi: "यह संसार मेरा दुःख का कारण है, यह जन्म मेरा योग है। इससे मैं अपने मनोबलविहीन मन को नहीं जीत पाता।",
      english: "This birth and existence cause me grief, O Krishna; this is the course of the world. I cannot overcome this weakness with my own resolve."
    },
    {
      id: "11.18",
      sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय |\nइमं विश्वमिमं विभूतिं मां तूंशि पार्थ सदाशिवम् ||११-१८||",
      hindi: "धनंजय! आपके अतिरिक्त कोई भी मुझे नहीं जानता। हे पार्थ! आप मुझे कल्याणकारी और आप धर्मरूप हैं, इस विराट रूप को दिखा रहे हैं।",
      english: "O Dhananjaya, there is none superior to Me. O Partha, You show Me this cosmic manifestation of Yours, O eternal auspicious one."
    },
    {
      id: "11.19",
      sanskrit: "एष तेजश्च भूय इदं मम विभूतितस्त्वया |\nश्रीर्विजयः शोकोऽथवा भयं चैव न च मे ऽस्ति ||११-१९||",
      hindi: "यह तुम्हारी विभूतियों में से प्रचण्ड तेज है, और मेरे लिए यह सौभाग्य, विजय, शोक, एवं भय में से कुछ नहीं है।",
      english: "This dazzling splendor of Yours is greatly beyond measure. For Me there is no fortune or victory, no grief or fear."
    },
    {
      id: "11.20",
      sanskrit: "त्वया समर्थो हि मे देव दैत्यश्चास्मि त्वया प्रसक्तः |\nतस्य वधार्थे कृतं चेष्टं तव च बलं तथा ||११-२०||",
      hindi: "मैं शक्ति से भरा हूँ इसलिए मैं तुम्हारा समीप हूँ। मैं उन दैत्यों की हत्या करता हूँ जिसकी इच्छा तुम्हारी शक्ति से है।",
      english: "Because of Your unlimited strength, I am attached to You, O God. My powers and endeavors are only for the destruction of demons by Your grace."
    },
    {
      id: "11.21",
      sanskrit: "यो मे पार्थ कृपया परयाऽप्सु प्रसादयति सत्त्वत: |\nस त्वयि नमस्यति सर्वान् पश्यति च मे चेद्यम् ||११-२१||",
      hindi: "हे पार्थ! जो व्यक्ति मुझ पर करुणा करते हुए सच्चे मन से मुझे प्रसन्न करता है, वह मुझे सर्वस्व समझता है, मुझे नमस्कार करता है और मुझे देखता है।",
      english: "O Partha, whoever sincerely worships Me with love and devotion, that person sees Me in all beings and all beings in Me."
    },
    {
      id: "11.22",
      sanskrit: "न मां पार्थ दैत्येन्द्रस्य प्राणिनश्चास्मि चालयन् |\nन चैव मे मां भक्त्या कश्चिद्दीयते सुखी भवेत् ||११-२२||",
      hindi: "हे पार्थ! मैं दैत्यों का निंदक नहीं हूँ, न जीवों को विनाश करने वाला हूँ। और मेरी भक्ति से कोई दुखी नहीं होता।",
      english: "O Partha, I am not disturbing the lives of the demon king and others, nor does anyone become joyful without devotion to Me."
    },
    {
      id: "11.23",
      sanskrit: "न मे पार्थ दैत्येन्द्रस्य प्राणिनश्चास्मि चालयन् |\nन चैव मे मां भक्त्या कश्चिद्दीयते सुखी भवेत् ||११-२३||",
      hindi: "मैं दैत्यों के प्राणों को नष्ट नहीं करता, और जो मुझे भक्ति से नहीं पूजते वे सुखी नहीं हो सकते।",
      english: "O Partha, I neither destroy the lives of the leaders of the demons nor does anyone who is not devoted to Me achieve true happiness."
    },
    {
      id: "11.24",
      sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||११-२४||",
      hindi: "जो व्यक्ति विषयों का ध्यान करता है, उसमें आसक्ति उत्पन्न होती है, उससे काम होता है, और काम से क्रोध उत्पन्न होता है।",
      english: "One who contemplates the objects of the senses develops attachment to them; from attachment desire develops, and from desire anger arises."
    },
    {
      id: "11.25",
      sanskrit: "क्रोधाद्भवान्निज्जन्म पापं प्रजायते फलम् |\nतस्माद्ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ||११-२५||",
      hindi: "क्रोध से व्यक्ति के जन्मों के पापों का फल उत्पन्न होता है। इसलिए विषयों का ध्यान करने वाला मनुष्य आसक्त हो जाता है।",
      english: "Out of anger, the whole creation of sinful actions arises in this birth. Therefore, one who meditates on the objects of the senses becomes attached to them."
    },
    {
      id: "11.26",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसङ्गः समाहितात्मा कर्म रुपं प्रकुरुते ||११-२६||",
      hindi: "इसलिए इस संसार में आसक्ति रहित होकर, समर्पित होकर, हमेशा अपने कर्मों का पालन करो। आसक्ति से रहित और एकाग्रचित्त व्यक्ति कर्म के रूप में अपना कार्य करता है।",
      english: "Therefore, without attachment, perform your obligatory duty constantly, O Arjuna, because by performing action without attachment one attains the supreme."
    },
    {
      id: "11.27",
      sanskrit: "मामुपेत्य पुनर्जन्म न विद्यतेऽमरस्य च |\nमामेवैष्यसि युक्त्वैव मत्परायणः पदम् ||११-२७||",
      hindi: "जो मुझसे जुड़ा हुआ है, वह फिर जन्म नहीं लेता, क्योंकि मैं अमर हूँ। केवल जो मुझमें पूर्ण रूप से लीन रहता है, वह मुझे प्राप्त होता है।",
      english: "If you become devoted to Me with single-minded devotion, you will obtain Me without doubt. After attaining Me, you will never take birth again."
    },
    {
      id: "11.28",
      sanskrit: "कामान्कामरूपाणां वेषां भेदमिमं पर्यश्यसि |\nतस्मिन् त्वामदं कौन्तेय दर्शने मत्परायणम् ||११-२८||",
      hindi: "हे कुन्तीपुत्र! तुम देख रहे हो कि से सभी इच्छाएं और रूप भेद-भेद हैं। इसलिए मेरे दिव्य दर्शन में तुम मुझमें तल्लीन हो जाओ।",
      english: "O son of Kunti, you can see many diverse forms and desires. Therefore, always remain absorbed in Me and My divine vision."
    },
    {
      id: "11.29",
      sanskrit: "ाभ्यर्च्य पूजां दैव्या मां सुरैर्हविषि च जायते |\nतस्मिन्नर्थे त्वं राज्यं स पश्यति समन्वितः ||११-२९||",
      hindi: "जो सूर्य, देवताओं और यज्ञों द्वारा पूजित होता हूँ, वही राज्य और प्रजा को देख सकता है।",
      english: "One who worships Me with faith and devotion, honored by the gods and sacrificial fire, obtains kingship over the earth."
    },
    {
      id: "11.30",
      sanskrit: "पश्यामि त्वां सर्वतोमुखं सर्वस्य त्वं राजधानी |\nसदृशी त्वां तव दिव्यं विभूतिं पाहि मां प्रभो ||११-३०||",
      hindi: "हे प्रभो, मैं तुम्हें हर ओर देखता हूँ, तुम सभी लोकों में छाए हुए हो। अपनी दिव्य विभूतियों से मुझे सुरक्षित करो।",
      english: "I see You everywhere, O Supreme One; You pervade all worlds. Please protect me with Your divine powers."
    },
    {
      id: "11.31",
      sanskrit: "ज्योतिषां च तिमिरं च मम स्वरूपमर्जुन ||\nमारिष्वास्मि निहतश्चैव पश्यामि च त्वां विचित्रम् ||११-३१||",
      hindi: "मेरा रूप पूरे ब्रह्मांड का प्रकाश और अंधकार है। हे अर्जुन! मैं तुम्हें इस विचित्र रूप में देखता हूँ जो मारता है और विनाश करता है।",
      english: "I see You as the light and darkness of all things. O Arjuna, I see You in this wondrous form that destroys and annihilates all."
    },
    {
      id: "11.32",
      sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः |\nऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधेषु ||११-३२||",
      hindi: "मैं काल हूँ, समय का देवता, जो लोकों का विनाश करने के लिए आया हूँ। युद्धभूमि में जिते हुए शत्रु मुझसे बच नहीं पाएंगे।",
      english: "I am Time, the great destroyer of worlds, and I have come here to annihilate all people. Even without you, all the warriors arrayed in battle will be slain."
    },
    {
      id: "11.33",
      sanskrit: "तस्मादेवं विदित्वा योगं विज्ञानसहितम् |\nयुध्यस्व भारत सर्वात्मानं बलान्मे मत्स्व स्थितान् ||११-३३||",
      hindi: "इस प्रकार योग और विज्ञान से सुस्पष्ट रूप से जानकर, हे भारत! तुम युद्ध करो, अपने बल और संकल्प से मुझमें स्थित होकर।",
      english: "Therefore, arise and gain glory! Vanquish your enemies by knowing and understanding this Yoga with wisdom, standing firm in Me and your own strength."
    },
    {
      id: "11.34",
      sanskrit: "यच्चास्ति कर्तुं तथा भूयः सर्वमिदानीं तव गतम् |\nददामि त्वां द्विविधां शक्तिं शक्त्या योगसंज्ञया ||११-३४||",
      hindi: "अब तक तेरा जो कार्य शेष है, मैं तुम्हें दो प्रकार की शक्ति देता हूँ—योग से प्राप्त और यथार्थ जागरूकता द्वारा।",
      english: "Now all that remains to be done by you, I give you two types of power: the strength acquired through Yoga and the strength of determination."
    },
    {
      id: "11.35",
      sanskrit: "सर्वान्भूतान्तरात्मा मां सर्वभूताधिभूतलः |\nअहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते ||११-३५||",
      hindi: "मैं सभी प्राणियों के भीतरी और बाहरी स्वयं हूँ। मैं सब का उत्पत्ति करने वाला हूँ और सब कुछ मुझसे चलता है।",
      english: "I am the inner self within all beings; the ultimate controller of all beings. I am the source of all; from Me everything proceeds."
    },
    {
      id: "11.36",
      sanskrit: "ननु त्वमद्य जगतः पिता पिता तवा गतिश्च |\nसर्वस्यार्जुन तवाशिर्वादस्तेऽस्तु महीधर ||११-३६||",
      hindi: "हे अर्जुन! तुम आज इस जगत के पिता हो। हे पृथ्वी के रखवाले! तुम्हारा आशीर्वाद हमारे लिए बना रहे।",
      english: "O Arjuna, today You are the supreme father of this world. O Lord of the earth, may Your blessings and protection always remain."
    },
    {
      id: "11.37",
      sanskrit: "पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः |\nनानाविधानि दिव्यानि नानावर्णाकृतीनि च ||११-३७||",
      hindi: "हे पार्थ! मैं देखता हूँ तुम्हारे सौ से भी अधिक और हजार से भी अधिक दिव्य रूपों को, विभिन्न वर्णों और आकृतियों में।",
      english: "O Partha, I see Your hundreds and thousands of divine forms in many different colors and shapes."
    },
    {
      id: "11.38",
      sanskrit: "एवं दिदृक्षः शौर्यं तेजः शोभां च भास्करः |\nसर्वेर्मुनिभिः संयुता देवाः स्तुवन्ति मामकम् ||११-३८||",
      hindi: "हे भास्कर! आपने जो पराक्रम, तेज और शोभा के स्वरूप देखें, वह सभी मुनियों और देवताओं द्वारा स्तुति के योग्य है।",
      english: "O Sun, the glory of Your heroic deeds and radiance is praised by the assembly of great sages and celestial gods."
    },
    {
      id: "11.39",
      sanskrit: "तेषामङ्गानि च सर्वाणि पश्यामि विभूतितः परः |\nनष्टानिच्छामि विमुह्येत्तानि पश्चात्त्वयि ते ||११-३९||",
      hindi: "हे क्षेत्रेश्वर! सभी वे भाग मैं तुम्हारे विराट रूप में देखता हूँ। हे मेरे स्वामी! उनके नाश की कामना करता हूँ और भ्रम से बचाओ।",
      english: "O Lord of the field, I perceive all their limbs and parts in Your cosmic form. O master of mine, I desire their destruction and protect me from bewilderment."
    },
    {
      id: "11.40",
      sanskrit: "इमे सन्तः पुरुषा दिव्यान्स्वर्गादपि तिष्ठन्ति |\nत्वां वेदाहमेतान्यथा वेद सर्वमिदं विचक्षते ||११-४०||",
      hindi: "ये ज्ञानी पुरुष स्वर्ग भी ऊपर रहते हैं, तुम इन सबको जानते हो जैसे सारी सृष्टि जानती है।",
      english: "These divine beings dwell higher than the heavenly planets. You know them all as the entire universe is known."
    },
    {
      id: "11.41",
      sanskrit: "नाहं त्वां लोकयात्रे विद्धि न च मे शोचसि ॥११-४१॥",
      hindi: "हे अर्जुन! तू अपना लोक भ्रमण का अधिकारी नहीं है, और तू मुझ पर शोक नहीं करना चाहिए।",
      english: "O Arjuna, you are not permitted to behold Me in the universal form, nor should you lament."
    },
    {
      id: "11.42",
      sanskrit: "एतानिदं विभूतिं पुरुषं चराचरं पश्य ||११-४२||",
      hindi: "हे अर्जुन! इन सभी विराट स्वरूपों को, जीव एवं अजैव, मुझ में देखो।",
      english: "Behold, O Arjuna, this cosmic manifestation, both moving and unmoving beings."
    },
    {
      id: "11.43",
      sanskrit: "एतानिदं विभूतिं पुरुषं चराचरं पश्य ||११-४३||",
      hindi: "हे अर्जुन! इसे सर्वत्र और सर्वत्र देखो। मुझमें अनेकों रूप हैं जो अचूक और अनादि हैं।",
      english: "See these manifestations of Mine, O Arjuna, moving and unmoving."
    },
    {
      id: "11.44",
      sanskrit: "अहमेव सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते |\nइति मत्वा भजन्ते मां बुद्ध्या योगेन चापरे ||११-४४||",
      hindi: "सबकी उत्पत्ति मैं ही हूँ। जो मुझे जानते हैं, वे मुझे बुद्धि और योग शक्ति से पूजते हैं।",
      english: "I am the origin of all creation; everything proceeds from Me. Knowing this, the wise worship Me with devotion and yoga."
    },
    {
      id: "11.45",
      sanskrit: "सर्वे तेऽप्यगृणन्तु माँ तु सर्वे मे मत्पराः |\nअदर्शनादथवं गुप्तं तवान्तरमृषयः ||११-४५||",
      hindi: "योगियों से भी जो मुझसे भिन्न हो, वे मुझपर भक्ति से अटूट बने रहें। वे अज्ञान के कारण मेरे अदृश्य रूप को नहीं पहचाने।",
      english: "Let all be Yours, yet all devoted to Me. The sages recognize Your supreme being, even if concealed to those unwise."
    },
    {
      id: "11.46",
      sanskrit: "एवं मम विभूतयो दर्शितारं त्वया परम् |\nभगवनात्मानमात्मानं मे त्वद्व्यक्तमव्ययम् ||११-४६||",
      hindi: "हे भगवान! आप द्वारा दिखाए गए इस दिव्य रूप के लिए मैं तेरी अभिव्यक्ति को बुझता हूँ।",
      english: "O Lord, I behold Your divine manifestations. You are the Supreme Being, both manifest and unmanifest."
    },
    {
      id: "11.47",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसङ्गः समाहितात्मा कर्म रूपं कुरुतेऽर्जुन ||११-४७||",
      hindi: "हे अर्जुन! इसलिए बिना आसक्ति के, कर्तव्य कर्म करो।",
      english: "Therefore, without attachment, perform your duty constantly, O Arjuna."
    },
    {
      id: "11.48",
      sanskrit: "यै मध्ये मैलो न संशयोऽस्ति मघ्नते च सत्त्वतः |\nता मम पादाम्बोजौ सर्वचराचरेषु मूर्तिषु ||११-४८||",
      hindi: "जो मनुष्य निःस्पृह होकर तुम्हारे चरणों में आश्रय लेता है, वह संदेह रहित होकर निश्चित है कि उसे रक्षा मिलती है।",
      english: "Those who, without doubt, completely surrender to My lotus feet among all living entities are protected and freed from delusion."
    },
    {
      id: "11.49",
      sanskrit: "एचोऽपि भूयोऽपि विद्यार्थी तं कर्म समाचरेत् |\nनान्यथा नैव सीदति हि तस्य कर्मसु कार्ये ||११-४९||",
      hindi: "हे विद्याधर! अधिकाधिक ज्ञान के लिए कर्म का सम्यक् पालन करें।",
      english: "O learned one, perform your duties in accord with the wisdom you have. There is no other way to success in your religious duties."
    },
    {
      id: "11.50",
      sanskrit: "एतेषां त्वन्ते निष्यन्दन्ति शवस्थितयः समा: |\nतच्छंसुः परिवर्त्येति धीरास्ते रामः सदा ||११-५०||",
      hindi: "धीर पुरुष प्राणों का संहार नहीं करते हैं, वे समझदारी से युद्ध करते हैं।",
      english: "At the end, those who are wise do not lament the destruction of their bodies but remain steadfast in their duty."
    },
    {
      id: "11.51",
      sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च |\nमय्यर्पितमनोबुद्धिर्यमेया ततः निश्चिततमः ||११-५१||",
      hindi: "इसलिए सभी समयों पर मुझको स्मरण करो और युद्ध करो। जो मुझमें संलग्न मन और बुद्धि रखता है, वह सर्वश्रेष्ठ है।",
      english: "Therefore, at all times remember Me and fight with your mind and intellect dedicated to Me. This is the most assured way."
    },
    {
      id: "11.52",
      sanskrit: "अर्जुन उवाच |\nएष विश्वरूप एवम् दृश्यते मम देहे महीपते |\nदिव्यं रूपम् अद्भुतं चैव तव दैवीयमेव च ||११-५२||",
      hindi: "अर्जुन बोले: हे प्रभु! तुम्हारा यह विराट रूप मेरे शरीर में इस प्रकार दिखता है। यह रूप दिव्य, अद्भुत और केवल तुम ही का है।",
      english: "Arjuna said: O Lord, in my body I see Your Universal Form, which is divine, wondrous, and truly Your godly form."
    },
    {
      id: "11.53",
      sanskrit: "ममैवैष्टान्वष्ठानं\nमच्चित्तोऽन्ये च तिष्ठन्ति\nमच्चित्ताः समस्तजा: सन्ति\nममात्मा मद्भावा सर्वदा ||११-५३||",
      hindi: "मेरे अन्दर सब कुछ स्थित है। मेरी इच्छा और मन में ही अन्य सभी का वास है। मुझमें स्थित सब जीव मेरे ही अंश हैं।",
      english: "My soul is situated in all beings; all creatures live in My mind; I am present in all as the soul."
    },
    {
      id: "11.54",
      sanskrit: "इत्येवमुक्तो हरिः श्लोकं ददौ तदा मे |\nपरमं बलं करूनात्र कृत्वान्ददौ मत्परम् ||११-५४||",
      hindi: "हे भगवान! जब तुमने मुझे यह श्लोक कहा तब तुमने मुझे अत्यंत बल दिया और मुझ पर करुणा दिखाई।",
      english: "Having thus spoken, Lord Hari gave Me that supreme verse, granting me the greatest strength and compassion."
    },
    {
      id: "11.55",
      sanskrit: "तस्मान्नारायणपर्यायं दिव्यं पर्यालोकय |\nइति मां विद्धि पार्थं पञ्चमह भूतेश्वरम् ||११-५५||",
      hindi: "हे पार्थ! मुझे जान लो उन पाँच प्रमुख रूपों से जो नारायण की विशेषता हैं।",
      english: "Therefore, O Partha, know Me as the supreme divine being with five principal forms, the ultimate Supreme."
    }
  ]
},
{
  chapter: 12,
  title: "भक्तियोग",
  english_title: "The Yoga of Devotion",
  verses: [
    {
      id: "12.1",
      sanskrit: "अर्जुन उवाच |\nएवं सततयुक्ता ये भक्तास्त्वां पर्युपासते |\nये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः ||१२-१||",
      hindi: "अर्जुन ने कहा - जो भक्तजन आपके साकार स्वरूप की निरंतर उपासना करते हैं और जो आपके अक्षर, अव्यक्त स्वरूप की भी उपासना करते हैं, उनमें से कौन श्रेष्ठ योगी है?",
      english: "Arjuna said: Those devotees who, ever steadfast, worship You with devotion and those who worship the imperishable and unmanifest—who are better versed in yoga?"
    },
    {
      id: "12.2",
      sanskrit: "श्रीभगवानुवाच |\nमय्यावेश्य मनो ये मां नित्ययुक्ता उपासते |\nश्रद्धया परयोपेताः ते मे युक्ततमा मताः ||१२-२||",
      hindi: "भगवान ने कहा - जो मन से मुझमें लीन रहते हैं, नित्यभक्त होकर और अत्यंत श्रद्धा से मेरी उपासना करते हैं, वे मेरे योग में श्रेष्ठ हैं।",
      english: "The Blessed Lord said: Those who, fixing their minds on Me, constantly worship Me with steadfast faith, I consider them to be the best yogis."
    },
    {
      id: "12.3",
      sanskrit: "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते |\nसर्वत्रगतं सततं मां तु सर्वभूताशयम् ||१२-३||",
      hindi: "जो मेरे अक्षर, परंतु अनिर्देशित, अव्यक्त स्वरूप का उपासना करते हैं, जो सर्वत्र व्याप्त और समस्त जीवों के हृदय में निवास करते हैं।",
      english: "Those who worship the imperishable, indefinable, unmanifested Reality, that universal Being which is everywhere, constant and unchanging, dwelling in the hearts of all beings."
    },
    {
      id: "12.4",
      sanskrit: "ये तु सर्वाणि कर्माणि मयि सङ्कल्पयन्तः अधिकाः |\nअध्यक्षानेश्वरभावं सर्वकर्मफलतां त्यजतः ||१२-४||",
      hindi: "परन्तु जो मुझमें संकल्पित होकर सारे कर्म करते हैं, मेरे अधीन और ईश्वरभाव से और जो कर्मों के फलों से बेपरवाह रहते हैं।",
      english: "But those who perform all actions for Me, who are devoted to Me as the supreme Lord and who renounce the fruits of their actions."
    },
    {
      id: "12.5",
      sanskrit: "जो मया পরিপ্ৰেয়ो भवन्ति मम सत्यनिष्ठाः |\nतान्मां भक्त्या मामुपैति तेषां च मे प्रियाः सदा ||१२-५||",
      hindi: "जो मुझ पर अटूट भरोसा रखते हैं, वे मुझसे परम प्रिय हैं; वे सदैव मुझे भक्ति से प्राप्त होते हैं और मेरे प्रिय होते हैं।",
      english: "Those who are devoted to Me with unwavering faith and for whom I am the ultimate refuge, these are dear to Me always."
    },
    {
      id: "12.6",
      sanskrit: "ये मां तत्त्वतत्त्वेन भक्त्या लभन्ते परं प्रभुम् |\nत्वं तेषु चात्मानं शुद्धं भक्त्या परयोपेतया ||१२-६||",
      hindi: "जो लोग मुझ सच को सचेतनता के साथ भक्तिपूर्वक प्राप्त करते हैं, उन भक्तों का अहं शुद्ध आत्मा मानता हूँ।",
      english: "Those who recognize Me with true knowledge and love and worship Me with supreme devotion, they are the purest of beings and dear to Me."
    },
    {
      id: "12.7",
      sanskrit: "यथैकनिष्ठा पर्युपासते कामसक्तास्तथा नराः |\nमनसांसि नियम्य नेतृत्वे नान्यथा कुर्वन्ति ते ||१२-७||",
      hindi: "जैसे कोई मनुष्य अपने मन को एकाग्रचित्त होकर मुझमें लीन करता है, वैसे ही वे भी अपने मन को नियंत्रण करके अन्यथा नहीं करते।",
      english: "As a man who is devoted to Me, with one-pointed mind, controls his sensory organs and subdues his mind, so these devotees constantly fix their minds on Me and do not deviate."
    },
    {
      id: "12.8",
      sanskrit: "अधिष्ठाय मनं हरि भक्त्या मामनुसंसते |\nसंप्राप्य योगसंस्ततां मद्भक्तः स मे प्रियः ||१२-८||",
      hindi: "जो लोग मन को हरि (मुझ) पर स्थापित करते हैं, भक्तिपूर्वक मेरा स्मरण करते हैं, योग में लगे रहते हैं, वे मुझे अत्यंत प्रिय हैं।",
      english: "Fixing the mind upon Me, constantly thinking of Me with devotion, these devotees are dear to Me."
    },
    {
      id: "12.9",
      sanskrit: "अर्जुन उवाच |\nएवंिँ ज्ञात्वा कृपया परयाऽप्सु प्रसादयति सत्त्वतः |\nस त्वयि नमस्यति सर्वान् पश्यति च मे चेद्यम् ||१२-९||",
      hindi: "अर्जुन बोले: जिन्हे यह ज्यान प्राप्त होता है वे करुणा द्वारा प्रसन्न होकर भक्तिपूर्वक मुझको नमस्कार करते हैं और मुझे तथा सबको देखते हैं।",
      english: "Arjuna said: Those who know Me as described herein, those possessed of great compassion, they worship Me. For them, I am visible in all, and they are dear to Me."
    },
    {
      id: "12.10",
      sanskrit: "ये तु मां परमं गत्यं मद्भक्तः संग वर्जितः |\nन मे तेषां न प्रियेषु न मे तेषां न प्रणश्यति ||१२-१०||",
      hindi: "जो मुझमें पूर्ण चित होकर, आसक्ति रहित, मेरी अनन्य भक्ति करते हैं वे मेरे प्रिय हैं, न वे मुझसे कभी विछिन्न होते हैं।",
      english: "But those who always worship Me, thinking of Me with exclusive devotion and without attachment, they are dear to Me, and I am dear to them."
    },
    {
      id: "12.11",
      sanskrit: "प्रीत्योपेतमनाः शान्तिं योगं विविक्तसेवितम् |\nअपाङ्मनो दृढभक्तिः मामेवैष्यति तत्त्वत: ||१२-११||",
      hindi: "जो मनः प्रीतिपूर्वक शांत होता है, जो योग को वैराग्य से करता है, दृढ़ भक्ति के साथ मुझमें लीन रहता है, वह मुझे सिद्धतया प्राप्त होता है।",
      english: "Anyone who offers Me devotion with a loving mind and is devoted to the practice of retreat and yoga, with firm heart, certainly attains Me."
    },
    {
      id: "12.12",
      sanskrit: "श्रीभगवानुवाच |\nअप्राप्य मम देवा भवन्ति पापमाख्याय मानुषे |\nमायया मामहमेकं क्रुद्धो भजन्ति मामव्ययम् ||१२-१२||",
      hindi: "भगवान बोले - जो मनुष्य मुझसे प्रसन्न नहीं होकर माया में मूढ़ होकर मुझे नकारते हैं, वे नाश के भागी हैं।",
      english: "The Blessed Lord said: Those men who do not worship Me but worship other gods with faith, they are misled by illusion and fall down."
    },
    {
      id: "12.13",
      sanskrit: "सत्त्वसमश्च भूतात्मा समत्वं योगउच्यते |\nएष तु योगः किस्साधनः सर्वकर्मफलत्यागः ||१२-१३||",
      hindi: "सतत समभाव रखने वाला जीवात्मा योग कहलाता है, जो कर्मों के फलों का त्याग करता है।",
      english: "Yoga is defined as equanimity of mind; this is the means for renunciation of the fruit of all actions."
    },
    {
      id: "12.14",
      sanskrit: "असंत्वरलक्षणं त्यागोऽयं योगः सुखमुत्तमम् |\nअसंशयं ततो भवति चित्तस्य प्रशांतिवृति: ||१२-१४||",
      hindi: "यह योग है जिसका कोई रूप या लक्षण नहीं, जो त्याग है और अतींद्रिय सुख है; इससे निश्चय ही मन को शान्ति प्राप्त होती है।",
      english: "This yoga is the supreme and painless renunciation, which is without sign and free from doubt; it leads to peace of mind."
    },
    {
      id: "12.15",
      sanskrit: "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति |\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः ||१२-१५||",
      hindi: "जो न तो खुशी से अत्यंत होता है, न द्वेष करता है, न शोक करता है, न इच्छाएँ रखता है, शुभ-अशुभ का त्याग करता है, वही मेरे प्रिय भक्त हैं।",
      english: "One who neither rejoices nor hates, neither grieves nor desires; who renounces both good and evil; is full of devotion and is dear to Me."
    },
    {
      id: "12.16",
      sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च योगी |\nहर्षामर्षभयोद्वेगैर्मुक्तो यturned में तदा ||१२-१६||",
      hindi: "जो संसार में न उत्पन्न होता है और ना संसार को उत्पन्न करता है, जो प्रसन्नता, क्रोध, भय और बेचैनी से मुक्त होता है, वह योगी तत्क्षण मुझको प्राप्त होता है।",
      english: "He who is undisturbed in the world, and who does not disturb the world, who is free from joy, envy, fear, and anxiety—he is dear to Me."
    },
    {
      id: "12.17",
      sanskrit: "यस्मान्न च काङ्क्षति लोको न द्वेष्टि न कौल्क्षति |\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः ||१२-१७||",
      hindi: "जो संसार में न इच्छा करता है, न द्वेष करता है, न लालच करता है, शुभ-अशुभ का त्याग करता है, जो मेरे प्रति भक्त है, वह मेरे प्रिय हैं।",
      english: "He who does not desire the world, who hates nothing and frees himself from desire; who neither rejoices nor grieves; is dear to Me."
    },
    {
      id: "12.18",
      sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च योगी |\nहर्षामर्षभयोद्वेगैर्मुक्तो यturned में तदा ||१२-१८||",
      hindi: "जो जगत में अनिच्छा-प्रकट करता है, जो जगत को अप्रभावित करता है, जो सुख-दुख, भय, द्वेष से मुक्त होता है, वह योगी मुझे प्रिय होता है।",
      english: "He who is unmoved by the world and does not produce disturbance in it; who is free from joy, envy, fear, and anxiety—is beloved by Me."
    },
    {
      id: "12.19",
      sanskrit: "यस्मिन्सर्वाणि भूतानि आत्मैवातीव चिन्तयन्ति |\nव्यथितात्मानं कालयान्तं सङ्गमत्यात्मवान् ||१२-१९||",
      hindi: "जो मनुष्य सभी प्राणियों को अपने ही रूप में देखता है, जिसके मन में भय और व्यथाएं नहीं होती, जो आत्मा के समान रहता है, वह मेरे प्रिय है।",
      english: "He who sees all beings in the Self, the Self in all beings; who sees the same everywhere, he is dear to Me."
    },
    {
      id: "12.20",
      sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः |\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||१२-२०||",
      hindi: "जहाँ योगेश्वर कृष्ण और जहां धनुर्धर पार्थ (अर्जुन) हैं, वहाँ निश्चित ही श्री, विजय, संपदा, स्थायी नीति और मेरी बुद्धि है।",
      english: "Wherever there is Krishna, the lord of yoga, and wherever there is Arjuna, the supreme archer, there also are fortune, victory, prosperity, and sound morality."
    }
  ]
},
{
  chapter: 13,
  title: "क्षेत्र-क्षेत्रज्ञ विभाग योग",
  english_title: "The Yoga of the Field and the Knower of the Field",
  verses: [
    {
      id: "13.1",
      sanskrit: `अर्जुन उवाच |
प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च |
एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव ||१३-१||`,
      hindi: `अर्जुन ने कहा: हे केशव! मैं प्रकृति और पुरुष के साथ क्षेत्र एवं क्षेत्रज्ञ, तथा ज्ञान और ज्ञेय को जानना चाहता हूँ।`,
      english: `Arjuna said: O Keshava, I wish to understand Prakriti (nature) and Purusha (the enjoyer), the field and its knower, and also knowledge and the knowable.`
    },
    {
      id: "13.2",
      sanskrit: `श्रीभगवानुवाच |
इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते |
एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ||१३-२||`,
      hindi: `श्री भगवान् बोले: हे कुन्तीपुत्र! यह शरीर क्षेत्र कहलाता है और जो इसे जानता है, उसे क्षेत्रज्ञ ज्ञानीजन कहते हैं।`,
      english: `The Blessed Lord said: O son of Kunti, this body is called the field, and one who knows it is called the knower of the field by the wise.`
    },
    {
      id: "13.3",
      sanskrit: `क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत |
क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम ||१३-३||`,
      hindi: `हे भारत! तुम मुझे सभी शरीरों का क्षेत्रज्ञ जानो, और क्षेत्र व क्षेत्रज्ञ का ज्ञान ही मुझे वास्तविक ज्ञान प्रतीत होता है।`,
      english: `O Bharata, know that I am the knower of the field in all fields. Knowledge of the field and its knower is what I consider true knowledge.`
    },
    {
      id: "13.4",
      sanskrit: `तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत् |
स च यो यत्प्रभावश्च तत्समासेन मे शृणु ||१३-४||`,
      hindi: `यह क्षेत्र क्या है, कैसा है, उसमें किस-किस प्रकार के परिवर्तन होते हैं और किस कारण से उत्पन्न होता है, यह मुझे संक्षेप में सुनो।`,
      english: `Hear from Me briefly what the field is, what its nature is, what its modifications are, whence it arises, and who that knower of the field is and what his powers are.`
    },
    {
      id: "13.5",
      sanskrit: `ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधै: पृथक् |
ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः ||१३-५||`,
      hindi: `उसके विषय में अनेक ऋषियों ने विभिन्न छंदों में तथा युक्तियुक्त ब्रह्मसूत्रों में स्पष्ट शब्दों में कहा है।`,
      english: `The sages have sung of it in many ways in various Vedic hymns, and also in the reasoned and definitive aphorisms of the Brahma Sutras.`
    },
    {
      id: "13.6",
      sanskrit: `क्षेत्रं वाचमपि तत्त्वं पुरुषमव्ययमीशम् |
इन्द्रियाणि पुरुषे चार्थं भावना शरीरमेव च ||१३-६||`,
      hindi: `क्षेत्र में वाच, तत्त्व, पुरुष, अविनाशी ईश्वर, इन्द्रियाँ, पुरुष के कर्म के लिए भावना और शरीर, ये सब आते हैं।`,
      english: `The field, speech, the imperishable supreme person, the senses, the feelings of the person, and the body—all these are collectively called the field.`
    },
    {
      id: "13.7",
      sanskrit: `एतत्प्रवृत्तिं पुरुषः सर्वशक्तिमयान्वित: |
इन्द्रियाणि सौबलं चैव शरीरस्थं भ्रमति च ||१३-७||`,
      hindi: `पुरुष, जो सर्व शक्तिमान है, इसकी प्रवृत्ति के कारण इन्द्रियाँ तटस्थ होकर शरीर में भ्रमण करती हैं।`,
      english: `The person, endowed with omnipotence, causes the functions of the senses; the senses, residing in the body, wander.`
    },
    {
      id: "13.8",
      sanskrit: `इन्द्रियाणि प्रस्रवति कामसंकुलानि सर्वशः |
एतच्छरीरमित्येवं विद्धि प्रकृतिं पुरुषः स ||१३-८||`,
      hindi: `सभी इन्द्रियाँ कामों से प्रेरित होकर बाहर जाते हैं; इस प्रकार शरीर को प्रकृति और पुरुष का संयोजन माना जाता है।`,
      english: `The senses, full of desires, act in all directions; thus, the body is understood as the combination of Prakriti and Purusha.`
    },
    {
      id: "13.9",
      sanskrit: `एतत्प्रकृतिः स नार्यं पुरुषश्च पाण्डव |
एतयोर्न संयोज्येयं ज्ञानं निश्चितं मतमुत्तमम् ||१३-९||`,
      hindi: `यह प्रकृति प्राणी और पुरुष, हे पाण्डव! ये दोनों मिलाकर ज्ञान है, और यह ज्ञान सर्वोत्तम माना गया है।`,
      english: `This Prakriti is feminine, and Purusha is masculine, O Pandava; the union of these two is known as definite knowledge, considered supreme.`
    },
    {
      id: "13.10",
      sanskrit: `अतो ज्ञानं विद्धि पावनं परमं ताक्रम |
यस्मादेतत्सर्वं वेद स वेदवित्परं गुरु ||१३-१०||`,
      hindi: `इसलिए यह ज्ञान पवित्रतम और परम है, जिससे यह सब कुछ ज्ञात होता है; वह ज्ञानी, गुरु से भी ऊपर होता है।`,
      english: `Therefore know that knowledge is supremely pure and beyond all else; through it, everything is known, and one who understands this is superior even to a guru.`
    },
    {
      id: "13.11",
      sanskrit: `निर्द्बन्धं निर्विकारं च तत्सत्त्वं स्थिरमेव च |
ज्ञानं ज्ञानगतं गुह्यमतत्तत्त्वसंशितम् ||१३-११||`,
      hindi: `ज्ञान बिना बाधा, बिना परिवर्तन और सच में स्थिर है; वह ज्ञान जिसके अंतर्गत रहस्यात्मक तत्त्व विद्यमान हैं।`,
      english: `It is free from anxiety and change, steady, and stays within knowledge itself; this knowledge is a secret and a foundational truth.`
    },
    {
      id: "13.12",
      sanskrit: `यदाविद्यायामन्तश्चास्म्यपर्यायसम्भवम् |
तच्च ज्ञानं विदित्वा मोक्ष्कामः स भवति तत् ||१३-१२||`,
      hindi: `जब वह मानव अज्ञान के आवरण से मुक्त होकर ज्ञान को जान लेता है, तो वह मोक्षकामी बन जाता है।`,
      english: `When a person surpasses ignorance and attains this knowledge, he becomes desirous of liberation.`
    },
    {
      id: "13.13",
      sanskrit: `तस्य हेतोर्हि तत्त्वज्ञानं जन्तो: पुरुषार्थसाधनम् |
यच्चाभिनिवेशश्चैव तज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||१३-१३||`,
      hindi: `तत्त्वज्ञान जीवों के उद्देश्य की पूर्ति है, और जो आत्मा में वास करता है, उसे जानकर तू अशुभ से विमुक्त हो जाएगा।`,
      english: `For knowledge of this essence is the means to the fulfillment of the living beings' purposes, and by knowing the indwelling spirit, you shall be freed from evil.`
    },
    {
      id: "13.14",
      sanskrit: `असंशयं महाबाहो मनः संस्पर्शेऽस्मि तत्त्वत: |
तद्भावभावशून्यमेवं ज्ञानेन तु विषयजम् ||१३-१४||`,
      hindi: `हे महाबाहो! निश्चित रूप से मैं मनुष्य के मन को स्पर्श करता हूँ। ज्ञान ही विषयों में निरपेक्ष है।`,
      english: `Undoubtedly, O mighty-armed one, I am the actual touch of the mind, which is devoid of all objective attributes in pure knowledge.`
    },
    {
      id: "13.15",
      sanskrit: `यथा प्रकाशयति सूर्य: सर्वजनमिमां प्रवृत्तिम् |
ज्ञानं ज्ञानिनामवप्तिर्मृत्योर्यतमनुत्तमम् ||१३-१५||`,
      hindi: `जिस प्रकार सूर्य समस्त प्राणियों को प्रकाशमान करता है, उसी प्रकार ज्ञान ज्ञानियों का प्राप्य है, जो मृत्यु से ऊपर है।`,
      english: `Just as the sun illuminates all beings, knowledge is gained by the wise, granting the supreme life beyond death.`
    },
    {
      id: "13.16",
      sanskrit: `सर्वगतं सविकल्पं तथात्म्येनाधिकारी अपि च |
विपर्यासात्सच्चिदानन्दरूपाधिकरं तत् ||१३-१६||`,
      hindi: `जो सर्वत्र है, जिसके समस्त गुण हैं, जो अपने अपनी प्रकृति में समान है, परन्तु भेद के कारण सच, चेतना और आनंदरूप बन जाता है।`,
      english: `It is omnipresent, with all determinateness, and though one with nature, it becomes the eternal, conscious, blissful essence due to differentiation.`
    },
    {
      id: "13.17",
      sanskrit: `यस्मात्किञ्चित्तु विद्यते लोके जगत: पशुवत्।
गूढोऽपि तद्ब्रह्म तत्त्वं प्रकृतस्ततो महार्णव: ||१३-१७||`,
      hindi: `विश्व में जो कुछ भी है, पशु की भाँति कार्य करता है; वह ब्रह्मरूप तत्त्व गुप्त रह जाता है और प्रकृति उसी का महा सागर है।`,
      english: `Whatever exists in the world appears animal-like, but the concealed Brahman is the essence, and nature is the immense ocean.`
    },
    {
      id: "13.18",
      sanskrit: `तत्सर्वाणि भूता: स्थव्यानीह हेतुपूर्वकम् |
यतत्स्थानि तु तद्विद्धि नान्यदस्ति तत्परम् ||१३-१८||`,
      hindi: `सभी प्राणियों को सत्य में अपने कारण पहले से स्थापित होकर यथार्थ धारण करना चाहिए; इसके अलावा कोई दूसरा परम वस्तु नहीं है।`,
      english: `All beings must be perceived based on cause; knowing that, nothing else is supreme.`
    },
    {
      id: "13.19",
      sanskrit: `यदृच्छया चापरं त्वेवमेतद्विजानतः।
स कलत्री क्षीयते नित्यं तदभावात्प्नुयात् ||१३-१९||`,
      hindi: `यह सब जो जाना गया है, यदि इच्छा द्वारा इसके विपरीत चले, तो वह दिव्य चेतना क्षीण हो जाती है; इससे उसका अंत होता है।`,
      english: `If, in opposition, one neglects this knowledge by desire, the divine consciousness diminishes and is ultimately destroyed.`
    },
    {
      id: "13.20",
      sanskrit: `यस्मिन्नात्मनि वसन्ति सर्वभूतानि जैसा च।
तैषां नित्ययुज्यन्ते मृता न तेषु चात्मन:॥१३-२०||`,
      hindi: `जिस आत्मा में सभी प्राणी वास करते हैं, जैसा आत्मा है, वैसा है सब, वे जीवित रहते हुए भी मृत नहीं होते और उनमें आत्मा निवास करता है।`,
      english: `In whom the Self resides and all beings abide, as the Self is, so are they; they are, though alive, not dead; the Self dwells in them.`
    },
    {
      id: "13.21",
      sanskrit: `भोक्ता करोते चात्र सर्वस्य भारतं प्रभु:।
इन्द्रियाणीन्द्रियार्थेभ्य: प्रस्रान्त मनसा शर्मा॥१३-२१||`,
      hindi: `हे भारत! यहाँ सभी जीवों के स्वामी में प्राणी भोगी, कर्ता, अधिपति है। मन विश्राम से उत्तम इन्द्रियों से समायुक्त रहता है।`,
      english: `O Bharata, the Lord of all, the enjoyer and the doer, manifests here; with a mind calm and free from interference, the senses engage with sense objects.`
    },
    {
      id: "13.22",
      sanskrit: `यः सर्वत्रगो महानुभावो ज्ञानवान्भवान्यथा।
सर्वसंपदामयीं ज्ञात्वा मोक्षं परमे परे॥१३-२२||`,
      hindi: `जो व्यक्ति सर्वत्र व्याप्त है, महान, ज्ञानशील है, वह सभी संपदाओं से परिपूर्ण है; ऐसा ज्ञानी परम मोक्ष को प्राप्त होता है।`,
      english: `One who is ever pervasive, great, wise, and endowed with knowledge, who knows well this infinite treasure, obtains supreme liberation.`
    },
    {
      id: "13.23",
      sanskrit: `क्षेत्रज्ञ इति तं उक्तो यन्मात्राण्यपि सर्वश:।
चिन्त्यते च तत्पर: स पुरुष उच्यते तत्त्ववेत्ता॥१३-२३||`,
      hindi: `सभी वस्तुओं में निरंतर चिन्तन करने वाला वह पुरुष, जो क्षेत्रज्ञ कहलाता है, तत्त्व का ज्ञाता है।`,
      english: `He who attentively contemplates the field in all its aspects is called the knower of the field, the seer of truth.`
    },
    {
      id: "13.24",
      sanskrit: `एवं ज्ञानविज्ञानयुक्तो विषया विनिवर्तयेत्।
ज्ञेयं च ज्ञातव्यं हि तत्त्वं ज्ञेयं ज्ञानेन तु युक्त:॥१३-२४||`,
      hindi: `जो ज्ञानी ज्ञान और विज्ञान के साथ विषयों का त्याग करता है, वही ज्ञेय (जानने योग्य) तत्त्व को जानता है; ज्ञानी उसका ज्ञान करता है।`,
      english: `Thus equipped with knowledge and wisdom, one abandons the objects of the senses; indeed, that truth is to be known, and one equipped with knowledge knows it.`
    },
    {
      id: "13.25",
      sanskrit: `यस्मिन्सर्वाणि भूतानि आत्मैवात्मना संयुताः।
अहमेव तद्विद्वान्मयि चेन्न नान्यः संशय:॥१३-२५||`,
      hindi: `जिसमें सभी प्राणी आत्मा से जुड़े होते हैं, वह मुझे जानता है; मुझमें संशय नहीं करता, उसका कोई दूसरा साथी नहीं।`,
      english: `He in whom all beings are encompassed by the Self and who knows Me thus, has no doubt; there is no other companion beyond Him.`
    },
    {
      id: "13.26",
      sanskrit: `स च मां नित्ययोगी यत्तत्प्रियमुत्तमं फलम्।
अकृत्वापि फलत्यागी योगी तत्त्वतो ज्ञत: स च॥१३-२६||`,
      hindi: `जो योगी मुझसे प्रेम करता है और जो न करने पर भी फल त्यागी है, वही जानता है तत्त्व को और योगी कहलाता है।`,
      english: `He who is constantly united with Me, who loves Me above all results, and who refuses the fruits of action, is a yogi truly enlightened.`
    },
    {
      id: "13.27",
      sanskrit: `एकोऽहमस्मि लोके सर्वभूतेषु चात्मवान्।
न मे द्वेष्योऽस्ति न प्रेम्णा न भ्रातृभाजो न च राजन्॥१३-२७||`,
      hindi: `मैं ही एक हूँ संसार में और सभी प्राणियों में आत्मा हूँ। मुझे न द्वेष है, न प्रेम है, न कोई भाई है, न कोई राजा हूँ मैं।`,
      english: `I alone exist in the world and in all beings as the Self; I have no hatred or love, no friends or enemies.`
    },
    {
      id: "13.28",
      sanskrit: `यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।
तस्याहं न प्रणश्यामि स च मे न प्रधान: स्मृत:॥१३-२८||`,
      hindi: `जो मुझको सर्वत्र और सब चीजों में देखता है, मैं उसका नाश नहीं करता और वह मेरा श्रेष्ठ ज्ञाता माना जाता है।`,
      english: `He who sees Me everywhere, and sees all things in Me, I never destroy him, and he is considered My highest.`
    },
    {
      id: "13.29",
      sanskrit: `मद्व्यपदेशात्परं नास्ति ज्ञानं ज्ञेयं च कीर्तयेत्।
गुणकर्मविभागश्च जात्याऽर्थं प्रकाशते हि यत्॥१३-२९||`,
      hindi: `मेरे उपदेश से उच्चतर कोई ज्ञान नहीं है। गुण और कर्म के भेद के कारण जाति-व्यवस्था का तात्पर्य स्पष्ट होता है।`,
      english: `Beyond My instructions there is no knowledge or object to be known. The division of modes and actions elucidates the meaning of caste.`
    },
    {
      id: "13.30",
      sanskrit: `एतद्विद्धि प्रतिभूतानामात्मा केवलं पुरुषम्।
प्रकृतिं स्वामधिष्ठाय सम्भावयत्यतमां गतिम्॥१३-३०||`,
      hindi: `यह जान लेना चाहिए कि जीवात्मा केवल पुरुष है, जो प्रकृति में वास करता है और जो परमगति को प्राप्त होता है।`,
      english: `Know that the spirit which is seated within the body is the true person, who dwells in Prakriti and attains the supreme destination.`
    },
    {
      id: "13.31",
      sanskrit: `य एतच्छ्रुत्वा न मुह्यति विषयानर्थे हितात्मन:।
प्रसादात्परामं पदं स्वरूपं प्रभुमतीश्वरम्॥१३-३१||`,
      hindi: `जो मनुष्य इस ज्ञान को सुन कर संसार वस्त्रों से भ्रमित नहीं होता, वह प्रसाद द्वारा परम पद, स्वरूप परमेश्वर को प्राप्त होता है।`,
      english: `One who hears this and is not deluded, O beneficial-minded, attains by grace the supreme position consisting of his own true nature of the Supreme Lord.`
    },
    {
      id: "13.32",
      sanskrit: `एवं वेदविदां व्याख्यानं यत्तत्त्वतश्च यत्।
उपदेशं परमं ज्ञेयं श्रीमद्भगवता स्वयम्॥१३-३२||`,
      hindi: `ईश्वर द्वारा स्वयं प्रतिपादित और जो तत्त्व और उपदेश परम ज्येष्ठ ज्ञानी लोगों ने दिया है, वह परम ज्ञान है।`,
      english: `Thus has the Supreme God Himself explained the supreme field and knower of field knowledge, as declared by the wisest among the learned.`
    },
    {
      id: "13.33",
      sanskrit: `एवं पाण्डव उवाच |
यं वेद विद्यते भावेत्यदृश्यस्य हेतो: परम्।
वेदात्मनामभिजानाति तं प्राहुरविदमेषम॥१३-३३||`,
      hindi: `पाण्डव ने कहा कि वह तत्त्व जो अदृश्यमय परम कारण है जिसे केवल ज्ञानी ही जान सकता है, वह कौन है?`,
      english: `Arjuna said: What is that which knowing the nature of what is unseen, knows the supreme cause?`
    },
    {
      id: "13.34",
      sanskrit: `त्वमेव प्रत्यक्षं तत्त्वमभासयसि मयि।
ज्ञानं ज्ञानिनां परं हृषीकेश त्वमादर: तुर्य:॥१३-३४||`,
      hindi: `हे हृषीकेश! तुम ही मुझमें प्रत्यक्ष तत्त्व का प्रकाश करते हो, और वह ज्ञान सभी ज्ञानी जनों के लिए सर्वोच्च और निरूप्य है।`,
      english: `O Hrishikesha, You alone manifest the supreme truth in me, which is the highest knowledge of all the wise.`
    },
    {
      id: "13.35",
      sanskrit: `क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा।
भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्॥१३-३५||`,
      hindi: `जो लोग ज्ञान चक्षु से क्षेत्र और क्षेत्रज्ञ के अन्तर को समझते हैं तथा इस जड़ प्रकृति से मुक्ति प्राप्त करते हैं वे परम स्थिति को प्राप्त होते हैं।`,
      english: `Those who, with the eye of knowledge, thus perceive the distinction between the field and its knower, and the liberation from material nature, attain the supreme state.`
    }
  ]
},
{
  chapter: 14,
  title: "ज्ञानविज्ञानयोग",
  english_title: "The Yoga of Knowledge and Wisdom",
  verses: [
    {
      id: "14.1",
      sanskrit: `श्रीभगवानुवाच |
मय اختبار ||\nमयि च ... (Note: Usually verse begin directly)
manah कर्म च पितरं च प्रकृतेर्मोहमापद्यम् |
मोहात्समुद्भूतां श्रुतिं भ्रमं विशति पापयन् ||१४-१||`,
      hindi: `श्रीभगवान् बोले: हे नथकेल! मन और कर्म पितामह प्रकृति के स्वभाव से उत्पन्न होते हैं, ये मोह से उत्पन्न हुए हैं; यह श्रुति (प्रकाश) भ्रम उत्पन्न करती है और पाप में पड़ाती है।`,
      english: `The Blessed Lord said: O son of Kunti, mind and action are born of the great primal nature (Prakriti). From delusion born, they produce knowledge of the world, but also cause heedlessness and suffering.`
    },
    {
      id: "14.2",
      sanskrit: `सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्बवाः |
नित्यानिन्द्रियकर्माणि वहन्ति विश्वदैव चारिणः ||१४-२||`,
      hindi: `प्रकृति से उत्पन्न तीन गुण – सत्त्व, रज और तम – हैं; ये नित्य रूप से इन्द्रियों के कार्यों को संभालते हुए विश्वभर में विचरण करते हैं।`,
      english: `The three modes (gunas) born of Prakriti are Sattva, Rajas, and Tamas. They eternally control the activities of the senses and the fruits of actions in the whole universe.`
    },
    {
      id: "14.3",
      sanskrit: `सत्त्वं सुखसमायतं धृतिज्ञानप्रदे facilidade |
रजस्तमो विद्विषि च ज्ञानाभावात्मकः कामः ||१४-३||`,
      hindi: `सत्त्व सुख और स्थिरता तथा ज्ञान प्रदान करता है; रजस जिज्ञासा और कार्यशीलता है; तमो अज्ञान और आलस्य रूप है।`,
      english: `Sattva is full of bliss, firmness, and knowledge; Rajas is attached to desire and activity; Tamas is darkness, delusion, and inertia.`
    },
    {
      id: "14.4",
      sanskrit: `सत्त्वात् ज्ञानमवलिप्तं तमोविद्या तमोऽनृतम् |
रजस्तमज्ञानसंयुक्तं कर्मसङ्गिनोऽर्जुन ||१४-४||`,
      hindi: `सत्त्व से ज्ञान जन्म लेता है; तमो विद्या और अनर्थ है; रजस तम के साथ जुड़ा होता है और कर्मों के बंधन में डालता है, हे अर्जुन।`,
      english: `From Sattva arises pure knowledge; from Tamas, ignorance and falsehood; Rajas combines with Tamas, binding beings to action and attachment, O Arjuna.`
    },
    {
      id: "14.5",
      sanskrit: `इन्द्रियाणि मनो बुद्धिर्नाहं कर्माणि न प्रियम् |
एष महासमुच्चयः सत्त्वं रजस्तमो गुणात् ||१४-५||`,
      hindi: `हे अर्जुन! मैं इंद्रियाँ, मन, बुद्धि और कर्म नहीं हूँ; ये तीनों गुणों – सत्त्व, रज और तम – के बड़े संयोग से बने हैं।`,
      english: `O Arjuna, I am not the senses, nor the mind or intellect; these arise from the great union of the three modes of material nature.`
    },
    {
      id: "14.6",
      sanskrit: `इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते |
एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ||१४-६||`,
      hindi: `हे कौन्तेय! यह शरीर क्षेत्र कहा जाता है, और जो इसे जानता है, वह क्षेत्रज्ञ कहलाता है।`,
      english: `O son of Kunti, this body is called the field, and one who knows it is called the knower of the field by the wise.`  
    },
    {
      id: "14.7",
      sanskrit: `एतच्चक्षुरस्मि ते निधनं पुरुषस्य श्रियः |
प्रकृतिं स्वामवष्टभ्य विजानाति योगसंस्थितिः ||१४-७||`,
      hindi: `हे पुरुष! मैं तेरी दृष्टि हूँ, तेरो भाग्य और प्रकृति को योगयुक्त होकर जानने वाला हूँ।`,
      english: `I am your eyes, your prosperity. Having taken possession of my own nature, one understands the state of yoga.`  
    },
    {
      id: "14.8",
      sanskrit: `सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः |
नित्यानिन्द्रियकर्माणि वहन्ति विश्वदैव चारिणः ||१४-८||`,
      hindi: `प्रकृति से उत्पन्न सत्त्व, रजस और तमोगुण नित्य रूप से इंद्रिय कर्म को संचालित करते हैं।`,
      english: `The three modes Sattva, Rajas, and Tamas born of Prakriti eternally carry out sense activities and all kinds of actions.`
    },
    {
      id: "14.9",
      sanskrit: `सत्त्वात् ज्ञानमवलिप्तं तमोविद्या तमोऽनृतम् |
रजस्तमज्ञानसंयुक्तं कर्मसङ्गिनोऽर्जुन ||१४-९||`,
      hindi: `सत्त्व से ज्ञान उत्पन्न होता है; तमोज्ञान, अधर्म और रजोगुण तम के साथ जुड़ा हुआ है, जिससे कर्मों का आसक्ति होती है।`,
      english: `From Sattva arises sacred knowledge; from Tamas comes ignorance and falsity; Rajas is joined with Tamas and causes attachment to action, O Arjuna.`
    },
    {
      id: "14.10",
      sanskrit: `मोहात्समुध्भूतां श्रुतिं भ्रमं विशति पापयन् |
इन्द्रियाणि मनो बुद्धिर्नाहं कर्माणि न प्रियम् ||१४-१०||`,
      hindi: `उनके मोह से सिद्ध होनेवाली श्रोत्रसम्मत भ्रम आत्मा को पाप में डालती है। मैं इंद्रिय, मन और बुद्धि नहीं हूँ, न मैं कर्म हूँ।`,
      english: `That delusory knowledge, born of illusion, causes beings to fall into sin. I am not the senses, the mind, the intellect, nor am I the doer of actions.`  
    },
    {
      id: "14.11",
      sanskrit: `जडं सत्त्वं परमं समुद्भूतमज्ञानमेव च |
तमस्माद्धि जन्मोऽधोगत इह कर्मसङ्गिता: ||१४-११||`,
      hindi: `तमोगुण जड़, परम अज्ञान से उत्पन्न है; इसलिए इसमें जन्म निरन्तर नीचे गिरता है; कर्मों के द्वारा बंधित।`,
      english: `Tamas is the greatest ignorance born of inertia; therefore, one bound to it continues to be repeatedly born and fettered by actions here in the material world.`  
    },
    {
      id: "14.12",
      sanskrit: `यत्तत्सत्त्वं प्रोच्यते परमं पुरुषो मतम |
सत्त्वं निर्मलम् शान्तम आत्मवत्त्वाभिव्यञ्जकम् ||१४-१२||`,
      hindi: `प्रकृति का जो सत्त्व माना जाता है, वह परम पुरुष है। सत्त्व निर्मल, शांत और आत्मा के स्वरूप को दर्शाता है।`,
      english: `That which is called supreme Sattva by the wise is pure, serene, free from pain, and illuminating the true nature of the self.`  
    },
    {
      id: "14.13",
      sanskrit: `यत्तेजः प्रवृत्तिर्भूतानामात्मा कृतेति चापि |
रजस्तम इति प्रोक्तं प्रकृतिसंभवमुत्तमम् ||१४-१३||`,
      hindi: `जो प्राणियों में से जन्म लेने वाली प्रेरणा है और आत्मा के रूप में कार्य करती है, वह रजस और तमस के गुणों से उत्पन्न होती है।`,
      english: `That which is called passion (Rajas) is the source of energy and activity in beings; it arises from Prakriti and is of higher nature.`  
    },
    {
      id: "14.14",
      sanskrit: `तम इदं सर्वं मूढ्यन्ति प्रकृतिस्थानि देही |
प्रवृत्ते परिसमाप्ते तान्येव पुनरागते ||१४-१४||`,
      hindi: `अविद्या से ग्रस्त जीव प्रकृति में स्थित रहते हैं, और जब उनका जन्म समाप्त होता है, तो वे फिर से जन्म लेते हैं।`,
      english: `The deluded embodied beings grounded in Prakriti are attached to these modes. When their present life ends, they return again.`  
    },
    {
      id: "14.15",
      sanskrit: `रजस्तम इति प्रोक्तं प्रकृतिसम्भवमुत्तमम् |
यत्तेजः प्रवृत्तिर्भूतानामात्मा कृतेति चापि ||१४-१५||`,
      hindi: `रजोगुण प्राकृतिक रूप से श्रेष्ठ माना जाता है जो जीवों में काम या इच्छा के रूप में कार्य करता है।`,
      english: `Rajas, the mode of passion born of material nature, is the energy which activates beings through desire and attachment.`  
    },
    {
      id: "14.16",
      sanskrit: `सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः |
नित्यानिन्द्रियकर्माणि वहन्ति विश्वदैव चारिणः ||१४-१६||`,
      hindi: `सत्त्व, रजस और तमो नामक गुण प्रकृति से उत्पन्न होते हैं, ये नित्य इंद्रिय कर्मों को चलाते हैं।`,
      english: `The three modes—Sattva, Rajas, and Tamas—are born of Prakriti; they eternally govern sense activities all over the universe.`  
    },
    {
      id: "14.17",
      sanskrit: `सत्त्वं सुखसमायतं धृतिज्ञानप्रदे facilidade |
रजस्तमो विद्विषि च ज्ञानाभावात्मकः कामः ||१४-१७||`,
      hindi: `सत्त्व सुख प्रदान करने वाला, स्थिर और ज्ञानकारी है; रजस कर्मशील और इच्छावान है; तमो ज्ञानहीन और निष्क्रिय है।`,
      english: `Sattva is full of happiness, steadiness, and knowledge; Rajas is desire and activity; Tamas is ignorance and inactivity.`  
    },
    {
      id: "14.18",
      sanskrit: `सत्त्वात् ज्ञानमवलिप्तं तमोविद्या तमोऽनृतम् |
रजस्तमज्ञानसंयुक्तं कर्मसङ्गिनोऽर्जुन ||१४-१८||`,
      hindi: `सत्त्व से ज्ञान उत्पन्न होता है, तमोगुण अज्ञान और असत्य है; रजोगुण तम और अज्ञान के साथ मिलकर कर्मों के बंधन का कारण है।`,
      english: `From Sattva arises knowledge; from Tamas comes ignorance and untruth; Rajas is joined with Tamas and causes attachment to actions, O Arjuna.`  
    },
    {
      id: "14.19",
      sanskrit: `मोहात्समुद्भूतां श्रुतिं भ्रमं विशति पापयन् |
इन्द्रियाणि मनो बुद्धिर्नाहं कर्माणि न प्रियम् ||१४-१९||`,
      hindi: `मोह से उत्पन्न भय और भ्रम आत्मा को पाप में डालते हैं; मैं इन्द्रियाँ नहीं हूँ, मन और बुद्धि नहीं, न ही कर्मों को सम्पन्न करता हूँ।`,
      english: `From delusion born, the scriptural knowledge causes doubt that leads to sin. I am not the senses, mind, intellect, nor the doer of actions.`  
    },
    {
      id: "14.20",
      sanskrit: `जड़ं सत्त्वं परमं समुद्भूतमज्ञानमेव च |
तमस्माद्धि जन्मोऽधोगत इह कर्मसङ्गिता: ||१४-२०||`,
      hindi: `तमोगुण जड़, परम अज्ञान से उत्पन्न है; इसलिए कर्मों से बंधा होकर इस संसार में जन्म लेता है।`,
      english: `Tamas is the extreme dullness born of ignorance, due to which one is bound by actions and born repeatedly in this world.`  
    },
    {
      id: "14.21",
      sanskrit: `यत्तत्सत्त्वं प्रोच्यते परमं पुरुषो मतम |
सत्त्वं निर्मलम् शान्तम आत्मवत्त्वाभिव्यञ्जकम् ||१४-२१||`,
      hindi: `जो सत्त्व कहा जाता है, वही परम पुरुष है; सत्त्व निर्मल, शांत और आत्मा का प्रतिनिधि है।`,
      english: `That which is called Sattva by the wise is the supreme person; Sattva is pure, and embodying the true nature of the self.`  
    },
    {
      id: "14.22",
      sanskrit: `यत्तेजः प्रवृत्तिर्भूतानामात्मा कृतेति चापि |
रजस्तम इति प्रोक्तं प्रकृतिसंभवमुत्तमम् ||१४-२२||`,
      hindi: `जो जीवों में उर्जा और कार्यों को उत्पन्न करता है, वही रजोगुण है, जो प्रकृति से उत्पन्न श्रेष्ठ गुण माना जाता है।`,
      english: `That which produces energy and activity in beings is called Rajas, the superior mode, born of Prakriti.`  
    },
    {
      id: "14.23",
      sanskrit: `तम इदं सर्वं मूढ्यन्ति प्रकृतिस्थानि देही |
प्रवृत्ते परिसमाप्ते तान्येव पुनरागते ||१४-२३||`,
      hindi: `अविद्या से ग्रस्त जीव प्रकृति में रहते हैं और जब उनका वर्तमान जन्म समाप्त होता है तो वे पुनः जन्म लेते हैं।`,
      english: `Deluded beings dwelling in Prakriti are bewildered; when their present lives end, they come back again.`  
    },
    {
      id: "14.24",
      sanskrit: `यद्द्रव्यं वही त्विदं सत्त्वे ज्ञेयं यस्मिन् स्थितः स्वयम् |
तदेव तामसि ज्ञानं न विदुः सत्त्वमिति तु या ||१४-२४||`,
      hindi: `जो वस्तु सत्त्व में स्थित होकर स्वयं को जानता है, वही सच्चा ज्ञान है। तमस में स्थित व्यक्ति सत्व का ज्ञान नहीं जानता।`,
      english: `What is matter and what is spirit, that by which one sees oneself, that alone is knowledge; those sunk in ignorance do not know Sattva.`  
    },
    {
      id: "14.25",
      sanskrit: `ये तु तत्त्वे परतः प्रेत्य विद्युर्त्वाचार्ययः |
ब्रह्मणो विद्यमानं तु सत्त्वं समञ्जसम् ||१४-२५||`,
      hindi: `जो जीव तत्वों से परे उड़कर ब्रह्म के पास पहुँचते हैं, उन्हें शुद्ध सत्त्व प्राप्त होता है।`,
      english: `Those who transcend the modes of material nature and go beyond attain the peace of Brahman and pure Sattva.`  
    },
    {
      id: "14.26",
      sanskrit: `संसर्गादैतत्त्वज्ञो न कर्मणः फलसंयोगात् |
अज्ञानं जन्म परं च सत्त्वज्ञोऽपि मृगया स्मृता ||१४-२६||`,
      hindi: `संसर्ग से उत्पन्न ज्ञानकर्ता न तो कर्मफल से जुड़ा रहता है न जन्म से; वह ज्ञानी भृगु की भांति है।`,
      english: `The knower of the truth is free from attachment to the fruits of actions and is beyond birth and ignorance; he is considered a sage.`  
    },
    {
      id: "14.27",
      sanskrit: `स्फुटं चैतत्त्वमतं ज्ञात्वा मुक्तो य: स मही |
स निजमात्मानं वेत्ति स युक्तः स सुखी मत: ||१४-२७||`,
      hindi: `जिसने स्पष्ट रूप में इस तत्त्व का ज्ञान प्राप्त कर स्वतः को जान लिया, वह योगी मुक्त होकर खुशी को पाता है।`,
      english: `Whoever clearly understands this principle and realizes the true self becomes united and is considered happy and liberated.`  
    }
  ]
},
{
  chapter: 15,
  title: "पुरुषोत्तम योग",
  english_title: "The Yoga of the Supreme Person",
  verses: [
    {
      id: "15.1",
      sanskrit: `उद्भिद्य न शनैर्नश्यति तस्माद्यश्च तद्वद्भवति |
तद्वद्भिर्द्रव्यभेदः कुतश्चिद्ब्रह्मणोऽव्ययः ||१५-१||`,
      hindi: `उपशीर्ष द्वारा उत्पन्न होकर वृक्ष नीचे की ओर फैला हुआ है, और वह शीघ्र नष्ट नहीं होता है। उसी प्रकार यह (आत्मा) भी नष्ट नहीं होती। उसके भेदभावों से भी यह ब्रह्म अविनाशी है।`,
      english: `Just as a tree which grows upwards with its roots above and branches below is never destroyed, so is the imperishable Brahman, distinguished by its forms.`  
    },
    {
      id: "15.2",
      sanskrit: `अश्वत्थः स उर्युर्ध्वं मूलं च परं दण्डम |
अमूल्यं च तस्योनम वृक्षं प्राहुरव्ययम् ||१५-२||`,
      hindi: `अश्वत्थ वृक्ष का मूल ऊपर और डंठल नीचे की ओर होता है। यह अमूल्य और अविनाशी वृक्ष कहा गया है।`,
      english: `The Asvattha tree’s top is upward and its root is downward; it is said to be imperishable and invaluable.`  
    },
    {
      id: "15.3",
      sanskrit: `तद्वत्त्वात् परं निरालम्बं गुणवत्त्वात् च त्रिविधम् |
बसूनां श्रेष्ठोऽस्य तदा ज्ञानमात्मा स भगवान् ||१५-३||`,
      hindi: `इसका तत्त्व, जो अकिंचन है तथा तीन गुणों से परे है, इसी वृक्ष का सर्वश्रेष्ठ भाग है, जिसे ज्ञान, आत्मा और भगवान कहा जाता है।`,
      english: `Beyond its imperishable form, this tree’s supreme part is unconditioned by qualities, known as knowledge, the self, and the Lord.`  
    },
    {
      id: "15.4",
      sanskrit: `तद्वत्त्वं पुरुषं प्राहु: पार्थानुशो तथा प्रकृतिं च |
मत्तः परतरं नान्यत्किंचिदस्ति धनंजय ||१५-४||`,
      hindi: `ऐसे पुरुष और प्रकृति को, जो मय से परे हैं, धनंजय (अर्जुन), मैं कहता हूँ; मेरे परे और कुछ भी नहीं है।`,
      english: `O Dhananjaya, know that beyond Me, there is no other Supreme, for the Purusha and Prakriti are all beyond and from Me.`  
    },
    {
      id: "15.5",
      sanskrit: `यं वेद स विमृश्यैतदात्म्येति तत्त्वत: परम् |
वेदान्तवेदोऽपि तं वेत्ति तत्त्वेनातितं पुरुषम् ||१५-५||`,
      hindi: `जो वह जानता है और मनन करता है कि वह आत्मा के समान है वह परम तत्त्व जानता है। वेदों का भी ज्ञाता वह पुरुष का तत्त्वभाव जानता है जो तत्त्वों से परे है।`,
      english: `He who sees that the self is transcendental to all material existence knows the supreme truth; even the knower of Vedanta, who goes beyond, recognizes the supreme person.`  
    },
    {
      id: "15.6",
      sanskrit: `यस्यान्त:स्थं तत्र गृहमादत्तेऽमृतात्मको 'मृत: |
शैतान्येन भुञ्जते लोकान्सर्वान् अव्ययात्मभिः ||१५-६||`,
      hindi: `जिसके अन्दर में वह अमृतात्मा निवास करता है, वह सब लोकों को शैतान्य (जो नष्ट नहीं होता) के द्वारा भोगता है।`,
      english: `He in whom the immortally blissful living entity resides within the heart, enjoys all the worlds by that imperishable energy.`  
    },
    {
      id: "15.7",
      sanskrit: `यस्य छेदनार्थं प्रकृतिं सूयते पुरुषः पुरुषं चरति |
तस्माद्वै पुरूषो लिङ्गं प्राहुः पुरुषोत्तरमुत्तमम् ||१५-७||`,
      hindi: `जिस पुरुष का उद्देश्य प्रकृति की देखरेख करना है वह पुरुष प्रकृति को पार करता है। इसलिए पुरुषोत्तम को पुरुषों का चिन्ह कहा गया है।`,
      english: `The Supreme Person who causes the destruction of this material nature moves beyond all material modes. He is called the Supreme Person, the highest of all.`  
    },
    {
      id: "15.8",
      sanskrit: `यो मे पार्थ गतिं ज्ञात्वा नेच्छामि वापरजुनि सः |
सुगतोऽमृतत्वायैति तत्र तत्पथम् अनुसृत्य तत् ||१५-८||`,
      hindi: `हे पार्थ! जो मुझमें शरण लेते हुए मेरी गति प्राप्त करता है, उसे पुनर्जन्म की इच्छा नहीं रहती। वह सुखी होकरं मोक्ष की प्राप्ति करता है और योग्य मार्ग से वहाँ पहुँचता है।`,
      english: `O Partha, whoever knows My divine transcendental nature and thus surrenders unto Me is never deluded and attains eternal bliss and liberation.`  
    },
    {
      id: "15.9",
      sanskrit: `ये त्वात्मन्यधिष्ठार्थं नित्यं चिन्तयन्तो मद्भक्ताः |
मद्भावमगच्छन्ति मम ते संसिद्धयः ||१५-९||`,
      hindi: `जो अपने लिए मुझमें मन लगा कर मुझे निरंतर ध्यान करते हैं, वे मेरी ओर प्रेम से आविर्भूत होते हैं और मुझे प्राप्त कर सिद्ध होते हैं।`,
      english: `Those who always think of Me with exclusive devotion and constant mind always dwell in Me, and I in them.`  
    },
    {
      id: "15.10",
      sanskrit: `पृथिवीतले तस्याहमुत्तमः पुरुषो मतः |
पादोऽस्मि सर्वभूतानां सात्त्विको ज्येष्ठोऽमितोमुखः ||१५-१०||`,
      hindi: `पृथ्वी पर उस पुरुष के पाद (पैर) मैं हूँ जो सर्वश्रेष्ठ है; मैं सभी जीवों के पाद भी हूँ, जो सत्त्वगुण प्रधान हैं और बड़े मुख वाले हैं।`,
      english: `Of the earth, I am the opulent land; of beings, I am the living entity; of the senses, I am the mind; and of the Vedas, I am the Sama Veda.`  
    },
    {
      id: "15.11",
      sanskrit: `वनस्पतितले महीपतेर्वाक्येषु सत्यवाक्ये |
शस्त्रेṣu चाप्यहं कार्त्तिके मांसभक्षणे तथा ||१५-११||`,
      hindi: `मैं वनों में वृक्ष, पृथ्वी पर राजा; वाक्यों में सत्यवाक्य; शस्त्रों में कार्तिकेय और मांसाहारी में भी हूँ।`,
      english: `In plants, I am the flavor in herbs; in speech, I am the truthful utterance; in weapons, I am the sacred weapon (Kartikeya) and also am in eating of flesh.`  
    },
    {
      id: "15.12",
      sanskrit: `इन्द्रियेषु सर्वेषु मध्यस्थोऽस्मि तमसः प्रवृत्तिषु |
ज्ञानान्धः प्रवृत्तेṣu मामध्यमात्मतत्त्वत: ||१५-१२||`,
      hindi: `मैं सभी इंद्रियों का मध्यस्थ हूँ जो तमोगुण में प्रवृत्त होते हैं। ज्ञान के अभाव में जो अन्ध आत्मा प्रवृत्त होता है, उसमें मैं मध्य हूँ।`,
      english: `Of all the senses, I am the mind; I am the intelligence which is the middle between knowledge and ignorance.`  
    },
    {
      id: "15.13",
      sanskrit: `एवं ज्ञानविज्ञाननिष्ठो मां युक्त इति मे मतिः |
एष त्वां शुभो हितो मित्रात्मा लोकोऽसि न संशय: ||१५-१३||`,
      hindi: `अतः जो ज्ञान और विज्ञान की आधारशिला पर मुझमें स्थित होता है, उसे मैं शुभ, हितकारी और मित्र कहता हूँ; इसमें कोई संदेह नहीं।`,
      english: `Thus, those who are devoted to Me, and situated in knowledge and wisdom, are My dear friends indeed; there is no doubt in this.`  
    },
    {
      id: "15.14",
      sanskrit: `सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च |
वेदैश्च सर्वैरहमेव वेद्यो वेदमेत्य प्रत्येकशः पराङ्मुखः ||१५-१४||`,
      hindi: `मैं सर्वस्में हृदय में निवास हूं, मुझसे स्मृति, ज्ञान और उनकी हानि होती है। मैं वेदों का विषय, ज्ञाता, और वेदों से परे हूँ।`,
      english: `I reside in the heart of all beings; from Me come memory, knowledge, and their loss. I am the object of all the Vedas, the knower of the Vedas, and beyond all.`  
    },
    {
      id: "15.15",
      sanskrit: `यस्मिन् तिष्ठन्ति सर्वाणि भूतानि आत्मैवाभिव्यक्तानि |
आत्मैव सर्वाणि भूतानि तत्र कौन्तेय नानустः ||१५-१५||`,
      hindi: `जिसमें सभी प्राणी आत्मा के रूप में निवास करते हैं, उसी में सारी प्राणियाँ उजागर होती हैं। हे कौन्तेय, वहाँ से कोई वापस नहीं आता।`,
      english: `In whom all beings reside as manifestations of the self, in whom all beings abide, O Kaunteya, none is lost from that place.`  
    },
    {
      id: "15.16",
      sanskrit: `एको देवो बहुधा वेदा देवोऽस्मि सनातनः |
मनःषष्टानि पदानि प्राह मनो बुद्धिरेक एव च ||१५-१६||`,
      hindi: `मैं एक ईश्वर हूँ, जो अनेक रूपों में प्रकट होता हूँ; मैं सनातन देव हूँ। मन, इन्द्रियाँ, पद आदि सभी मुझ से उत्पन्न हैं।`,
      english: `I am the one eternal God manifested in many forms. I am the mind, the consciousness, the intellect, and also the five senses.`  
    },
    {
      id: "15.17",
      sanskrit: `अहं वैश्वानरो बृहस्पतिर्वसवः सोम इका बलाः |
अहं दुर्गेऽस्मि करालि छन्दा विद्यामस्मि देवता ||१५-१७||`,
      hindi: `मैं वैश्वानर हूँ, बृहस्पति, वासव, सोम, एक बल है; मैं दुर्गा की कराल शक्ति, छन्द और विद्या का देवता हूँ।`,
      english: `I am the fire of digestion, the lord of speech, the ruler of the senses, the moon, and also power. I am the dreadful Durga, the Vedic meter, and learning.`  
    },
    {
      id: "15.18",
      sanskrit: `अहं व्योम व्यापी सर्वभूतानां चेतनामयोऽस्मि तत्त्वतः |
अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते ||१५-१८||`,
      hindi: `मैं आकाश की तरह सर्वत्र व्याप्त हूँ; मैं सभी प्राणियों की चेतना हूँ; मैं सबका कारण हूँ और सब मेरे ही द्वारा संचालित होता है।`,
      english: `I am the all-pervading sky, the consciousness of all beings; I am the origin of all, and from Me everything proceeds.`  
    },
    {
      id: "15.19",
      sanskrit: `अहं सिद्धः स संयमी च साधुरहं डक्षिणां वरः |
अहं पूर्वः शाश्वतश्च मध्यः भूतानामन्त एव च ||१५-१९||`,
      hindi: `मैं सिद्ध हूँ, संयमी हूँ, और पवित्र; मैं दक्षिणा प्राप्त करने वाला श्रेष्ठ हूँ। मैं पूर्वज, शाश्वत और इस संसार का मध्य और अंत हूँ।`,
      english: `I am the perfected one, the controller, the holy one, the best of those who give; I am the ancient and eternal, the middle and the end of all beings.`  
    },
    {
      id: "15.20",
      sanskrit: `एवं ज्ञानविज्ञाननिष्ठो मां युक्त: पर्युपासते |
श्रद्धयाफलै: सदृशै: पयोनिधिर्भवति ते ||१५-२०||`,
      hindi: `जिससे ज्ञान और विज्ञान का सम्बन्ध हो, जो मुझमें स्थित होकर श्रद्धा से उपासना करता है, वह शीघ्र ही मेरे समान फल प्राप्त करता है।`,
      english: `Thus, one who is devoted exclusively and who worships Me with faith, grounded in knowledge and wisdom, quickly attains My divine nature.`  
    }
  ]
},
{
  chapter: 16,
  title: "दैवासुर संपद्विभाग योग",
  english_title: "The Yoga of Division between the Divine and Demoniacal Natures",
  verses: [
    {
      id: "16.1",
      sanskrit: `श्रीभगवानुवाच |
अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।
दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥१६-१॥`,
      hindi: `श्री भगवान् बोले: निर्भयता, अंतःकरण की शुद्धि, ज्ञान में स्थित होना, दान, दम (इंद्रिय संयम), यज्ञ, स्वाध्याय, तप और सरलता—`,
      english: `The Blessed Lord said: Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, control of the senses, sacrifice, study of the scriptures, austerity, and straightforwardness;`
    },
    {
      id: "16.2",
      sanskrit: `अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।
दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥१६-२॥`,
      hindi: `अहिंसा, सत्य, क्रोध का अभाव, त्याग, शांति, दूसरों की निंदा न करना, प्राणियों पर दया, लोभ का अभाव, कोमलता, लज्जा और चंचलता का अभाव—`,
      english: `Nonviolence, truthfulness, absence of anger, renunciation, tranquility, aversion to fault-finding, compassion for beings, absence of greed, gentleness, modesty, and lack of restlessness;`
    },
    {
      id: "16.3",
      sanskrit: `तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता।
भवन्ति संपदं दैवीमभिजातस्य भारत॥१६-३॥`,
      hindi: `तेज, क्षमा, धैर्य, पवित्रता, द्वेष का अभाव, और अहंकार का अभाव—हे भारत! ये सब दिव्य गुण हैं, जो दिव्य स्वभाव वाले में उत्पन्न होते हैं।`,
      english: `Vigor, forgiveness, fortitude, purity, absence of hatred, and absence of pride—these, O Bharata, are the qualities of those born with a divine nature.`
    },
    {
      id: "16.4",
      sanskrit: `दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च।
अज्ञानं चाभिजातस्य पार्थ संपदामासुरीम्॥१६-४॥`,
      hindi: `दंभ, घमंड, अभिमान, क्रोध, कठोरता, और अज्ञान—हे पार्थ! ये गुण आसुरी स्वभाव वाले में उत्पन्न होते हैं।`,
      english: `Hypocrisy, arrogance, pride, harshness, and anger, as well as ignorance—these, O Partha, belong to those born with demoniacal qualities.`
    },
    {
      id: "16.5",
      sanskrit: `दैवी संपद्विमोक्षाय निबंधायासुरी मता।
मा शुचः संपदं दैवीमभिजातोऽसि पाण्डव॥१६-५॥`,
      hindi: `दैवी संपत्ति मोक्ष के लिए है, और आसुरी संपत्ति बंधन के लिए कही गई है। हे पाण्डव! तुम शोक मत करो, क्योंकि तुम दैवी संपत्ति वाले हो।`,
      english: `The divine qualities lead to liberation; the demoniacal to bondage. Grieve not, O Pandava, you are born with divine qualities.`
    },
    {
      id: "16.6",
      sanskrit: `द्वौ भूतसर्गौ लोकेऽस्मिन् दैव आसुर एव च।
दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे शृणु॥१६-६॥`,
      hindi: `इस संसार में दो प्रकार के प्राणी हैं—दैवी और आसुरी। दैवी प्रकृति का विस्तार से वर्णन किया जा चुका है; अब मुझसे आसुरी स्वभाव सुनो, हे पार्थ।`,
      english: `There are two types of beings in this world—the divine and the demoniacal. The divine has been described at length; now hear from Me about the demoniacal, O Partha.`
    },
    {
      id: "16.7",
      sanskrit: `प्रवृत्तिं च निवृत्तिं च जना न विदुरासुरा:।
न शौचं नापि चौचार्यं न सत्यम् तेषु विद्यते॥१६-७॥`,
      hindi: `आसुरी प्रवृत्ति वाले लोग कर्तव्य और अकर्तव्य को नहीं जानते; उनमें न शुद्धता है, न आचरण का ध्यान, न सत्य होता है।`,
      english: `Demoniacal persons know not what to do or what to refrain from; neither purity nor proper conduct nor truth is found in them.`
    },
    {
      id: "16.8",
      sanskrit: `असत्यं अप्रतिष्ठं ते जगदाहुरनीश्वरम्।
अपरस्परसम्भूतं किमन्यत्कामहैतुकम्॥१६-८॥`,
      hindi: `वे कहते हैं कि यह जगत असत्य, आधारहीन और ईश्वरविहीन है, केवल इच्छा से उत्पन्न है, बिना किसी और कारण के।`,
      english: `They say, “This universe is false, without foundation, without God, born of mutual union, and based only on lust.”`
    },
    {
      id: "16.9",
      sanskrit: `एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः।
प्रभवन्त्युग्रकर्माण: क्षयाय जगतोऽहिताः॥१६-९॥`,
      hindi: `ऐसी दृष्टि को अपनाकर, बुद्धिहीन और आत्मघातक लोग उग्र कर्मों में प्रवृत्त होकर संसार के विनाश का कारण बनते हैं।`,
      english: `Holding such views, these souls of small intelligence and cruel deeds come forth as enemies of the world, seeking its destruction.`
    },
    {
      id: "16.10",
      sanskrit: `काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः।
मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रता:॥१६-१०॥`,
      hindi: `अधमनीय वासनाओं को अपनाकर, दंभ, घमंड और उन्माद से युक्त होकर, मोह में पड़े हुए, वेदविरुद्ध सिद्धांतों को पकड़कर अशुद्ध आचरण में लगते हैं।`,
      english: `Taking refuge in insatiable desire, full of hypocrisy, pride, and arrogance, holding wrong views due to delusion, they act with impure resolve.`
    },
    {
      id: "16.11",
      sanskrit: `चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिता:।
कामोपभोगपरमा एतावदिति निश्चिताः॥१६-११॥`,
      hindi: `वे अनन्त चिन्ताएँ पालते हैं, मृत्यु तक; भोग की अधिक लालसा में रहते हैं, यही उनका निश्चय है।`,
      english: `Obsessed with innumerable cares that end only at death, convinced that lust and sensual pleasure are life’s highest aim,`
    },
    {
      id: "16.12",
      sanskrit: `आशापाशशतैर्बद्धा: कामक्रोधपरायणाः।
ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्॥१६-१२॥`,
      hindi: `सैकड़ों आशाओं के बंधन में बँधे हुए, काम और क्रोध के वशीभूत, वे अन्यायपूर्वक धन-संग्रह में लगे रहते हैं।`,
      english: `Bound by hundreds of desires, given over to lust and anger, they strive to amass wealth by unjust means for sensual enjoyment.`
    },
    {
      id: "16.13",
      sanskrit: `इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्।
इदमस्तीदमपि मे भविष्यति पुनर्धनम्॥१६-१३॥`,
      hindi: `आज मुझे यह प्राप्त हुआ, अब मैं अपनी इच्छा पूरी कर लूंगा। यह धन मेरे पास है, और आगे भी प्राप्त होगा—`,
      english: `"This I have gained today; this desire I shall fulfill; this wealth is mine, and it will remain with me in the future."`
    },
    {
      id: "16.14",
      sanskrit: `असौ मया हत: शत्रु: हनिष्ये चापरानपि।
ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी॥१६-१४॥`,
      hindi: `यह शत्रु मुझसे मारा गया है; अन्य शत्रुओं को भी मैं मार डालूंगा। मैं ईश्वर हूँ, मैं ही भोगी हूँ, मैं सिद्ध, बलवान और सुखी हूँ।`,
      english: `"That enemy I have slain; others I shall also kill. I am the Lord, I am the enjoyer, I am perfect, powerful, and happy."`
    },
    {
      id: "16.15",
      sanskrit: `आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सवदृशो मया।
यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः॥१६-१५॥`,
      hindi: `मैं धनवान और कुलीन हूँ, मेरे समान दूसरा कौन है? मैं यज्ञ करूंगा, दान दूंगा और आनन्द मनाऊंगा—इस प्रकार वे अज्ञान में मोहित रहते हैं।`,
      english: `"I am wealthy and high-born; who else is equal to me? I will sacrifice, I will give, I will rejoice—thus they are deluded by ignorance."`
    },
    {
      id: "16.16",
      sanskrit: `अनेकचित्तविभ्रान्ता मोहजालसमावृता:।
प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ॥१६-१६॥`,
      hindi: `बहुप्रकार के भ्रमों में फँसे, मोह के जाल में उलझे, और कामभोग में अत्यधिक आसक्त, वे घोर नरक में गिरते हैं।`,
      english: `Bewildered by many thoughts, entangled in the net of delusion, and addicted to sensual pleasure, they fall into foul hell.`
    },
    {
      id: "16.17",
      sanskrit: `आत्मसम्भाविताः स्तब्धा: धनमानमदान्विताः।
यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम्॥१६-१७॥`,
      hindi: `आत्म-वंदना में लगे, गर्वीले, धन और घमंड से युक्त, वे दिखावे के लिए, नियम विरुद्ध यज्ञ करते हैं।`,
      english: `Self-glorifying, stubborn, filled with pride for their wealth and birth, they perform sacrifices only in name and with hypocrisy, contrary to scriptural injunction.`
    },
    {
      id: "16.18",
      sanskrit: `अहंकारं बलं दर्पं कामं क्रोधं च संश्रिता:।
मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥१६-१८॥`,
      hindi: `अहंकार, बल, घमंड, काम और क्रोध का आश्रय लेकर, वे अपने, दूसरों के शरीरों में भी मुझसे द्वेष करते हैं और ईर्ष्या करते हैं।`,
      english: `Clinging to egoism, power, arrogance, lust, and anger, they hate and envy Me in their own and others’ bodies.`
    },
    {
      id: "16.19",
      sanskrit: `तानहं द्विषतः क्रुरान्संसारेषु नराधमान्।
क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु॥१६-१९॥`,
      hindi: `ऐसे द्वेष करने वाले, क्रूर, संसार के सबसे अधम और अशुभ लोगों को मैं बार-बार आसुरी योनियों में डाल देता हूँ।`,
      english: `Those who are envious, cruel, and the vilest among men, I cast perpetually into demoniac wombs, into lower births.`
    },
    {
      id: "16.20",
      sanskrit: `आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि।
मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्॥१६-२०॥`,
      hindi: `हे कौन्तेय! ये मूर्ख प्राणी बार-बार आसुरी योनियों में जन्म लेकर, मुझ तक नहीं पहुँचते और सबसे अधम गति को प्राप्त होते हैं।`,
      english: `Entering such demoniac wombs, deluded birth after birth, these fools, O son of Kunti, never attain Me and sink ever deeper.`
    },
    {
      id: "16.21",
      sanskrit: `त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।
काम: क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥१६-२१॥`,
      hindi: `इस नरक के तीन द्वार हैं, जो आत्मा का नाश करने वाले हैं—काम, क्रोध और लोभ; इसलिए इन तीनों का त्याग कर देना चाहिए।`,
      english: `There are three gates leading to hell—lust, anger, and greed—which destroy the soul. Therefore, one should abandon these three.`
    },
    {
      id: "16.22",
      sanskrit: `एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः।
आचरत्यात्मन: श्रेयस्ततो याति परां गतिम्॥१६-२२॥`,
      hindi: `हे कौन्तेय! जो मनुष्य इन तीन नरक द्वारों से मुक्त होता है, वह आत्मा के कल्याण का आचरण करता है और परम गति को प्राप्त होता है।`,
      english: `He, O Kaunteya, who is freed from these three gates of darkness, acts for the good of the soul and thus attains the supreme goal.`
    },
    {
      id: "16.23",
      sanskrit: `य: शास्त्रविधिमुत्सृज्य वर्तते कामकारतः।
न स सिद्धिमवाप्नोति न सुखं न परां गतिम्॥१६-२३॥`,
      hindi: `जो मनुष्य शास्त्रों का उल्लंघन करके मनमाना आचरण करता है, उसे न सिद्धि मिलती है, न सुख, न परम गति।`,
      english: `He who acts under the impulse of desire, disregarding the scriptural injunctions, attains neither perfection, happiness, nor the supreme goal.`
    },
    {
      id: "16.24",
      sanskrit: `तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ।
ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि॥१६-२४॥`,
      hindi: `इसलिए, क्या करना चाहिए और क्या नहीं, इसका निर्णय शास्त्र ही है। शास्त्र विधि जानकर, तुम्हें अपने कर्तव्य का पालन करना चाहिए।`,
      english: `Therefore, scripture is your authority in determining what is to be done and what is not to be done. Knowing the scriptural rules, you should act accordingly here.`
    }
  ]
},
{
  chapter: 17,
  title: "श्रद्धात्रयविभाग योग",
  english_title: "The Division of the Threefold Faith",
  verses: [
    {
      id: "17.1",
      sanskrit: `श्रीभगवानुवाच |
त्रिविधा भावना भक्त्या मां संस्थापय तेऽत। 
श्रद्धां प्रसृज्जास्तस्माद्बुद्धियोगं प्रति मां त्वयि॥१७-१॥`,
      hindi: `श्रीभगवान् बोले: मेरी तीन प्रकार की भक्तिभावनाएँ हैं। वे सब श्रद्धा के आधार पर हैं। इसलिए अपनी बुद्धि को मुझपर नियोजित कर दृढ़ श्रद्धा रखें।`,
      english: `The Blessed Lord said: There are three divisions of faith born of one’s nature; therefore, attach your understanding to Me with unwavering faith.`
    },
    {
      id: "17.2",
      sanskrit: `ये तु त्रिविधा भवन्ति श्रद्धा देवि भारत।
सत्त्विक्या राजसास्तमसा भिन्ना प्रभाविता:॥१७-२॥`,
      hindi: `हे भारत! ये श्रद्धा तीन प्रकार की होती हैं—सत्त्विक, राजसिक और तामसिक, जो उनके स्वभाव के अनुसार भिन्न-भिन्न होती हैं।`,
      english: `O Arjuna, these three kinds of faith arise according to the nature of the individual: sattvic, rajasic, and tamasic.`
    },
    {
      id: "17.3",
      sanskrit: `सत्त्विका श्रद्धा निर्मला सत्त्वसंगमोऽयमृता।
राजसि द्वेषपरायणा द्वन्द्वामोहा तथात्मन:॥१७-३॥`,
      hindi: `सत्त्विक श्रद्धा निर्मल होती है, यह सत्त्व के संपर्क से उत्पन्न फलमय होती है। राजसिक श्रद्धा द्वेष और भय से पूर्ण होती है।`,
      english: `Sattvic faith is pure, born of goodness and leads to liberation. Rajasic faith stems from desire and attachment, resulting in pain.`
    },
    {
      id: "17.4",
      sanskrit: `तामसी चैवाऽधमाश्चैव तृष्णया परमोभवाः।
तेषां मोहोऽधिकारस्तेऽज्ञानं परमां गतिम्॥१७-४॥`,
      hindi: `तामसिक श्रद्धा अधम है, मत्सर्य, क्रोध और तृष्णा से युक्त होती है और अज्ञान के कारण उत्तम गति से विमुख होती है।`,
      english: `Tamasic faith is of a low type, arising from ignorance, delusion, and illusion leading away from the supreme goal.`
    },
    {
      id: "17.5",
      sanskrit: `यज्ञाहवना: तप: दानं स्थाप: समाहिता:।
सुचराचाराः सततं सात्त्विका भवार्थिन:॥१७-५॥`,
      hindi: `यज्ञ, हवना, तप, दान, नियम तथा सदाचरण आदि सात्त्विक होते हैं, और ये नित्य सात्त्विक पुरुषों द्वारा किए जाते हैं।`,
      english: `Sacrifice, austerity, charity and simplicity of living are considered sattvic rites and are performed by the virtuous.`
    },
    {
      id: "17.6",
      sanskrit: `रणाद्धावनम् अभिषेकश्च धर्मोपदेशो तथा।
मन्त्रौ राजसाः सात्त्विकानां लोभा: सात्त्विका शुभा:॥१७-६॥`,
      hindi: `रणादि क्रीड़ा, अभिषेक, धार्मिक अबाध, उपदेश एवं मन्त्र राजसिक तथा सात्त्विक होते हैं, जिनमें लोभ और शुभता होती है।`,
      english: `The rajasic duties are energetic activities such as battle, ceremonies, heroism and religious instruction with ambition and desire for results.`
    },
    {
      id: "17.7",
      sanskrit: `अपत्यं भ्रातृत्वे च विल्लासो मोहमोहनो अपि।
कामोऽकामश्चैवात्मनि तामसाः प्रवृत्तयः पुरा॥१७-७॥`,
      hindi: `वंश, भाईचारे में विलास और मोह, आत्मस्वरूप के प्रति इच्छा और अनिच्छा आदि तामसिक प्रवृत्तियाँ हैं।`,
      english: `Tamasic worship involves foolishness, selfishness, madness, and acts motivated by desire or without proper knowledge.`
    },
    {
      id: "17.8",
      sanskrit: `अश्रद्धया महदात्मा अनुभवन्नो न पृथग्विधम्।
श्रद्धां न त्यजति तत्परः सङ्गं वै परिसंयुतः॥१७-८॥`,
      hindi: `जो बड़ा आत्मा श्रद्धा से युक्त न होकर, अलग-अलग प्रकारों का अनुभव करता है, वह कभी श्रद्धा को त्याजक नहीं होता; उसी के प्रति वह आसक्त होता है।`,
      english: `The great soul does not abandon faith, even if it be imperfect, nor does he lose attachment to the object of faith.`
    },
    {
      id: "17.9",
      sanskrit: `यज्ज्ञात्वा प्राप्तस्स तत्सकृत्पूज्यं स धर्म एव तदा।
श्रद्धा भवति तथा तत्र सा तत्र कौन्तेय स्थिता।।१७-९।`,
      hindi: `जो कोई वस्तु ज्ञात होकर प्राप्त हो, उसकी पूजन वही धर्म कहलाता है। श्रद्धा उसी वस्तु में रहती है, हे कौन्तेय!`,
      english: `That which is known and attained by a person, worshipped by him frequently, becomes his religion (Dharma). O Kaunteya, faith remains firmly established on that object.`
    },
    {
      id: "17.10",
      sanskrit: `तत्त्वमतितत्त्वार्थं चेति तत्तद्विदां मतम्।
तत्र तिष्ठन्ति भारत त्रिविधा मतानि देवयानि॥१७-१०॥`,
      hindi: `तत्त्व, अ-तत्त्व और अन्तः तत्त्वार्थ (भाग) को लेकर विद्वानों के मत भिन्न होते हैं। हे भारत! यह तीन प्रकार का देव-पथ है।`,
      english: `Know that there are three divisions in the knowledge of the truth: the truths, the non-truths, and the intermediate states. O Bharat, these are the three divisions of the divine path.`
    },
    {
      id: "17.11",
      sanskrit: `यत्त्वस्मिन्स्थितमिति तत्त्वं न जानन्ति मामनश्।
भक्तास्ते तु सर्धमात्रा यजन्ते तान्नराः शुभाः॥१७-११॥`,
      hindi: `जो लोग मेरे स्वरूप के तत्व को समझते नहीं, परन्तु भक्तिसभरे होते हुए, वे मुझे पूजते हैं, वे अच्छे पुरुष कहलाते हैं।`,
      english: `Those who, with faith, dwell upon Me though not clearly understanding My true nature, worship Me with devotion; such people are virtuous.`
    },
    {
      id: "17.12",
      sanskrit: `ते मे भक्त्या मामुपासते श्रद्धया परयोपेताः।
तेषां न मे पार्थ संशयः साक्षादपरि पुराः॥१७-१२॥`,
      hindi: `वे मुझमें अपार श्रद्धा से भक्तिपूर्वक उपासना करते हैं। हे पार्थ! मैं उन भक्तों में कभी संदेह नहीं करता।`,
      english: `Those possessed of supreme faith worship Me with love and devotion; to them, O Arjuna, there is no doubt.`
    },
    {
      id: "17.13",
      sanskrit: `यज्ञास्तपःसेवा दानं संयमः यथाभोगचेतसा।
ज्ञेयः सत्त्विकः संस्तौ राजसस्तप्तमतो निर्मलः॥१७-१३॥`,
      hindi: `यज्ञ, तप, सेवा, दान, संयम और समझ के साथ किए जाने वाले शारीरिक व मानसिक कर्म सत्त्वयुक्त हैं। राजस और तामसादपि बहिष्कृत हैं।`,
      english: `Sacrifice, austerity, service, charity, and self-control properly performed with reverence are of the nature of purity (Sattva). Those that proceed from passion (Rajas) or ignorance (Tamas) are impure.`
    },
    {
      id: "17.14",
      sanskrit: `यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्।
कामराजस्तु तत्राज्ञो न त्याज्यस्तमसापहम्॥१७-१४॥`,
      hindi: `सल्लेखित और योग्य पुरुषों के लिए यज्ञ, दान और तप पवित्र कर्म हैं। ऐसे कर्म जो काम से प्रेरित और अज्ञान से उत्पन्न हों, त्यागनीय नहीं।`,
      english: `Sacrifice, charity and austerity that are accepted by the wise are purifying; but sacrifice born of desire and ignorance should be avoided.`
    },
    {
      id: "17.15",
      sanskrit: `दानं तपश्चैव दानं यातने च भोगश्च ये।
मत्तेन्द्रियाणि प्रमाथीनो नियम्य पुरुषोत्तमम्॥१७-१५॥`,
      hindi: `दान, तप और यज्ञ द्वारा दिए गए दान तथा भोग के द्वारा, ये दुराचारी इन्द्रिय उन्हें नियंत्रित करके पुरुषोत्तम को प्राप्त होते हैं।`,
      english: `Giving, austerity, and sacrifice performed as acts of charity with faith, controlling the senses and mind, please the Supreme Person.`
    },
    {
      id: "17.16",
      sanskrit: `अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।
दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥१७-१६॥`,
      hindi: `अहिंसा, सत्य, क्रोध का अभाव, त्याग, शांति, अन्य जीवों के प्रति दया, लोभ का अभाव, कोमलता, लज्जा और चंचलता का अभाव—`,
      english: `Non-violence, truthfulness, freedom from anger, renunciation, peace, compassion to all beings, absence of greed, gentleness, modesty and lack of fickleness;`
    },
    {
      id: "17.17",
      sanskrit: `सत्यमपि ज्ञेयं तपश्चाप्यायतनं सर्वश:।
यज्ञो दानंप्रतिगृह्य नात्र संशयः सम्भवति॥१७-१७॥`,
      hindi: `सत्य, तप और आसन इन सबका यज्ञ और दान ग्रहण में कोई संशय नहीं।`,
      english: `Truthfulness, austerity and simplicity are all means of worship; accepting sacrifice and charity is without doubt beneficial.`
    },
    {
      id: "17.18",
      sanskrit: `कायश्छलादपि कैश्चिदसक्ति: प्रजायत दुःखम्।
रागात्स्वरूपपरो हि काम: प्रजायत दुःखम्॥१७-१८॥`,
      hindi: `कुछ लोग शरीर के लिए छल करते हैं और दुख उत्पन्न करते हैं। इच्छायुक्त व्यक्ति अपनी आत्मा को भूलकर काम से दुख प्रकट करते हैं।`,
      english: `Some, attached to the body, deceive others and bring sorrow upon themselves. Desire, binding by its form, causes sorrow.`
    },
    {
      id: "17.19",
      sanskrit: `तस्मादेषां समत्वेन तपो दानं यज्ञ शम:।
तन्मत्स्तु प्रदद्यादात्मनैव प्रसादमुत्तमम्॥१७-१९॥`,
      hindi: `अतः उनके प्रति समानतापूर्वक तप, दान, यज्ञ और शम कर्मों को श्रेष्ठ आत्म-अनुग्रह के लिए देना चाहिए।`,
      english: `Therefore, with evenness of mind, one should give austerity, charity, sacrifice and restraint, thus pleasing the self.`
    },
    {
      id: "17.20",
      sanskrit: `यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्।
कामराजस्तु तत्राज्ञो न त्याज्यस्तमसापहम्॥१७-२०॥`,
      hindi: `सज्जनों के लिए यज्ञ, दान तथा तप पवित्र कर्म हैं। जो काम और राग से प्रेरित हों, वे तामस कर्म हैं, जिन्हें त्यागना चाहिए।`,
      english: `Sacrifice, charity, and austerity which are accepted by the wise, are purifying; sacrifice performed out of sexual desire or for show is to be shunned.`
    },
    {
      id: "17.21",
      sanskrit: `सुश्रूषु: सततं यज्ञतो यजन्ते तान्प्रजाः संप्रमाद्य च।
ते तु यजन्ते अनिष्टान्यजस्रमहंकारात्समाश्रिताः॥१७-२१॥`,
      hindi: `जो लोग सतत रूप से यज्ञ में सेवा करते हैं, वे प्रजा को समर्पित करते हैं। परन्तु अहंकार से उत्पन्न भेद से अज्ञान में पडकर, वह उन्हें अनिष्ट कर्मों में लगाते हैं।`,
      english: `Those who perform sacrifices with faith, constantly render service and offer faculties to Lord Krishna; otherwise they act in an arrogant manner, producing evil consequences.`
    },
    {
      id: "17.22",
      sanskrit: `सर्वभूतस्थितं यो मां भजत्येकत्वमास्थित:।
सर्वभावानि भारत मयि तं तत्त्वसमाहितम्॥१७-२२॥`,
      hindi: `हे भारत! जो व्यक्ति एकत्व में स्थित होकर मुझें भजता है, वह सभी भावों को मुझमें समाहित पाता है।`,
      english: `O Bharat, one who worships Me, who dwells in all beings and is fixed in unity, is understood to be absorbed in the Absolute Truth.`
    },
    {
      id: "17.23",
      sanskrit: `यं भजन्ते श्रद्धयार्जितां त्यक्त्वा मामपराधमैः।
तत्प्रियतरं धन्यधन्यो ममात्मा ततमास्थित:॥१७-२३॥`,
      hindi: `जो मुझें श्रद्धायुक्त भक्ति से, पाप का त्याग कर पूजते हैं, वे मेरे प्रियतम हैं, धर्मयुक्त धन्य जन है और मेरे आत्मा में स्थित हैं।`,
      english: `Those who worship Me with faith born of love, casting off offenses, are dear to Me; they are protected and established in Me.`
    },
    {
      id: "17.24",
      sanskrit: `अहं विद्धि सर्वयोगानां भोजनं मोक्षमश्नुते।
प्रहृष्टात्मा मद्भक्ता यो मच्चित्तात्मा सततं नमति॥१७-२४॥`,
      hindi: `मैं जानता हूँ सभी योगों के पोषण को; जो मेरे भक्त प्रसन्न मन से मुझमें स्थित हैं और मुझको याद करते हैं, वे मोक्ष प्राप्त करते हैं।`,
      english: `I am the sustainer of all yogas and the giver of liberation to those who worship Me with joyful hearts and constant meditation.`
    },
    {
      id: "17.25",
      sanskrit: `स तु मां नित्ययुक्तात्मा योगी मन्‍तव्यपरायण:।
मयि चैव योगमास्थाय मामुपयाथि पाण्डव॥१७-२५॥`,
      hindi: `जो मुझमें निरंतर स्थित योगी है और जो मुझमें ध्यान लगाकर मेरा अनुसरण करता है, वह मुझ तक पहुँचता है, हे पाण्डव!`,
      english: `The yogi who constantly dwells in Me, with mind focused on Me and surrendered to Me, attains Me, O Pandava.`
    },
    {
      id: "17.26",
      sanskrit: `मां हि पार्थ योगिनोLIENT मानुस्तुष्टोऽनुकम्पते।
परित्राणाय साधूनां विनाशाय च दुष्कृताम्॥१७-२६॥`,
      hindi: `हे पार्थ! योगी मेरा तुष्टिप्राप्त करने वाला मनुष्य है, जो दयालु होता है, साधुओं का रक्षक है और दुष्टों का नाश करता है।`,
      english: `Hear, O Partha, that yogi who is pleased with Me, compassionate, protector of virtuous persons and destroyer of the wicked.`
    },
    {
      id: "17.27",
      sanskrit: `सत्त्वमसि पित्यं तप: स्वाध्यायस्तप आर्जवम्।
एतैर्धृत्या तपसा दानैश्च यजन्ति तां गतिम्॥१७-२७॥`,
      hindi: `सत्त्व गुण, तप (आत्मिक तपस्या), स्वाध्याय और सरलता से युक्त होकर, वे लोग तप, दान और यज्ञ से उस दिशा (मोक्ष) को प्राप्त करते हैं।`,
      english: `By purity, austerity, study of the scriptures and straightforwardness, these persons offer austerity, charity, and sacrifice to attain that goal.`
    },
    {
      id: "17.28",
      sanskrit: `एतानुद्दिश्य पुनः पृथग्बुभुयात्ससम्मिताः।
नात्समानय न च मेऽस्ति तस्माद्भ्रष्टोऽसि मे मतः॥१७-२८॥`,
      hindi: `यद्यपि इन तीनों का अनुवर्तन न करके व्यक्ति पृथक पुनः हो, वे मेरे मत के अनुसार ही हैं; इस कारण तुम मुझसे उलट मत मत रखो।`,
      english: `Wherever these three forms of faith are observed with sincerity, those are considered according to My teaching; therefore, do not deviate from this doctrine.`
    }
  ]
},
{
  chapter: 18,
  title: "मोक्षसंन्यास योग",
  english_title: "The Yoga of Liberation by Renunciation",
  verses: [
    {
      id: "18.1",
      sanskrit: `अर्जुन उवाच |
संन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्।
त्यागस्य च हृषीकेश पृथक्केशिनिषूदन॥१८-१॥`,
      hindi: `अर्जुन ने कहा: हे महाबाहो! मैं संन्यास के तत्त्व को और त्याग के तत्त्व को पृथक्-पृथक् जानना चाहता हूँ, हे हृषीकेश, हे केशिनिषूदन।`,
      english: `Arjuna said: O mighty-armed Krishna! I wish to understand the true nature of renunciation and of abandonment, and how they differ, O Hrishikesha, O killer of the Keshi demon.`
    },
    {
      id: "18.2",
      sanskrit: `श्रीभगवानुवाच |
काम्यानां कर्मणां न्यासं संन्यासं कवयो विदु:।
सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणा:॥१८-२॥`,
      hindi: `भगवान् बोले: ज्ञानी जानता है कि कामनापूर्ण कर्मों का त्याग संन्यास है और सर्व कर्मों के फल का त्याग त्याग है, हे विचक्षण।`,
      english: `The Blessed Lord said: The sages understand renunciation as the giving up of works with desires, and abandonment as giving up the fruits of all actions, O wise one.`
    },
    {
      id: "18.3",
      sanskrit: `त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिण:।
यज्ञदानतप:कर्म न त्याज्यमिति चापरे॥१८-३॥`,
      hindi: `कुछ ज्ञानी कहते हैं कि दोषयुक्त कर्म त्यागने योग्य हैं, जबकि यज्ञ, दान और तप ऐसे कर्म हैं जो त्यागने योग्य नहीं हैं।`,
      english: `Some say that all work which involves faults is to be abandoned; while others say that sacrifice, charity, and austerity should never be relinquished.`
    },
    {
      id: "18.4",
      sanskrit: `ज्ञेयं यत्तत्सर्वगतं तत्तेति न्यायसंशित:।
तान्यपि तत्त्वत: ज्ञात्वा मन्मयान्यतरो न छति॥१८-४॥`,
      hindi: `तत्वतः जो सब में व्याप्त है, वही ज्ञेय है; यह न्यायसंगत है। उस तत्त्व को जानकर मन से भिन्न दूसरा कोई उसे आघात नहीं पहुँचाता।`,
      english: `That which pervades all is to be understood as reality; knowing that truth, one who is absorbed in Me never suffers harm from others.`
    },
    {
      id: "18.5",
      sanskrit: `अधिष्ठाय मन प्राणायां कामं विद्धि तत्त्वतः।
मयि सर्वाणि कर्माणि सन्न्यस्याध्यात्मचेतसा॥१८-५॥`,
      hindi: `मन और प्राण को अधिष्ठित कर मनोयोग से मुझमें सर्व कर्मों को त्याग कर आत्म चेतना के साथ कर्म करो।`,
      english: `Know that all actions are rooted in the mind and life force. Having fixed the mind in Me, renounce all actions with an understanding centered on the Self.`
    },
    {
      id: "18.6",
      sanskrit: `यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।
कर्मेन्द्रियै: कर्मयोगमसक्ता: स च मे प्रिय:॥१८-६॥`,
      hindi: `हे अर्जुन! जो मन से इन्द्रियों को संयमित करता है और इन्द्रिय कर्म में आसक्ति नहीं रखता, वह मुझसे प्रिय है।`,
      english: `O Arjuna, he who controls his senses with his mind, and acts without attachment in the work of the senses, is dear to Me.`
    },
    {
      id: "18.7",
      sanskrit: `यावानर्थ उदपाने सर्व तरंगे पुरे मत:।
एवानर्थ निवारणे सर्व तरंगे स्थितिमाः॥१८-७॥`,
      hindi: `जैसे पूरे सागर में लहरें उत्पन्न होती और समाप्त होती हैं, वैसे ही सभी कष्टों के निवारण का अटूट उपाय है।`,
      english: `As the waves rise and subside in the ocean, so too must all difficulties arise and cease. This is the true position of the wise.`
    },
    {
      id: "18.8",
      sanskrit: `अर्जुन उवाच |
किं कर्म किमकर्मेति कवयोऽपि त्रिविधं मतम्।
तत्ते त्वमव्ययम् इति त द्रष्टव्यं स्थानं च हि तत्॥१८-८॥`,
      hindi: `अर्जुन बोले: कवि भी यहाँ भ्रमित हैं कि क्या कर्म है और क्या अकर्म है। हे कृष्ण! परन्तु वह अविनाशी है, यही देखना चाहिए।`,
      english: `Arjuna said: Even the wise are confused about what is action and what is inaction. But You say it is imperishable, this must be understood along with its field.`
    },
    {
      id: "18.9",
      sanskrit: `कर्मणो ह्यप्यधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥१८-९॥`,
      hindi: `हे अर्जुन! तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्मफल के कारण मत बनो, और न ही अकर्म में आसक्ति रखो।`,
      english: `Your right is to work only, but never to the fruit of work. Do not be motivated by the fruits of work, nor attach yourself to inaction.`
    },
    {
      id: "18.10",
      sanskrit: `ये शास्त्रविधिमुत्सृज्य सूक्तिं न यान्ति तेऽवाप्तव्याः।
श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात्॥१८-१०॥`,
      hindi: `जो लोग शास्त्रों के विधान का परित्याग करते हैं, वे लक्ष्य प्राप्त नहीं कर पाते। अपने धर्म का पालन करना श्रेष्ठ है, दूसरों के धर्म के पालन से।`,
      english: `Those who reject scriptural injunctions do not attain success. It is better to die in one's own duty than to follow the duty of another, which is fraught with peril.`
    },
    {
      id: "18.11",
      sanskrit: `यद्धि का: प्रवृत्तिर्भूतानां नैष्कर्म्यं च भारते।
जातिस्वधर्मस्वे च जैसा कर्म तद्भवति तदा॥१८-११॥`,
      hindi: `हे भारत! जीवों की प्रवृत्ति से कर्म उत्पन्न होता है; जाति, स्वधर्म और कर्म के अनुसार कर्म सिद्ध होता है।`,
      english: `O Bharata, the inclination of beings to act, as well as the debt of actions in the respective castes and duties, determines deeds arising accordingly.`
    },
    {
      id: "18.12",
      sanskrit: `क्षणमेवेषा तृणसर्परात्रेभ्यो यन्मृत्वेन्द्रियाणाम्।
Visodhaṁ वक्तुṁ शक्नोति मे दैवं षु बचति न नो॥१८-१२॥`,
      hindi: `यह मनुष्य क्षण मात्र है जिसके द्वारा वह इन्द्रियों के माध्यम से वृत्तियों को शिथिल करता है; मैं इसकी शक्ति नहीं कह सकता, जो मुझे और तुम्हें डराता है।`,
      english: `Man is but a moment, and senses are fleeting like autumn leaves; I cannot say the insubstantial power that attracts me and you.`
    },
    {
      id: "18.13",
      sanskrit: `शरीरं पुण्यं पापं च दायकानि भारत।
पुरःशास्त्रं समाचर योगी सुखं न वश्यति॥१८-१३॥`,
      hindi: `हे भारत! शरीर पुण्य और पाप दोनों कर्मों का दाता है। परन्तु जो योगी शास्त्र का ठीक पालन करता है, वह सुखी होता है।`,
      english: `O Bharata, the body yields both sinful and virtuous results; yet, the yogi abiding by scripture remains happy.`
    },
    {
      id: "18.14",
      sanskrit: `कर्मणो ह्यप्यधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥१८-१४॥`,
      hindi: `हे अर्जुन! तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्मफल के कारण मत बनो, और न ही अकर्म में आसक्ति रखो।`,
      english: `Your right is to work only, but never to the fruit of work. Do not be motivated by the fruits of work, nor attach yourself to inaction.`
    },
    {
      id: "18.15",
      sanskrit: `सक्तात्मा विगतस्पृह: सर्वभूतानुकर:@"।
मन्यते हि येन स युक्तः सम्पुष्यन्मोक्ष्यति॥१८-१५॥`,
      hindi: `जो व्यक्ति कामना रहित होकर, सब जीवों का अनुकरण करता है, वह मुक्त होता है; ऐसे योगी मोक्ष पाता है।`,
      english: `One who is detached and desires nothing, being engaged in Me as the supreme self of all beings, attains liberation.`
    },
    {
      id: "18.16",
      sanskrit: `आयान्मोभवत साङ्केतिक: संयम एव योगः।
यः प्राप्नोति तां गतिं प्राह पूर्वात् प्रवृद्धान्विधी:॥१८-१६॥`,
      hindi: `जो संयमपूर्वक योग को प्राप्त करता है, वह प्राप्य सम्मुख की गति को प्राप्त होता है, पूर्व के विधान द्वारा।`,
      english: `Whoever attains self-control through yoga reaches the state attained by the ancients who are known for their spiritual discipline.`
    },
    {
      id: "18.17",
      sanskrit: `त्याज्यं दोषवद्दोशं योगी दिल्रिणितसंशय:।
मुक्तोऽर्जुन ततस्त्वां प्राह योगयुक्त: मतिनिश्चित:॥१८-१७॥`,
      hindi: `हे अर्जुन! योगी को दोष या दोषात्मक कर्म त्याग देना चाहिए, न संशय करना चाहिए। योगयुक्त मन के साथ वह तुझसे यह कहता है।`,
      english: `O Arjuna, a yogi should forsake all sinful deeds and doubts; with a mind united in yoga, he says thus to you.`
    },
    {
      id: "18.18",
      sanskrit: `शीलं बलं दर्पं कामं क्रोधं च पर मोह:।
ममात्मानमपेक्षन्तं प्रवर्तन्ते मनुष्यरे॥१८-१८॥`,
      hindi: `शील, बल, गर्व, काम, क्रोध और मोह जैसी प्रवृत्तियाँ मनुष्यों को अपने ही स्वात्मा से दूर करती हैं।`,
      english: `Conduct, strength, arrogance, desires, anger and delusion—all these act in man by detaching his own self.`
    },
    {
      id: "18.19",
      sanskrit: `इन्द्रियाणि मनो बुद्धिश्च पञ्चे प्रवृत्तयः पृथक्।
एतान्युभयमन्तस्त्वेकं पश्यन्नात्मनिर्भर:॥१८-१९॥`,
      hindi: `इन्द्रियाँ, मन और बुद्धि—ये पाँच अलग-अलग प्रवृत्तियाँ हैं; पर एकात्म मनुष्य जो इन्हें अपने प्रभुत्व में समेटता है, वह आत्मानुमुख होता है।`,
      english: `The senses, mind and intellect are five different faculties; but he who controls these from within is self-centered and a true yogi.`
    },
    {
      id: "18.20",
      sanskrit: `इन्द्रियाणि हि पण्डितानां हि सत्वमप्रमेयम्।
बुद्धिरिन्द्रियाणि चैव सत्त्वं लोकेऽपि तद्विद:॥१८-२०॥`,
      hindi: `इन्द्रियाँ पण्डितों की सत्त्वमयी शक्ति हैं; बुद्धि भी इन्द्रियों की शक्ति है, जो सत्त्व की विशेषता होती है।`,
      english: `The senses are the immeasurable power of the wise; intellect too is a power of the senses, and is known as Sattva even in the world.`
    },
    {
      id: "18.21",
      sanskrit: `यत्सत्त्वानुरूपं क्रीयते जुहोति सहश्रुदा।
राजसमित्यभिधीयते प्रकाशकोऽमृतात्मन:॥१८-२१॥`,
      hindi: `जो कर्म सत्त्व के अनुसार करके यज्ञजनों को दिया जाता है, उसे राजस कहा जाता है, जो अमृतात्मा के लिए प्रकाशक है।`,
      english: `That action which is performed according to Sattva for the benefit of the sacrificers is called Rajasic; it is illuminating to the immortal self.`
    },
    {
      id: "18.22",
      sanskrit: `असत्त्वसमवायास्तेनिःसर्गैर्विपरीतत:।
हन्यन्ते च तद्बावा प्राचीना वसुधैके कर्ता॥१८-२२॥`,
      hindi: `जो कर्म असत्त्व से उत्पन्न होते हैं, वे भिन्न प्रकार से उत्पन्न होकर प्राचीन तरह वैश्विक विनाश लाते हैं।`,
      english: `Actions born of ignorance (Tamas) bring decline and destruction of the earth; they have various unconscious results.`
    },
    {
      id: "18.23",
      sanskrit: `तन्मे व्यासदेशस्तेषां ज्ञापय सर्वकारणम्।
संन्यासस्य तपश्चैव सन्मात्रसप्तमः स्यद्वयम्॥१८-२३॥`,
      hindi: `हे व्यास! संन्यास और तप के विषय में इनके समस्त कारण मुझे स्पष्ट करो ताकि मैं इसका सातवाँ स्वरूप जान सकूं।`,
      english: `O Vyasa, please explain to me the causes of renunciation and austerity so that I may understand the seventh type deeply.`
    },
    {
      id: "18.24",
      sanskrit: `श्रीभगवानुवाच |
सम्मूढः समद् बुद्धिर्दुरात्मा सुदु:खस्पर्शन:।
अनार्यजुष्ट: संकेतैर्वृत्तिं विचरेद्योगतः॥१८-२४॥`,
      hindi: `भगवान् बोले: जो मूढ़ है, निष्प्रभावी है, दुर्भावनावाला और दुःख भोगने वाला तथा अनुचित आध्यात्मिक संकेतों से भटकने वाला है, वह योग का मार्ग नहीं जानता।`,
      english: `The Blessed Lord said: The one with deluded, impartial intellect who suffers pain, not following the orthodox path, is far from yoga.`
    },
    {
      id: "18.25",
      sanskrit: `प्रजानां चेति तु धर्मादाकस्मिंस्तस्याध्वर:।
धर्म: कर्मसु विविक्तात्मा संयतेंद्रिय: सुरेन्द्रिय:॥१८-२५॥`,
      hindi: `जो अपने धर्म से निवृत्त होकर जातीय और दैवीय धर्म में भेद करता है, उसकी बुद्धि विमुख होती है।`,
      english: `The one independent of the crowd, righteous in action, self-controlled and mindful of his senses is truly wise.`
    },
    {
      id: "18.26",
      sanskrit: `यत्तु दुर्मेधा मदयतो ज्ञानं ततोऽविद्यामुत्तमाम्।
व्यापारमेतं जातस्य निन्दन्ति चात्मसंस्थितम्॥१८-२६॥`,
      hindi: `जो वैमनस्य और मद से उत्पन्न अधम बुद्धि के कारण अज्ञान को उत्तम मानकर ववियर का दुष्प्रयोग करता है, वह आलोचना का पात्र होता है।`,
      english: `The one with poor understanding, drunk with pride, esteems ignorance as supreme, misapplying his skills, and deserving of censure.`
    },
    {
      id: "18.27",
      sanskrit: `तेषामश्यात्मा विनश्यत्यात्मन्येवात्मना तथा।
तस्मात्क्षयं यति कालेन ततो दृष्टिं विना याति॥१८-२७॥`,
      hindi: `ऐसे लोगों की आत्मा धीरे-धीरे आत्मा से भी घात करती है और काल के साथ नष्ट हो जाती है; इसलिए वे दृष्टि से अभावित रहते हैं।`,
      english: `For these the soul perishes along with the physical body over time, and thus, their vision is destroyed.`
    },
    {
      id: "18.28",
      sanskrit: `तस्यैतस्य प्रकृतिं विदध्याद्बुद्धिं तु मामनस्कृताम्।
नास्ति बुद्धेर्भद्रमे योगिनामनन्तरं मतम्॥१८-२८॥`,
      hindi: `ऐसे जीवों की बुद्धि उनके स्वभाव के अनुसार होती है और अज्ञान में उलझी होती है; मैं यह मानता हूँ कि योगियों की बुद्धि श्रेष्ठ होती है।`,
      english: `Their intellect is subject to their nature and delusion; the best of intellect is that of the yogi, in my view.`
    },
    {
      id: "18.29",
      sanskrit: `यस्तु वस्तुनीचेन भावेन संमतिं न वेत्ति तस्य।
प्रकृतेर्यत्तत्सत्त्वमित्यादि ज्ञानमिहाभवत्॥१८-२९॥`,
      hindi: `जो व्यक्ति निम्न भाव से प्रकट वस्तु का ज्ञान नहीं जानता, उस प्राणी की प्रकृति में सत्त्व आदिक ज्ञान विद्यमान होता है।`,
      english: `One who does not comprehend the true nature of things, his inherent nature remains dominated by ignorance, despite the presence of Sattva and the rest.`
    },
    {
      id: "18.30",
      sanskrit: `अदर्शनादपि तद्वत्त्वं तत्त्वतश्चापरं भवेत्।
सत्त्वं तु प्रकीर्णमित्याह दुष्टसत्त्वमुत्तमम्॥१८-३०॥`,
      hindi: `ज्ञानी होने के बावजूद भी यदि वह वस्तु का तत्त्व न देख पाए, तो वह प्रकृति दोषयुक्त मनुष्य है, उसका सत्त्व दोषयुक्त होगा।`,
      english: `Even without perceiving the truth, due to poor discernment, strength of character disperses, resulting in depraved nature.`
    },
    {
      id: "18.31",
      sanskrit: `प्रकृत्युच्यते गुणत्रयं प्रकृतिमित्यार्पिता।
सत्त्वं रजस्तम इति तान्कर्मणस्त्रयमाचार्याः॥१८-३१॥`,
      hindi: `गुणों के तीनों रूपों को प्रकृति कहा जाता है जो सत्त्व, रज और तम के रूप में होते हैं; ये तीनों कर्मों के नियामक हैं।`,
      english: `The three modes of material nature are called Prakriti and are the cause of all actions: Sattva, Rajas, and Tamas.`
    },
    {
      id: "18.32",
      sanskrit: `गुणै: कर्माणि सर्वाणि संन्यासस्तस्य महर्षय:।
एतान्यपि तु प्रकृतिं विद्यान्न विद्युर्यदात्मनि॥१८-३२॥`,
      hindi: `सभी कर्म गुणों के किनारे होते हैं; संन्यास उन कर्मों का त्याग करना है; यह वे महर्षि जानते हैं; योगी में यह ज्ञान होता है।`,
      english: `O great sages, all actions are performed as per the modes of nature. Renunciation means giving up those actions, which the wise know.`
    },
    {
      id: "18.33",
      sanskrit: `सम: सङ्गवर्जितः कर्म कौन्तेय स वन्यते।
ततः सिद्धिं प्रतिष्ठां च योगो न विचक्षणतः॥१८-३३॥`,
      hindi: `हे कौन्तेय! जो संन्यासी हुआ है, सत्त्व से युक्त और आसक्ति रहित कर्म करता है, वह सिद्धि और प्रतिष्ठा के योग को समझता है।`,
      english: `O Arjuna, he who performs actions free from attachment and balanced in disposition attains perfection and steadiness in yoga.`
    },
    {
      id: "18.34",
      sanskrit: `असक्तिरनसूयिता विजयते तु तिष्ठति सिथिल:।
यन्त्रितात्मा विनश्यत्यात्मा शिथिलः प्रकृतिं गच्छति॥१८-३४॥`,
      hindi: `जो असक्त है, अरागी है, विजय प्राप्त करता है और स्थिर रहता है। जो इंद्रिय-वशिष्ठ होता है, परमात्मा को प्राप्त होता है, जो विवेकशील हो।`,
      english: `One who is unattached, free from envy, victorious, and maintains steadiness, controlled in mind, attains the supreme, while the unrestrained fall to nature.`
    },
    {
      id: "18.35",
      sanskrit: `यज्ञदानतप:कर्म न त्याज्यमिति चापरे।
ज्ञेयं ज्ञानेन तत्त्वेन संन्यास: किमिति तद्विद:॥१८-३५॥`,
      hindi: `कुछ कहते हैं कि यज्ञ, दान और तपत्याग नहीं होने चाहिए; जो यह सत्य समझता है, वह जानता है कि संन्यास क्या होता है।`,
      english: `Some say that sacrifice, charity, and austerity are not to be given up; but the wise know that renunciation consists in giving up these.`
    },
    {
      id: "18.36",
      sanskrit: `कामकारसंन्यासात्कामिनस्तु भरतर्षभ।
त्यक्त्वा कालेनात्मानं संयम्येन्द्रियशोधनम्॥१८-३६॥`,
      hindi: `यही कारण है कि कामयुक्त पुरुषों को कामों का त्याग कर संयम, इन्द्रियों की शुद्धि करना आवश्यक है, हे भरतश्रेष्ठ।`,
      english: `Hence, O best of Bharatas, men devoted to sense gratification should abandon desires in due time and practice self-restraint through sense control.`
    },
    {
      id: "18.37",
      sanskrit: `त्रिविधं नरकस्येदं द्वारं नाशनमात्मन:।
काम: क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥१८-३७॥`,
      hindi: `हे पुरुष! नरक के तीन द्वार हैं जो आत्मा के नाश के कारण हैं—काम, क्रोध और लोभ; इसलिए इन्हें त्याजना चाहिए।`,
      english: `O man, there are three gates to hell that lead to the soul’s destruction — lust, anger, and greed; so, shun these three.`
    },
    {
      id: "18.38",
      sanskrit: `यत्तेन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।
कर्मेन्द्रियै: कर्मयोगमसक्ता: स च मे प्रिय:॥१८-३८॥`,
      hindi: `जो मन से इन्द्रियों को संयमित करता है और इन्द्रिय कर्म में आसक्ति नहीं रखता, वह मुझसे प्रिय है, हे अर्जुन।`,
      english: `O Arjuna, he who controls his senses with his mind, acts without attachment in the work of the senses, is dear to Me.`
    },
    {
      id: "18.39",
      sanskrit: `काम्यकामकाम्यartha: प्रवृत्तिं च निवृत्तिम्।
ज्ञानं च यत्तत्प्राप्तम् पश्यन्नेवं योगिन: शुभा:॥१८-३९॥`,
      hindi: `यही वे योगी हैं जो काम और अकाम के कारण कर्म करते हैं तथा ज्ञानस्वरूप योग प्राप्त करते हैं।`,
      english: `These blessed yogis act in accordance with knowledge in both desire and no desire, and with action and inaction.`
    },
    {
      id: "18.40",
      sanskrit: `सर्वकर्माणि संन्यस्य योगयुक्तात्मा वशे।
निराशीर्निर्ममो भूत्वा युध्यते च नभोयुधि॥१८-४०॥`,
      hindi: `संन्यास धारण किए हुए, योगयुक्त, मनवश में सभी कर्मों को करते हुए, निराशा और न ममता से मुक्त होकर, वह नभ-युद्ध में लड़ता है।`,
      english: `He whose intellect is surrendered and mind controlled, having abandoned desire and attachment, fights the battle without fear or agitation.`
    },
    {
      id: "18.41",
      sanskrit: `जातु विषयान्न विचेष्टे न काङ्क्षते न अश्नुते।
क्षितिम्प्राप्तो यं वेत्ति तं पुरुषं प्राहुरविद:॥१८-४१॥`,
      hindi: `जो विषयों में कभी विचलित नहीं होता, न चाहता है, न प्राप्त करता है, और जो स्थिर रहता है, उसे ज्ञानी पुरुष कहा जाता है।`,
      english: `He who is not thrown off balance by the objects of the senses, who neither desires nor seeks, and who remains steady is called a wise man.`
    },
    {
      id: "18.42",
      sanskrit: `प्रकृतिं पुरुषं चैव विद्धि गुणाश्च गुणै: सह।
एवमेवेत्युभयोर्मेयो: ज्ञानेन तु परं मतम्॥१८-४२॥`,
      hindi: `गुणों के साथ और गुणों के बिना प्रकृति और पुरुष दोनों को जानो; ज्ञान में यह विशिष्ट मत कहा गया है।`,
      english: `Know nature and spirit, both with and without qualities; such knowledge is the highest opinion for both.`
    },
    {
      id: "18.43",
      sanskrit: `सत्वं रुजसि तम इति गुणाः प्रकृतिसम्भवाः।
नित्यानिन्द्रियकर्माणि वहन्ति विश्वदैव चारिणः॥१८-४३॥`,
      hindi: `सत्त्व, रजस और तमस गुण प्रकृति से उत्पन्न होते हैं; वे नित्य इन्द्रिय कर्मों के साथ सारे विश्व में व्याप्त हैं।`,
      english: `Sattva, Rajas and Tamas are the modes born of nature; these universal qualities govern the senses eternally.`
    },
    {
      id: "18.44",
      sanskrit: `सत्त्वं सुखमात्मकं बलं स्वास्थ्यं तापसं शम:।
सन्तोषः सततं योगी यतधा धीरो न शोचति॥१८-४४॥`,
      hindi: `सत्त्व में सुख, आत्मबल, स्वास्थ्य, तप का विराम, शान्ति, संतोष होते हैं। ऐसा योगी आश्रित बुद्धि के साथ स्थिर होकर व्यर्थ न रोता है।`,
      english: `Sattva is happiness, strength of the self, health, restraint, peace and contentment; he of steady wisdom grieves not.`
    },
    {
      id: "18.45",
      sanskrit: `रजसः कामात्मकः क्रोधप्रवृत्तिरुत्तमां गतिम्।
कलुषां कारणं बुद्धिनाशं छायामात्मसंस्पर्शिनाम्॥१८-४५॥`,
      hindi: `रजस कामप्रधान है; यह क्रोध की ओर ले जाता है; यह बुद्धि का विनाश करने वाला है; यह कलुषों का कारण है।`,
      english: `Rajas is passionate and causes desire and anger, it leads to the destruction of wisdom and is the shadow of contact with the body.`
    },
    {
      id: "18.46",
      sanskrit: `तमसि मे मनसा न्यायो बुद्धिस्तपश्चर्या च।
मूढभावोद्भवं विद्धि न चैतत्स्थिरं मनोदम्॥१८-४६॥`,
      hindi: `तमस में मन उदासीन और जड़ हो जाता है; उसकी बुद्धि, तपस्या और अभ्यास मृत्युका कारण बनता है।`,
      english: `In Tamas, the mind is sluggish and confused; his intellect, austerity and practice are born of delusion.`
    },
    {
      id: "18.47",
      sanskrit: `गुणकर्मविभागास्तस्य साधनं तपसः फलम्।
श्रुतिपुराणेषु वीर्यं वैराग्यं चैव तत: परम्॥१८-४७॥`,
      hindi: `साधन, तपस्या, गुणों और कर्मों के भेद के फल होते हैं। शास्त्रों और पुराणों में व्यवहार, तपस्या, और वैराग्य सर्वोच्च हैं।`,
      english: `The distinction of modes and actions is the basis of spiritual discipline and the fruits of austerity; study of scriptures, energy, and renunciation are considered supreme.`
    },
    {
      id: "18.48",
      sanskrit: `श्रेयान्स्वधर्मो विगुण: परधर्मात्स्वनुष्ठितात्।
स्वधर्मे निधनं श्रेय: परधर्मो भयावह:॥१८-४८॥`,
      hindi: `अपने धर्म में दोष रहित होना परधर्म के अनुसरण से श्रेष्ठ है, क्योंकि परधर्म का परिणाम भयकारी होता है।`,
      english: `It is better to do one’s own duty imperfectly than to perform another’s duty perfectly; it is better to die in one’s own duty than to follow the duty of another, which is fraught with fear.`
    },
    {
      id: "18.49",
      sanskrit: `को न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति।
शुभाशुभपरित्यागी भक्तिमान्य: स मे प्रिय:॥१८-४९॥`,
      hindi: `जो न हर्षित होता है न द्वेष करता है, न शोक करता है और न इच्छा करता है, शुभ-अशुभ त्यागी और भक्तिमन है, वह मुझसे प्रिय है।`,
      english: `He who neither rejoices nor hates, neither grieves nor desires, is free from the pairs of opposites, is full of devotion, and is dear to Me.`
    },
    {
      id: "18.50",
      sanskrit: `अधिष्ठितो मन्वीषीणां द्विजानामष्टमः कवि:।
मुक्तसङ्गः सन्यासः कर्म योगो राजसं मत:॥१८-५०॥`,
      hindi: `ब्राह्मणों और कवी के समूह में जो मनन करता है और ममता रहित होकर संन्यास और योग करता है, वह राजस कहा जाता है।`,
      english: `Among the twice-born, the sage who is established in wisdom, free from attachment, practicing renunciation, such a yogi is called Rajasic.`
    },
    {
      id: "18.51",
      sanskrit: `तमसि सम्भूतं राजसं तु कामक्रोधपरायणम्।
मोहाद्भावं च जातमव्यवस्थितं चित्त एव च॥१८-५१॥`,
      hindi: `तामस में उत्पन्न राजस कर्म इच्छा और क्रोध से प्रेरित होता है, इससे उत्पन्न माया और चित्त- स्थिरता में कमी होती है।`,
      english: `Born of Tamas, rajasic action is born of desire and anger; it is delusion born, and the mind is unsettled.`
    },
    {
      id: "18.52",
      sanskrit: `यत्तु तमससम्भूतं विद्धि मद्भावमुत्तमम्।
सर्वकामकल्लोलनं वितरागभयंकरम्॥१८-५२॥`,
      hindi: `जो तामस से उत्पन्न होता है, जो मेरे प्रति श्रेष्ठ भावना रखता है, अत्यंत वीतराग और भयमुक्त होता है, वह उत्तम है।`,
      english: `That which is born of Tamas, yet possesses pure devotion to Me, is free from attachment, fearsome to all desires.`
    },
    {
      id: "18.53",
      sanskrit: `एकोऽहं सर्वभूतेषु नात्र कोणोऽस्ति मम।
स वाऽहं य: स मामेव वैष्णवं तत: परम्॥१८-५३॥`,
      hindi: `मैं सभी जीवों में अकेला हूँ, मेरा कोई दूसरा रूप नहीं; जो मुझमें स्थित होता है, वह वैष्णव है और परम है।`,
      english: `I am the only one in all beings; there is no other like Me. Who remains absorbed in Me is indeed the supreme saint.`
    },
    {
      id: "18.54",
      sanskrit: `श्रीभगवानुवाच |
सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाश्च।
मोहात् संश्रितास्तेऽस्य पार्थ न मुनिर्न विचलति॥१८-५४॥`,
      hindi: `श्रीभगवान् बोले: प्रकृति से उत्पन्न सत्त्व, रजस् और तम इन तीनों गुणों में स्थित लोग मोहगत होकर विचलित नहीं होते।`,
      english: `The Blessed Lord said: O Partha, the modes of nature — Sattva, Rajas and Tamas — bind all beings; but the sage situated beyond these modes is never perturbed.`
    },
    {
      id: "18.55",
      sanskrit: `समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रिय:।
ये भजन्ति तु मां भक्त्या मयि ते तेषु चापि मे॥१८-५५॥`,
      hindi: `मैं सभी प्राणियों में सम हूँ; मुझे न कोई द्वेष है न प्रिय। जो मुझसे भक्तिभाव से जुड़ता है, मैं उनके में हूँ।`,
      english: `I am equal to all creatures; to none do I show enmity nor favor. But those who worship Me with devotion, are dear to Me.`
    },
    {
      id: "18.56",
      sanskrit: `ये तत्त्वं परमं जानन्ति ममानित्यमच्युतम्।
छन्दांसि च सर्वाण्येवं वेद विद्यानेव च ये॥१८-५६॥`,
      hindi: `जो लोग मुझ परम तत्त्व को जानते हैं, जिसे संसार में नश्वर कोई भी नहीं कहता; और जो छन्द और वेद के ज्ञान से सभी विषय जानते हो।`,
      english: `Those who know Me as the supreme imperishable and immutable truth, as well as the chants and Vedic knowledge, know all.`
    },
    {
      id: "18.57",
      sanskrit: `मां तत्त्वतो ज्ञात्वा तु विशते तदन्नसारथ:।
पन्येति स नित्यं तिष्ठेत्तत्त्वज्ञस्तु तमोऽधिगच्छति॥१८-५७॥`,
      hindi: `जो मुझे तत्त्वतः जानकर मुझमें प्रवेश करता है, वह नित्य तत्त्वमीमांसी होता है; पर जो अज्ञान के अधिपति यानी तमस में है, वह अन्य मार्ग से चलता है।`,
      english: `Knowing Me as the reality, one who enters Me unwavering, remains constant; but the ignorant fall into darkness.`
    },
    {
      id: "18.58",
      sanskrit: `एवं ज्ञानविज्ञानयुक्तो मोक्षपरं फलमाश्नुते।
अशुभाशुभफलैस्‍तुल्यभावेनाभ्यासतः सुखम्॥१८-५८॥`,
      hindi: `इस प्रकार ज्ञान और विज्ञान से युक्त योगपूर्ण पुरुष, मोक्ष को प्राप्त होता है, जो सुख का स्रोत है और अशुभ एवं शुभ दोनों फल के बराबर नहीं है।`,
      english: `Thus, the one who is united with knowledge and wisdom attains the supreme fruit of liberation, happiness free from the duality of auspicious and inauspicious results.`
    },
    {
      id: "18.59",
      sanskrit: `असङ्गो निरदोः कर्मा न कर्मफलतस्ततः।
तस्माद्धर्मञ्जय मामेव सर्वयज्ञेषु वच:॥१८-५९॥`,
      hindi: `जो पुरुष न केवल कर्मों से परे हैं, बल्कि कर्मों के फल से भी, वह निरासक्त और निष्काम होता है। इस कारण, हे धर्मभीरु! तुम मुझमें ही सभी यज्ञों में विश्वास करो।`,
      english: `Detached from fruits and actions, being free from attachment to work, therefore, O Arjuna, meditate on Me as the supreme object of all sacrifices.`
    },
    {
      id: "18.60",
      sanskrit: `यस्माद्योगात्समुद्धर्त्त: सर्वकार्यसंसर्पण:।
स योगयुक्तात्मा पश्येद् यस्मान्नोद्विजते बुध:॥१८-६०॥`,
      hindi: `योग से उत्कर्ष प्राप्त वह पुरुष, अपने समस्त कर्तव्य त्यागकर जो योग में स्थित रहता है, बुद्धिमान पर उस पर हावी नहीं होता।`,
      english: `One who, uplifted by yoga, surrenders all undertakings, and who sees the Self in all, is not disturbed by dualities, O wise one.`
    },
    {
      id: "18.61",
      sanskrit: `मय्यैवैता तु अलिप्तेन सितो रतस्ततो युद्धतः।
सर्वस्य धर्ता चित्वा धर्मोऽचलं च स्थितो धनंजय।।१८-६१।।`,
      hindi: `लेकिन जो मुझमें त्यागी, निर्मल, शीतल, और युद्ध के लिए तैयार है वह सभी का अधिपति है एवं धर्म में अचल है हे धनंजय!`,
      english: `But he who is united with Me without alienation, delighting in Me, and engaged in battle, that person is the supporter of all and firmly established in dharma, O Dhananjaya!`
    },
    {
      id: "18.62",
      sanskrit: `एवं ते ज्ञानमिति तत्सर्वं शृणु मनस्विना।
विद्याविनयसंयुक्तं यत सतुष्टमिदं तत्॥१८-६२॥`,
      hindi: `हे मनसुसंमीलित! यह समस्त ज्ञान है, और यह विद्या और शिष्टता सहित सबसे प्रिय है, इसे सुनो।`,
      english: `Hear all this knowledge, assembled with understanding and reverence, which is most pleasing.`
    },
    {
      id: "18.63",
      sanskrit: `एष तेऽमृतत्वाय योगः संन्यासस्त्यागश्च येषु।
तत् त्वमवाही पर्यश्ने यत्नेन कृपया पुन:॥१८-६३॥`,
      hindi: `यह योग तुम्हारे अमृतत्व के लिए है, संन्यास और त्याग जिनमें है; इसे ध्यान से सुनो, पुनः यत्नपूर्वक और कृपा पूर्वक सुनो।`,
      english: `This yoga, renunciation and abandonment, is for attaining immortality. Now listen carefully and with compassion.`
    },
    {
      id: "18.64",
      sanskrit: `एवं परमं गुह्यं गुह्यतरं मया दर्शितम्।  
एतत्सत्य्युपलब्धव्यमात्मनो यतोऽनवस्थित:॥१८-६४॥`,
      hindi: `इस प्रकार मैंने परम, अधिक गहरा रहस्य तुम्हें प्रदर्शित किया है, जिसे आत्मा की अनवस्थित अवस्था से प्राप्त किया जा सकता है।`,
      english: `Thus, I have revealed to you the supreme most secret of secrets, to be realized by the self whose delusion has been overcome.`
    },
    {
      id: "18.65",
      sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥१८-६५॥`,
      hindi: `सब धर्मों को त्याग कर मुझमें ही शरण दो; मैं तुम्हें सारे पापों से मोक्ष दूंगा, चिंता मत करो।`,
      english: `Abandon all varieties of dharma and just surrender unto Me alone. I will liberate you from all sinful reactions; do not fear.`
    },
    {
      id: "18.66",
      sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच:॥१८-६६॥`,
      hindi: `सब धर्मों को छोड़कर केवल मुझमें शरण लो; मैं तुम्हें सभी पापों से मुक्त कर दूंगा, चिंता मत करो।`,
      english: `Abandon all dharmas and just surrender to Me alone. I will liberate you from all sinful reactions. Do not fear.`
    },
    {
      id: "18.67",
      sanskrit: `एवं ततो पुरुषः पार्थ नाभिजानाति मामुत्तमम्।
उदासीनवदात्मानं तिष्ठन्नात्मवान्यथा॥१८-६७॥`,
      hindi: `हे पार्थ! इस प्रकार पुरुष मुझ परम को नहीं जानता। वह जैसे उदासीन होकर अपने आप में रहता है।`,
      english: `Thus the man does not truly know Me, O Partha; he abides in himself as if indifferent.`
    },
    {
      id: "18.68",
      sanskrit: `मय्येव मन आधत्स्यसि मत्परमे परमेश्वरि।
मद्भक्त: सङ्गवर्जित: धीर्विचार: समस्तथा॥१८-६८॥`,
      hindi: `मुझपर मन लगाकर, मुझ परमेश्वर को, भक्तिभाव से, आसक्ति रहित होकर, बुद्धि स्थिर और सम विषयों में निर्धारित हो कर भक्ति करो।`,
      english: `Fix your mind on Me, the supreme God, O humblest of men, free from attachment, steadfast in intelligence, and have firm determination.`
    },
    {
      id: "18.69",
      sanskrit: `यच्चास्योपपन्नं पापं जनानां पुण्यकृताम्।
तदहं विधिष्यामि न्याय्यं स्वतन्त्रतां वरम्॥१८-६९॥`,
      hindi: `जो मैंने पुण्यात्माओं के विरुद्ध कर्म किया है, उस पाप का मैं बिलकुल न्यायसंगत निवारण करूंगा, जिससे स्वतंत्रतापूर्वक वर श्रेष्ठ अवस्था प्राप्त हो।`,
      english: `Whatever sinful acts are committed by those who are pious, I will rectify those sins properly, thus giving them freedom from bondage.`
    },
    {
      id: "18.70",
      sanskrit: `त्वं च मे प्रत्यक्षं तत्त्वमसि व्यवस्थितः।
साधु संन्यासयोगयुक्ते त्वधिष्ठितस्त्वमात्मवै॥१८-७०॥`,
      hindi: `हे योगयुक्त और संन्यासयुक्त! तू मुझ वास्तविक तत्त्व का प्रत्यक्ष है। आत्मा में स्थित होकर तू साधु और योगी है।`,
      english: `You, being established directly in Me and devoted to yoga and renunciation, are rightly a noble soul.`
    },
    {
      id: "18.71",
      sanskrit: `तस्मै श्रीभगवते योगेश्वरव्याख्याय।
भगवतार्क देवताय समर्पयामि नत: परम्॥१८-७१॥`,
      hindi: `हे योगेश्वर! मैं इस परमात्मा को जो संन्यास तथा योगहितामृत का लेखक है, श्रद्धाभाव से समर्पित हूँ।`,
      english: `Therefore I offer my respectful obeisance to the supreme Lord, the author of yoga and renunciation.`
    },
    {
      id: "18.72",
      sanskrit: `अर्जुन उवाच |
धनंजय दृष्ट्वा तु तं प्रज्ञो भ्रममित्यासं गतिम्।
समाहितमात्मानं च निश्चलं मनो निर्मलं हृदि॥१८-७२॥`,
      hindi: `अरजुन ने कहा: हे धनंजय! मूरत रूप को देखकर, जो भ्रम-रहित, स्थिर और निर्मल मन वाला है, मैं अपनी आत्मा को समर्पित करता हूँ।`,
      english: `Arjuna said: O Dhananja, upon seeing You beyond delusion, with mind fixed and pure, I submit myself entirely to you.`
    },
    {
      id: "18.73",
      sanskrit: `स्वजनं विशदश्चेत मयि प्रोक्तानभिजानतः।
विना कर्तुं तु कुर्वन्ति कामान्मलेन शुद्धये॥१८-७३॥`,
      hindi: `जो मुझसे बोले बिना स्वजन के बारे में शुभ कुर्वन्ति, वे अशुद्धि के कारण व्यर्थ कर्म करते हैं।`,
      english: `Those who do not realize the instructions given by Me and act without due diligence commit impure acts.`
    },
    {
      id: "18.74",
      sanskrit: `मोहादुपजीवत्येष निष्ठुरः शास्त्रविनाशक:।
आघातः स ह्यगण्या अपि नैष्कर्म्ये समन्वित:॥१८-७४॥`,
      hindi: `जो मोह में शास्त्रों को नष्ट करता है, वह निष्ठुर और अज्ञानी होता है; वह निःकर्मा होने के कारण हानि करता है।`,
      english: `One who lives in delusion and destroys the scriptures is cruel, disregarded, and brings harm, though he practices inaction.`
    },
    {
      id: "18.75",
      sanskrit: `न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन।
नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि॥१८-७५॥`,
      hindi: `हे पार्थ! मुझसे आसक्ति या कर्म करने का कोई कर्तव्य नहीं है; मैं न प्राप्त और नाप्राप्त वस्तुओं से अलग हूँ और कर्म में सक्रिय हूँ।`,
      english: `O Partha, there is no duty for Me in the three worlds; I am unattached to gain and loss, and I remain engaged in action.`
    },
    {
      id: "18.76",
      sanskrit: `एवं ब्रूहीतिब्रह्मत्तमं ज्ञात्वा योगसंस्थितम्।
सर्वमात्मनि स्थित्तोऽसि नस्य मामाञ्शास्त्रवित्॥१८-७६॥`,
      hindi: `हे ब्राह्मण! तू परम ब्रह्म का ज्ञान प्राप्त कर जानकर योग में स्थित हो; अपने सब भेदों के तहत मुझमें स्थित हो; मैं तेरा शास्त्रज्ञ हूँ।`,
      english: `Therefore speak the supreme truth after knowing Me as the Brahman in yoga, established in the self, remaining ever within Me; I am your instructive guide.`
    },
    {
      id: "18.77",
      sanskrit: `तत्र तुष्यति मां दुर्गे योगी बालक्रि पण्डित:।
प्रेम्णा दृष्ट्वा मयाश्चा हृष्यामि पुनर्मुनिषु॥१८-७७॥`,
      hindi: `योगियों, बालकों और विद्वानों से मिलकर मैं प्रसन्न होता हूँ, क्योंकि वे मुझमें निरंतर ध्यान लगाते हैं और मुझसे प्रेम करते हैं।`,
      english: `He who stays satisfied in Me, the protector from obstacles; who regards Me as pure and listens to Me from sages, he attains happiness again and again.`
    }
  ]
}
];
