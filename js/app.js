let nombreUsuario = prompt("Bienvenidx a tu seleccion de personaje de rol, por favor dime tu nombre");

while (nombreUsuario === "") {
    alert("debes ingresar un nombre para continuar");
    nombreUsuario = prompt("¿cuál es tu nombre?");
}
alert("Listo " + nombreUsuario + " ya podemos continuar");

let tipoPerso = prompt("Elige la raza:\n Elfo \n Enano \n Humano").toLowerCase();

while (tipoPerso !== "elfo" && tipoPerso !== "enano" && tipoPerso !== "humano") {
    tipoPerso = prompt("Por favor elige una raza: Elfo, Enano, Humano").toLowerCase();
}

let clasePerso;
if (tipoPerso === "elfo" || tipoPerso === "enano" || tipoPerso === "humano") {
    clasePerso = prompt("Elige la clase:\n Hechicero\n Guerrero\n Cazador").toLowerCase();

    while (clasePerso !== "hechicero" && clasePerso !== "guerrero" && clasePerso !== "cazador") {
        clasePerso = prompt("Por favor elige la clase: Hechicero, Guerrero, Cazador").toLowerCase();
    }
}

function tarjetaPresentacion (nombre, raza, clase) {
    let tarjeta = "Suerte " + nombre + " ¡el juego te espera!:\n\n";

    if (raza === "elfo") {
        if (clase === "hechicero") {
            tarjeta += "Nombre: Elysandra\n\n";
            tarjeta += "Apariencia: alta y delgada con cabello plateado, ojos verdes intensos y una túnica azul con símbolos mágicos.\n\n";
            tarjeta += "Personalidad: tranquila, reflexiva y apasionada por la magia. Es valiente y protectora, dispuesta a arriesgar su vida por sus amigos, pero actúa con sabiduría y precaución. \n\n";
            tarjeta += "Habilidades: es una hechicera poderosa que utiliza hechizos elementales, puede curar y proteger a sus aliados, y tiene habilidades para resolver enigmas y descubrir secretos.\n\n";
            tarjeta += "Trasfondo: creció en una aldea élfica y se fue en busca de aventuras para aprender magia y proteger a su pueblo.\n\n";
            
        } else if (clase === "guerrero") {
            tarjeta += "Nombre: Thalorin Stormblade\n\n";
            tarjeta += "Descripción: fuerte y ágil con cabello dorado y ojos verdes decididos. Viste una armadura de cuero resistente y empuña una espada larga magníficamente forjada, representando su dedicación a proteger a su pueblo y su entorno natural.\n\n";
            tarjeta += "Motivación: su principal motivación es proteger a su pueblo y su entorno natural de las amenazas. Busca asegurar la seguridad de su comunidad y mantener la armonía con la naturaleza, aspirando a un mundo donde los elfos y la naturaleza vivan en paz.\n\n";
            tarjeta += "Equipo: una robusta armadura de cuero, una espada larga exquisitamente forjada y un arco élfico. Además, lleva un escudo adornado con elementos naturales. Su equipo demuestra su preparación para la batalla y su conexión con la naturaleza.\n\n";

        } else if (clase === "cazador") {
            tarjeta += "Nombre: Elara Windrider\n\n";
            tarjeta += "Descripción: es una hermosa elfa de los bosques con piel pálida, cabello oscuro y ojos verdes. Es una experta cazadora, hábil con el arco y la espada corta, y tiene una conexión única con los animales del bosque. Además, tiene un don para la magia arcano-natural.\n\n";
            tarjeta += "Motivación: busca descubrir nuevos lugares, conocer diferentes culturas y proteger los bosques y sus criaturas. Siente una llamada en su interior para cumplir un deber desconocido y desentrañar los misterios de su propio linaje y su magia.\n\n";
            tarjeta += "Equipo: Lleva un arco y una espada corta élficos, con grabados que representan la naturaleza. Viste una túnica ligera y terrosa para moverse con facilidad en los bosques.\n\n";
        }
    } else if (raza === "enano") {
        if (clase === "hechicero") {
            tarjeta += "Nombre: Borin Piedramágica\n\n";
            tarjeta += "Apariencia: de estatura baja, con una barba grisácea que le llega hasta el pecho. Viste una túnica de color azul oscuro adornada con runas mágicas y siempre lleva un sombrero puntiagudo que oculta su cabello canoso.\n\n";
            tarjeta += "Trasfondo: proviene de una ancestral familia de hechiceros enanos. Desde joven, mostró un talento innato para la magia, lo que lo llevó a seguir una senda mágica en lugar de las ocupaciones típicas de los enanos. Se aventuró lejos de su hogar en busca de conocimiento mágico y el dominio de las artes arcanas.\n\n";
            tarjeta += "Personalidad: sabio y tranquilo, dedicado al estudio de la magia. Aunque su aspecto es serio, es amigable y siempre dispuesto a compartir su conocimiento con quienes lo rodean.\n\n";
            tarjeta += "Habilidades: es un hechicero talentoso, especializado en magia de fuego y rayos. Puede lanzar poderosos hechizos destructivos y también posee la habilidad de detectar y desactivar trampas mágicas.\n\n";

        } else if (clase === "guerrero") {
            tarjeta += "Nombre: Gideon\n\n";
            tarjeta += "Apariencia: robusto con una larga barba castaña rojiza que llega casi hasta su cintura. Lleva una armadura de cuero endurecido con runas enanas y empuña un hacha de batalla de doble filo como su arma principal.\n\n";
            tarjeta += "Trasfondo: proviene de una ancestral línea de guerreros enanos y fue entrenado en las artes de la guerra desde joven. Una tragedia personal lo llevó a abandonar su hogar en busca de redención y propósito.\n\n";
            tarjeta += "Personalidad: justiciero y decidido, valora la ética y la lealtad. A pesar de su endurecimiento por experiencias pasadas, muestra empatía por los que sufren y busca un propósito.\n\n";
            tarjeta += "Habilidades: es un hábil guerrero en el combate cuerpo a cuerpo y con el hacha de batalla. Su resistencia y habilidades de supervivencia son notables.\n\n";

        } else if (clase === "cazador") {
            tarjeta += "Nombre: Thorin Gargantasalvaje\n\n";
            tarjeta += "Apariencia: robusto con una espesa barba de color marrón oscuro y cabello trenzado. Lleva una armadura de cuero reforzado decorada con huesos de criaturas cazadas y porta un arco largo y una hacha de caza afilada.\n\n";
            tarjeta += "Trasfondo: proviene de una línea de cazadores enanos que han defendido su hogar en los bosques durante generaciones. Desde joven, fue entrenado en las habilidades de rastreo, caza y supervivencia en la naturaleza.\n\n";
            tarjeta += "Personalidad: apasionado por la caza y la vida al aire libre. Es valiente y decidido, y siempre se siente más en su elemento en los bosques. Es un individuo tranquilo pero observador, con un profundo respeto por la naturaleza y sus criaturas. Muestra una fuerte conexión con la tierra y un sentido de responsabilidad para protegerla.\n\n";
            tarjeta += "Habilidades: es un cazador consumado, con habilidades excepcionales en el tiro con arco y la caza de bestias salvajes. También es un rastreador experto y puede identificar plantas y hierbas útiles.\n\n";

        }
    } else if (raza === "humano") {
        if (clase === "hechicero") {
            tarjeta += "Nombre: Elowen Solaris\n\n";
            tarjeta += "Apariencia: cabello dorado y ojos azules, que irradiaban una luz mágica cuando lanza hechizos. Viste túnicas de seda decoradas con símbolos arcanos y lleva un cetro de cristal como su enfoque mágico.\n\n";
            tarjeta += "Trasfondo: nació con un talento innato para la magia y fue entrenada por un poderoso hechicero en su juventud. Su búsqueda de conocimiento y control la llevó a abandonar su hogar en busca de antiguos textos y artefactos mágicos. A medida que profundizó en el arte de la magia, descubrió un linaje mágico secreto en su familia.\n\n";
            tarjeta += "Personalidad: apasionada y curiosa, siempre sedienta de conocimiento mágico. A pesar de su talento, es humilde y busca utilizar su magia para el bien. Es amable y compasiva, dispuesta a ayudar a quienes lo necesitan y a utilizar su magia para sanar y proteger.\n\n";
            tarjeta += "Habilidades: es una hechicera experta en magia de iluminación y sanación. Puede lanzar hechizos de luz brillante para atacar o curar heridas. Su cetro de cristal aumenta su poder mágico y le permite canalizar su magia con precisión. Además, tiene la habilidad de detectar y desactivar trampas mágicas.\n\n";
            
        } else if (clase === "guerrero") {
            tarjeta += "Nombre: Varian Martel\n\n";
            tarjeta += "Descripción: musculoso y alto, con cabello oscuro y barba bien cuidada. Su mirada intensa refleja su determinación. Viste una armadura de cuero reforzado y lleva su espada en la cadera, siempre preparado para la acción.\n\n";
            tarjeta += "Historia: es originario de un reino distante famoso por la forja de armas ancestrales. Abandonó su tierra natal en busca de aventuras para honrar el legado de sus antepasados guerreros.\n\n";
            tarjeta += "Personalidad: Valiente y audaz, es un guerrero nato que valora la acción sobre las palabras. Es leal a sus amigos y protege a quienes considera su familia. Aunque puede parecer rudo, tiene un corazón noble.\n\n";
            tarjeta += "Habilidades: es un experto en combate cuerpo a cuerpo, destacando en el uso de espadas y hachas. Su conocimiento en la forja y mantenimiento de armas es valioso, y su resistencia le permite soportar heridas graves.\n\n";
            tarjeta += "Equipo: Porta una espada de doble filo con empuñadura adornada y grabados que relatan la historia de su familia. Su armadura de cuero reforzado lleva símbolos de su reino. Además, transporta herramientas de forja para reparar armas.\n\n";
            
        } else if (clase === "cazador") {
            tarjeta += "Nombre: Alaric\n\n";
            tarjeta += "Apariencia: es un humano de apariencia ruda, con cabello oscuro y barba descuidada. Lleva una armadura de cuero adornada con trofeos de sus cazas pasadas y porta un arco largo y una daga como armas principales.\n\n";
            tarjeta += "Trasfondo: creció en una aldea fronteriza, donde aprendió las habilidades de caza y supervivencia desde joven. Se convirtió en un cazador consumado y decidió abandonar su hogar en busca de emocionantes desafíos en la naturaleza. Se enfrentó a bestias feroces y depredadores, ganando una reputación como cazador de bestias.\n\n";
            tarjeta += "Personalidad: es un cazador intrépido y apasionado por la vida al aire libre. Valora la independencia y la libertad que encuentra en la naturaleza. A pesar de su apariencia tosca, es un individuo leal y protector.\n\n";
            tarjeta += "Habilidades: es un arquero experto y un cazador consumado. Puede disparar flechas con precisión mortal y rastrear a las bestias con facilidad. Su habilidad en la supervivencia le permite sobrevivir en los terrenos más hostiles y enfrentar desafíos naturales.\n\n";
        }
    }

    alert(tarjeta);
}

tarjetaPresentacion(nombreUsuario, tipoPerso, clasePerso);
