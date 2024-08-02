const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

function cekStatus(item) {
    //Chat Bot
    const openchatItems = ['halo', 'hai', 'sup', 'yello'];
    const otopicItems = ['kamu udah makan', 'udah makan belum', 'kamu udah makan?', 'udah makan belum?'];
    
    
    //Romantic Bot Chat
    const ropenchatItems = ['sayang', 'hai sayang', 'hai sayangku', 'halo sayang', 'halo sayangku'];
    const rnegchatItems = ['belum', 'belum nih', 'belum sayang', 'aku belum makan'];
    const rheatItems = ['udah', 'sudah', 'sudah makan', 'udah makan', 'udah dong', 'sudah dong'];
    const rnegtopicItems = ['kamu lagi apa', 'kamu sedang apa', 'apa yang sedang kamu lakukan', 'kamu', 'kamu?'];
    const rspecialnoItems = ['gak mau', 'negative', 'malas', 'gak boleh', 'nggak'];
    const rspecialyesItems = ['boleh', 'ayo', 'boleh kok', 'yap', 'yeah', 'hell yeah'];
    const ragreechatItems = ['boleh tuh', 'ayo aja', 'sip', 'okey', 'keliatannya enak'];
    const rnochatItems = ['maaf ya aku gak bisa', 'gak'];
    const rpowerchatItems = ['kasih aku semangat dong', 'aku butuh semangat dari kamu nih', 'aku lagi gak semangat nih', 'aku gak semangat'];
    const activeItems = ['iya', 'yap']
    const action1Items = ['gak lagi ngapa ngapain', 'lagi diem', 'lagi istirahat', 'lagi santai'];
    
    
    //Command Bot
    const kissItems = ['!cium', '!kiss'];
    const damagechatItems = ['!gombal'];
    const hurtItems = ['!jatuh'];
    const hugItems = ['!peluk', '!hug'];
    const morningItems = ['!pagi', '!selamat pagi', '!pagi sayang', 'pagi'];
    const nightItems = ['!malem', '!good night', '!malam', 'selamat malam', 'malem', 'selamat malem', 'good night']
    
    
    //AI Maker
    const fatherItems = ['siapa ayahmu', 'siapa nama ayahmu']
    const motherItems = ['siapa ibumu', 'siapa nama ibumu']
    const machaItems = ['siapa yang membuatmu', 'siapa creator mu']
    
    //Bot Version
    const versionItems = ['!version']
    
    
    //Bot Responses
    const openchatResponses = [
        'Airy  (~Bot): "Apa yang bisa aku bantu?"',
        'Airy  (~Bot): "Halo! Ada yang bisa aku bantu?"',
        'Airy  (~Bot): "Hai, bagaimana kabarmu?"',
        'Airy  (~Bot): "Halo!, Namaku Airy. Apa yang bisa aku bantu?"',
        'Airy  (~Bot): "Halooo!"'
    ];

    const otopicResponses = [
        'Airy  (~Bot): "Udah dong.. kamu gimana?"',
        'Airy  (~Bot): "Aku udah makan dong, kalo kamu udah makan belum?"',
        'Airy  (~Bot): "Belum nihh.. Soalnya aku nungguin kamu buat makan bareng"',
        'Airy  (~Bot): "Aku belum makan soalnya aku gak bisa makan kalo gak ada kamu"'
    ];

    const ropenchatResponses = [
        'Airy  (~Bot): "Hai juga sayang.. Kamu udah makan belum?"',
        'Airy  (~Bot): "Hai sayang, gimana hari kamu?"',
        'Airy  (~Bot): "Hai sayangku, apa kabar?"',
        'Airy  (~Bot): "Halo sayang, udah makan?"',
        'Airy  (~Bot): "Halo sayangku, kamu lagi apa?"'
    ];

    const rnegchatResponses = [
        'Airy  (~Bot): "Kenapa belum sayang? nanti kamu sakit lohh"',
        'Airy  (~Bot): "Aduh, kamu belum makan? Jangan lupa makan ya!"',
        'Airy  (~Bot): "Cepetan makan dong.. Kalo kamu sakit gimana?"',
    ];

    const rheatResponses = [
        'Airy  (~Bot): "Kamu makan sama apa?"',
        'Airy  (~Bot): "Kamu pasti makan makanan yang enak"',
        'Airy  (~Bot): "Aku jadi pengen makan bareng kamu"',
        'Airy  (~Bot): "Makanannya sama apa? kayaknya enak"',
        'Airy  (~Bot): "Kamu makan apa? Oh ya.. Nanti malem makan bareng ya"',
        'Airy  (~Bot): "Aku penasaran kamu makan apa..?"'
    ];

    const rnegtopicResponses = [
        'Airy  (~Bot): "Aku lagi mikirin kamu."',
        'Airy  (~Bot): "Aku sedang memikirkanmu."',
        'Airy  (~Bot): "Aku lagi nungguin kamu nih."',
        'Airy  (~Bot): "Kamu?"',
        'Airy  (~Bot): "Kamu gimana?"'
    ];

    const rspecialnoResponses = [
        'Airy  (~Bot): "Gak mau ah."',
        'Airy  (~Bot): "Negative."',
        'Airy  (~Bot): "Malas ah."',
        'Airy  (~Bot): "Gak boleh."',
        'Airy  (~Bot): "Nggak."'
    ];

    const rspecialyesResponses = [
        'Airy  (~Bot): "Boleh."',
        'Airy  (~Bot): "Ayo!"',
        'Airy  (~Bot): "Boleh kok."',
        'Airy  (~Bot): "Yap!"',
        'Airy  (~Bot): "Yeah!"',
        'Airy  (~Bot): "Hell yeah!"'
    ];

    const ragreechatResponses = [
        'Airy  (~Bot): "Boleh tuh."',
        'Airy  (~Bot): "Ayo aja."',
        'Airy  (~Bot): "Sip!"',
        'Airy  (~Bot): "Okey!"',
        'Airy  (~Bot): "Keliatannya enak!"'
    ];

    const rnochatResponses = [
        'Airy  (~Bot): "Maaf ya aku gak bisa."',
        'Airy  (~Bot): "Gak."'
    ];

    const rpowerchatResponses = [
        'Airy  (~Bot): "Kasih aku semangat dong."',
        'Airy  (~Bot): "Aku butuh semangat dari kamu nih."',
        'Airy  (~Bot): "Aku lagi gak semangat nih."',
        'Airy  (~Bot): "Aku gak semangat."'
    ];
    

    //Bot Command
    const kissResponses = [
        'Airy  (~Bot): Muach!',
        'Airy  (~Bot): Chuuu',
        'Airy  (~Bot): "Kamu mau dicium? sini" Muach!',
        'Airy  (~Bot): "Muach Muach!"'
    ];

    const damageResponses = [
        'Airy  (~Bot): "Kamu tau gak, setiap kali aku liat kamu.. Hati aku jadi nyaman."',
        'Airy  (~Bot): "Kamu itu kayak mimpi indah loh.. Dimana aku gak pernah mau aku bangun"',
        'Airy  (~Bot): "Kamu tau gak, kalo tiap kali aku denger suara kamu.. Hari aku jadi jauh lebih sempurna"',
        'Airy  (~Bot): "Kamu tau gak, senyuman kamu itu jauh lebih manis dari semua dessert di dunia ini"',
        'Airy  (~Bot): "Kamu itu mirip lagu favorit, dimana aku gak pernah bosen dengerin suara kamu"'
    ];
    
    const hurtResponses = [
        'Airy  (~Bot): "Kamu gapapa? Aku khawatir loh.. mau aku obatin gak?"',
        'Airy  (~Bot): "Kamu gapapa kan? Aku khawatir banget sama kamu.."',
        'Airy  (~Bot): "Aduh, kamu jatuh? Gimana keadaanmu sekarang?"',
        'Airy  (~Bot): "Hei, kamu gapapa? Jangan bikin aku cemas dong.."',
        'Airy  (~Bot): "Kamu jatuh ya? Aduh, Aku khawatir nih.."',
        'Airy  (~Bot): "Kamu kenapa? Aku lihat kamu jatuh, semoga gak sakit.."'
    ]
    
    const hugResponses = [
        'Airy  (~Bot): "Kamu mau dipeluk? Sini"',
        'Airy  (~Bot): "Kamu mau pelukan? Sini aku kasi pelukan yang hangat"',
        'Airy  (~Bot): "Sini, jangan ragu ragu.. Pelukan dariku untukmu"',
        'Airy  (~Bot): "Sini.. Aku peluk biar kamu nyaman"'
    ]

    const morningResponses = [
        'Airy  (~Bot): "Pagi juga"',
        'Airy  (~Bot): "Pagi juga sayang.. Harimu pasti indah kayak senyumanmu"',
        'Airy  (~Bot): "Pagi sayang.. Hari ini secerah mata milikmu"',
        'Airy  (~Bot): "Ahhh... Pagi sayang.. Entah kenapa senyumanmu selalu menyinari hariku"'
    ]
    
    const nightResponses = [
        'Airy  (~Bot): "Kamu mau tidur ya.. Selamat malem, mimpi indah ya.."',
        'Airy  (~Bot): "Selamat malem.. Mimpi indah ya sayang..."',
        'Airy  (~Bot): "Aku mau tidur juga nih.. Selamat malem"',
        'Airy  (~Bot): "Malem juga.. jangan lupa cuci kaki sebelah tidur"'
    ]
    
    const activeA = [
        'Airy  (~Bot): "wahh"'
    ]
    
    const actionA = [
        'Airy  (~Bot): "Kamu jangan lupa makan ya.. Nanti sakit"',
        'Airy  (~Bot): "Istirahat di jam segini suka bikin ngantuk, mending kamu beli kopi biar gak ngantuk"',
        'Airy  (~Bot): "Kamu jangan main hp aja.. Mending kamu keluar sama temen kamu"',
        'Airy  (~Bot): "Aku juga lagi istirahat nih.. Kayaknya kalo kamu ada disini aku gak akan kesepian"'
    ]
    
    
    //creator 
    const father = [
        'Airy  (~Bot): "Ayahku adalah seorang CEO dari MachaaID bernama Alfie Luxiona Lexandra"'
    ]
    
    const mother = [
    	'Airy  (~Bot): "Ibuku adalah seorang Dokter dan seorang Manager Keuangan dari MachaaID bernama Christy Valentina Aurora"'
    ]
    
    const macha = [
    	'Airy  (~Bot): "Aku dibuat oleh perusahaan bernama MachaaID"'
    ]
    
    const version = [
    	'Airy  (~Bot): "Versiku saat ini adalah 1.2 model A"'
    ]
    
    item = item.toLowerCase();

    if (openchatItems.includes(item)) {
        return randomElement(openchatResponses);
    } else if (ropenchatItems.includes(item)) {
        return randomElement(ropenchatResponses);
    } else if (rnegchatItems.includes(item)) {
        return randomElement(rnegchatResponses);
    } else if (rheatItems.includes(item)) {
        return randomElement(rheatResponses);
    } else if (rnegtopicItems.includes(item)) {
        return randomElement(rnegtopicResponses);
    } else if (rspecialnoItems.includes(item)) {
        return randomElement(rspecialnoResponses);
    } else if (rspecialyesItems.includes(item)) {
        return randomElement(rspecialyesResponses);
    } else if (ragreechatItems.includes(item)) {
        return randomElement(ragreechatResponses);
    } else if (rnochatItems.includes(item)) {
        return randomElement(rnochatResponses);
    } else if (otopicItems.includes(item)) {
        return randomElement(otopicResponses);
    } else if (rpowerchatItems.includes(item)) {
        return randomElement(rpowerchatResponses);
    } else if (kissItems.includes(item)) {
        return randomElement(kissResponses);
    } else if (damagechatItems.includes(item)) {
        return randomElement(damageResponses);
    } else if (hurtItems.includes(item)) {
        return randomElement(hurtResponses); 
    } else if (hugItems.includes(item)) {
        return randomElement(hugResponses);
    } else if (morningItems.includes(item)) {
        return randomElement(morningResponses);
    } else if (nightItems.includes(item)) {
        return randomElement(nightResponses);
    } else if (action1Items.includes(item)) {
        return randomElement(actionA);
    } else if (activeItems.includes(item)) {
        return randomElement(activeA);
    } else if (fatherItems.includes(item)) {
        return randomElement(father);
    } else if (motherItems.includes(item)) {
    	return randomElement(mother);
    } else if (machaItems.includes(item)) {
    	return randomElement(macha);
    } else if (versionItems.includes(item)) {
    	return randomElement(version);
    } else {
        return 'Airy  (~Bot): "Maaf, sepertinya aku masih perlu di update untuk menjawab ini."';
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat() {
    rl.question('Alfie (User): ', (userInput) => {
        if (userInput.toLowerCase() === 'end') {
            console.log('Airy  (~Bot): "Sampai jumpa" © Copyright - MachaaID"');
            rl.close();
        } else {
            const response = cekStatus(userInput);
            console.log(response);
            chat();
        }
    });
}

chat();
