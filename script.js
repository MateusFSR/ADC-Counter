function resultado(){
    var seg = document.getElementById('hero');
    var champ = String(seg.value);

    //campeoes
    var cash = 'Ashe'
    var ccai = 'Caitlyn' 
    var ccor = 'Corki' 
    var cdra = 'Draven' 
    var cezr = 'Ezreal' 
    var cgra = 'Graves' 
    var cjhi = 'Jhin' 
    var cjin = 'Jinx' 
    var ckal = 'Kalista' 
    var ckin = 'Kindred' 
    var ckog = 'KogMaw' 
    var cluc = 'Lucian' 
    var cmis = 'Miss Fortune' 
    var cqui = 'Quinn' 
    var csiv = 'Sivir' 
    var ctri = 'Tristana' 
    var ctwi = 'Twitch' 
    var cvay = 'Vayne' 
    var csam = 'Samira'
    var csen = 'Senna'
    var czer = 'Zeri'
    var cvar = 'Varus'
    var ckai = 'Kaisa'

    //fotos
    var iash = document.createElement('img')
    iash.setAttribute('id', 'foto')
    iash.setAttribute('src', 'imagens/ashe.png')
    iash.style.height='30px'
    iash.style.verticalAlign='-1.0vh'

    var icai = document.createElement('img')
    icai.setAttribute('id', 'foto')
    icai.setAttribute('src', 'imagens/caitlyn.png')
    icai.style.height='30px'
    icai.style.verticalAlign='-1.0vh'

    var icor = document.createElement('img')
    icor.setAttribute('id', 'foto')
    icor.setAttribute('src', 'imagens/corki.png')
    icor.style.height='30px'
    icor.style.verticalAlign='-1.0vh'

    var idra = document.createElement('img')
    idra.setAttribute('id', 'foto')
    idra.setAttribute('src', 'imagens/draven.png')
    idra.style.height='30px'
    idra.style.verticalAlign='-1.0vh'

    var iezr = document.createElement('img')
    iezr.setAttribute('id', 'foto')
    iezr.setAttribute('src', 'imagens/ezreal.png')
    iezr.style.height='30px'
    iezr.style.verticalAlign='-1.0vh'

    var igra = document.createElement('img')
    igra.setAttribute('id', 'foto')
    igra.setAttribute('src', 'imagens/graves.png')
    igra.style.height='30px'
    igra.style.verticalAlign='-1.0vh'

    var ijhi = document.createElement('img')
    ijhi.setAttribute('id', 'foto')
    ijhi.setAttribute('src', 'imagens/jhin.png')
    ijhi.style.height='30px'
    ijhi.style.verticalAlign='-1.0vh'

    var ijin = document.createElement('img')
    ijin.setAttribute('id', 'foto')
    ijin.setAttribute('src', 'imagens/jinx.png')
    ijin.style.height='30px'
    ijin.style.verticalAlign='-1.0vh'

    var ikal = document.createElement('img')
    ikal.setAttribute('id', 'foto')
    ikal.setAttribute('src', 'imagens/kalista.png')
    ikal.style.height='30px'
    ikal.style.verticalAlign='-1.0vh'

    var ikin = document.createElement('img')
    ikin.setAttribute('id', 'foto')
    ikin.setAttribute('src', 'imagens/kindread.png')
    ikin.style.height='30px'
    ikin.style.verticalAlign='-1.0vh'

    var ikog = document.createElement('img')
    ikog.setAttribute('id', 'foto')
    ikog.setAttribute('src', 'imagens/kog.png')
    ikog.style.height='30px'
    ikog.style.verticalAlign='-1.0vh'

    var iluc = document.createElement('img')
    iluc.setAttribute('id', 'foto')
    iluc.setAttribute('src', 'imagens/lucian.png')
    iluc.style.height='30px'
    iluc.style.verticalAlign='-1.0vh'

    var imis = document.createElement('img')
    imis.setAttribute('id', 'foto')
    imis.setAttribute('src', 'imagens/miss.png')
    imis.style.height='30px'
    imis.style.verticalAlign='-1.0vh'

    var iqui = document.createElement('img')
    iqui.setAttribute('id', 'foto')
    iqui.setAttribute('src', 'imagens/quinn.png')
    iqui.style.height='30px'
    iqui.style.verticalAlign='-1.0vh'

    var isiv = document.createElement('img')
    isiv.setAttribute('id', 'foto')
    isiv.setAttribute('src', 'imagens/sivir.png')
    isiv.style.height='30px'
    isiv.style.verticalAlign='-1.0vh'

    var itri = document.createElement('img')
    itri.setAttribute('id', 'foto')
    itri.setAttribute('src', 'imagens/tristana.png')
    itri.style.height='30px'
    itri.style.verticalAlign='-1.0vh'

    var itwi = document.createElement('img')
    itwi.setAttribute('id', 'foto')
    itwi.setAttribute('src', 'imagens/twitch.png')
    itwi.style.height='30px'
    itwi.style.verticalAlign='-1.0vh'

    var ivay = document.createElement('img')
    ivay.setAttribute('id', 'foto')
    ivay.setAttribute('src', 'imagens/vayne.png')
    ivay.style.height='30px'
    ivay.style.verticalAlign='-1.0vh'

    var isam = document.createElement('img')
    isam.setAttribute('id', 'foto')
    isam.setAttribute('src', 'imagens/samira.png')
    isam.style.height='30px'
    isam.style.verticalAlign='-1.0vh'

    var isen = document.createElement('img')
    isen.setAttribute('id', 'foto')
    isen.setAttribute('src', 'imagens/senna.png')
    isen.style.height='30px'
    isen.style.verticalAlign='-1.0vh'
    
    var izer = document.createElement('img')
    izer.setAttribute('id', 'foto')
    izer.setAttribute('src', 'imagens/zeri.png')
    izer.style.height='30px'
    izer.style.verticalAlign='-1.0vh'

    var ivar = document.createElement('img')
    ivar.setAttribute('id', 'foto')
    ivar.setAttribute('src', 'imagens/varus.png')
    ivar.style.height='30px'
    ivar.style.verticalAlign='-1.0vh'

    var ikai = document.createElement('img')
    ikai.setAttribute('id', 'foto')
    ikai.setAttribute('src', 'imagens/kaisa.png')
    ikai.style.height='30px'
    ikai.style.verticalAlign='-1.0vh'

    txt1.innerText = `${champ} perde a lane para:`;
    txt1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)';

        if (champ == 'Ashe'){
            chp1.innerText = cdra
            chp1.appendChild(idra)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ctri
            chp2.appendChild(itri)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
            chp3.appendChild(icai)

            chp4.innerText = cluc
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
            chp4.appendChild(iluc)

            chp5.innerText = ctwi
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
            chp5.appendChild(itwi)
        }

        else if (champ == 'Caitlyn'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ctwi
            chp2.appendChild(itwi)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = cjhi
            chp3.appendChild(ijhi)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cvar
            chp4.appendChild(ivar)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ctri
            chp5.appendChild(itri)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ =='Draven'){
            chp1.innerText = csen
            chp1.appendChild(isen)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cash
            chp2.appendChild(iash)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = cjhi
            chp3.appendChild(ijhi)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = czer
            chp4.appendChild(izer)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cvay
            chp5.appendChild(ivay)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Ezreal'){           
            chp1.innerText = cdra
            chp1.appendChild(idra)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ckal
            chp2.appendChild(ikal)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cluc
            chp4.appendChild(iluc)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ctri
            chp5.appendChild(itri)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Jhin'){           
            chp1.innerText = cvay
            chp1.appendChild(ivay)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ctri
            chp3.appendChild(itri)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = ''
            chp4.style.background='#222025'

            chp5.innerText = ''
            chp5.style.background='#222025'
        }

        else if (champ == 'Jinx'){
            chp1.innerText = cdra
            chp1.appendChild(idra)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ckal
            chp2.appendChild(ikal)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cluc
            chp4.appendChild(iluc)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ctri
            chp5.appendChild(itri)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Kalista'){
            chp1.innerText = cash
            chp1.appendChild(iash)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ctri
            chp3.appendChild(itri)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = csen
            chp4.appendChild(isen)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = csiv
            chp5.appendChild(isiv)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'KogMaw'){
            chp1.innerText = cjhi
            chp1.appendChild(ijhi)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = csiv
            chp3.appendChild(isiv)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = ctwi
            chp4.appendChild(itwi)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cash
            chp5.appendChild(iash)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'KogMaw'){
            chp1.innerText = cjhi
            chp1.appendChild(ijhi)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = csiv
            chp3.appendChild(isiv)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = ctwi
            chp4.appendChild(itwi)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cash
            chp5.appendChild(iash)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Lucian'){
            chp1.innerText = cvay
            chp1.appendChild(ivay)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cjhi
            chp4.appendChild(ijhi)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cmis
            chp5.appendChild(imis)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Miss Fortune'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cdra
            chp2.appendChild(idra)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ctri
            chp3.appendChild(itri)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = ccai
            chp4.appendChild(icai)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cluc
            chp5.appendChild(iluc)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Sivir'){
            chp1.innerText = cash
            chp1.appendChild(iash)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cjin
            chp2.appendChild(ijin)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cluc
            chp4.appendChild(iluc)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cvay
            chp5.appendChild(ivay)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Tristana'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ckog
            chp2.appendChild(ikog)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = csam
            chp3.appendChild(isam)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cash
            chp4.appendChild(iash)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cluc
            chp5.appendChild(iluc)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Twitch'){
            chp1.innerText = ckai
            chp1.appendChild(ikai)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = csen
            chp2.appendChild(isen)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = cjhi
            chp3.appendChild(ijhi)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = ctri
            chp4.appendChild(itri)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cmis
            chp5.appendChild(imis)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Vayne'){
            chp1.innerText = cdra
            chp1.appendChild(idra)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ckal
            chp2.appendChild(ikal)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cluc
            chp4.appendChild(iluc)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = csam
            chp5.appendChild(isam)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Samira'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cash
            chp2.appendChild(iash)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = cjhi
            chp3.appendChild(ijhi)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = csen
            chp4.appendChild(isen)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = cvar
            chp5.appendChild(ivar)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Zeri'){
            chp1.innerText = ckal
            chp1.appendChild(ikal)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cdra
            chp2.appendChild(idra)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ccai
            chp3.appendChild(icai)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cluc
            chp4.appendChild(iluc)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ctri
            chp5.appendChild(itri)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Varus'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = ctri
            chp2.appendChild(itri)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = ckog
            chp3.appendChild(ikog)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cvay
            chp4.appendChild(ivay)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ccai
            chp5.appendChild(icai)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }

        else if (champ == 'Kaisa'){
            chp1.innerText = cjin
            chp1.appendChild(ijin)
            chp1.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp2.innerText = cvay
            chp2.appendChild(ivay)
            chp2.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp3.innerText = csam
            chp3.appendChild(isam)
            chp3.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp4.innerText = cjhi
            chp4.appendChild(ijhi)
            chp4.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'

            chp5.innerText = ckog
            chp5.appendChild(ikog)
            chp5.style.background= 'linear-gradient(to right,#2AA3CC ,#7f1888)'
        }
}
