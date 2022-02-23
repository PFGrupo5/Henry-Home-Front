import React, { useState } from "react";
import "../assets/css/Footer/Footer2.scss";
import iconProvider from "../utils/IconProvider";
import { Modal } from "antd";

export default function Footer2() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="foot2Container">
      <div className="foot2Description">
        Henry <span>Home</span> <span className="span"></span>
        <p className="foot2PDeta">
          Bienvenidos a Henry-Home, una pagina en la que podras publicar tus
          alojamientos y alquilar otros
        </p>
      </div>
      <div className="foot2BePart">
        <h1 className="title">
          Se Parte de Nuestro Equipo<span className="span"></span>
        </h1>
        <ul className="foot2Ul">
          <li>
            <div>
              <a href="/admins" className="foot2A">
                Ser Administrador
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/owners" className="foot2A">
                Ser Dueño
              </a>
            </div>
          </li>
          <li>
            <div>
              <span onClick={showModal} className="modal-terms">
                Terminos y condiciones
              </span>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                Términos y condiciones Imprimir todas las secciones Bienvenido a
                la página web de HenryHome.com (el "Sitio web"). Este Sitio web
                solo se utiliza con el propósito de asesorar a los clientes en
                lo referido a la recopilación de información sobre viajes, la
                identificación de disponibilidad de los productos y servicios
                turísticos, la realización de reservaciones legítimas o, de otro
                modo, para transacciones comerciales con proveedores de viajes,
                y con ningún otro propósito. Los términos "nosotros", "nuestro"
                y "HenryHome.com" hacen referencia a Hotels.com, L.P., una
                sociedad limitada de Texas o a cualquiera de sus filiales. El
                término "tú" hace referencia al cliente que visita el Sitio web
                y/o realiza una reservación por medio de nosotros en este Sitio
                web o por medio de nuestros agentes del Centro de servicio al
                cliente. Este Sitio web se ofrece sujeto a tu aceptación, sin
                modificación de ninguno de los términos, condiciones y
                notificaciones establecidos a continuación (conjuntamente, el
                "Acuerdo"). Al acceder o usar, de cualquier manera, este sitio
                web, aceptas regirte por el Acuerdo. Lee cuidadosamente el
                Acuerdo. En caso de no aceptar todos estos términos y
                condiciones, no uses este Sitio web. Asegúrate de consultar en
                forma periódica esta página para mantenerte actualizado con la
                versión más reciente del Acuerdo. Nos reservamos el derecho de
                cambiar o, de otro modo, modificar el Acuerdo, en cualquier
                momento y a nuestra entera discreción, sin previa notificación,
                y tu posterior acceso al Sitio web significará la aceptación del
                Acuerdo actualizado o modificado. USO DEL SITIO WEB Como
                condición para el uso de este Sitio web, garantizas que: 1.
                Tienes, al menos, 18 años de edad. 2. Tienes la autoridad legal
                para contraer una obligación legal vinculante. 3. Usarás este
                Sitio web de conformidad con este Acuerdo. 4. Solo usarás este
                Sitio web para realizar reservaciones legítimas para ti u otra
                persona respecto de la cual tienes autoridad legal para
                representar. 5. Toda la información que provees a este Sitio web
                es verdadera, precisa, actual y completa. 6. En caso de tener
                una cuenta de HenryHome.com, protegerás la información de dicha
                cuenta, supervisarás y serás totalmente responsable del uso de
                tu cuenta por parte de otra persona que no seas tú. Nosotros
                tenemos el derecho, a nuestra entera discreción, de denegar el
                acceso a este Sitio web y a los servicios que ofrecemos a
                cualquier persona, en cualquier momento y por cualquier motivo,
                lo que incluye, en forma enunciativa y no limitativa, la
                violación de este Acuerdo. ACTIVIDADES PROHIBIDAS El contenido y
                la información de este Sitio web (lo que incluye, en forma
                enunciativa y no limitativa, el precio y la disponibilidad de
                los servicios de viajes), como también la infraestructura que se
                usa para proporcionar tal contenido e información, es de nuestra
                propiedad exclusiva o de nuestros proveedores y proveedores de
                servicios. Mientras que puedes hacer una cantidad limitada de
                copias de tu itinerario de viaje (y de los documentos
                relacionados) para los viajes o servicios reservados por medio
                de este Sitio web, aceptas que de ninguna manera podrás
                modificar, copiar, distribuir, transmitir, mostrar, realizar,
                reproducir, publicar, otorgar licencia, crear trabajos
                derivados, transferir, vender o revender cualquier información,
                software, producto o servicio obtenido de este Sitio web o por
                medio de este Sitio web. Asimismo, también aceptas no hacer lo
                siguiente: 1. Usar este Sitio web o su contenido con ningún
                propósito comercial. 2. Realizar reservaciones hipotéticas,
                falsas o fraudulentas o reservaciones previendo la demanda. 3.
                Acceder, controlar o copiar el contenido o la información de
                este Sitio web usando un robot, spider, scraper u otro medio
                automatizado o cualquier proceso manual para ningún propósito,
                sin nuestro permiso expreso por escrito. 4. Violar las
                restricciones de cualquier encabezado de exclusión de robots de
                este Sitio web, evitar o evadir otras medidas utilizadas para
                impedir o limitar el acceso a este Sitio web. 5. Tomar acciones
                que impongan, o puedan imponer, según nuestro criterio, una
                carga irracional o desproporcionadamente grande en nuestra
                infraestructura. 6. Crear enlaces profundos a cualquier parte de
                este Sitio web (lo que incluye, en forma enunciativa y no
                limitativa, la ruta de compra de cualquier servicio de viajes)
                para ningún propósito sin nuestro permiso expreso por escrito.
                7. "Enmarcar", "reflejar" o de otra manera incorporar cualquier
                parte de este Sitio web dentro de cualquier otro sitio web sin
                nuestra previa autorización por escrito. REGLAS Y RESTRICCIONES
                DE LOS PROVEEDORES Se aplicarán términos y condiciones por
                separado para tu reservación y compra de los productos o
                servicios de viajes que selecciones. Lee cuidadosamente estos
                términos y condiciones. Aceptas acatar los términos y las
                condiciones de compra impuestos por cualquier proveedor con el
                que decidas tratar, lo que incluye, en forma enunciativa y no
                limitativa, el pago de todos los importes a su vencimiento y el
                cumplimiento de las reglas y las restricciones del proveedor en
                lo que respecta a disponibilidad y uso de las tarifas, productos
                o servicios. Nosotros nos reservamos el derecho de cancelar tu
                reservación si el pago completo no se recibe de manera oportuna.
                Reconoces que es posible que algunos proveedores externos que
                ofrecen ciertos servicios o actividades te soliciten que firmes
                la exención de responsabilidad antes de participar en el
                servicio o la actividad que ellos ofrecen. Comprendes que
                cualquier violación de las reglas o restricciones de tal
                proveedor puede resultar en la cancelación de tus reservaciones,
                en que se te niegue acceder al producto o servicio de viaje
                pertinente, en la confiscación del dinero pagado para tales
                reservaciones o en que debitemos de tu cuenta los costos en los
                que podríamos incurrir a causa de dicha violación. POLÍTICA DE
                PRIVACIDAD HenryHome.com cree en la protección de tu privacidad.
                Haz clic aquí para revisar nuestra Política de privacidad
                actual, la cual también rige tu uso de HenryHome.com, a fin de
                comprender nuestros procedimientos: Política de privacidad.
                CRÍTICAS, COMENTARIOS, FOTOGRAFÍAS Y OTRAS COMUNICACIONES
                HenryHome.com puede mostrar críticas, comentarios, fotografías y
                otros materiales relacionados con hoteles, así como con otras
                experiencias de vacaciones y de viajes ("Críticas").
                HenryHome.com también podría ofrecer un servicio que permita que
                los usuarios de este sitio web publiquen críticas ("Críticas del
                usuario"). Renuncias a cualquier derecho de propiedad que
                pudieras tener sobre dichas Críticas del usuario, y estas podrán
                usarse, copiarse, distribuirse y ponerse a disposición de forma
                libre en cualquier medio y forma en HenryHome.com o en sus
                afiliados sin tu permiso. En los lugares donde se ofrezca el
                servicio de publicación, aceptas expresamente publicar solo las
                Críticas del usuario que sean apropiadas para el servicio,
                cumpliendo con estos términos y condiciones y también con
                cualquier pauta que esté disponible en este sitio web. Nos
                interesa saber tu opinión. Ten en cuenta que al exponer
                contenidos en este Sito web por correo electrónico, al realizar
                publicaciones en este Sitio web o al incluir críticas de
                hoteles, fotografías, videos, preguntas, comentarios,
                sugerencias, ideas o contenido similar en cualquier comunicación
                (conjuntamente, "Comunicaciones"), (a) le otorgas a
                HenryHome.com y a sus afiliados el derecho no exclusivo, libre
                de regalías, perpetuo, transferible, irrevocable y completamente
                sublicenciable para usar, reproducir, modificar, adaptar,
                traducir, distribuir, publicar, crear trabajos derivados,
                mostrar y realizar públicamente Comunicaciones en todo el mundo
                por cualquier medio de comunicación actualmente conocido o que
                se cree en el futuro; y (b) le otorgas a HenryHome.com y a sus
                afiliados y sublicenciatarios el derecho a usar el nombre que
                aduces en relación a dicha Comunicación, en caso de que así se
                elija. Sin embargo, reconoces que HenryHome.com puede elegir
                atribuirte o no los comentarios o críticas (por ejemplo, indicar
                tu nombre y ciudad en una crítica de un hotel que hayas
                presentado) según su propio criterio. Además, le otorgas a
                HenryHome.com el derecho de demandar a toda persona o entidad
                que viole tus derechos o los derechos de HenryHome.com en las
                Comunicaciones al incumplir con este Acuerdo. No tenemos ninguna
                responsabilidad ni asumimos ninguna obligación por las
                Comunicaciones que publiques o envíes. Si no estás de acuerdo
                con estos términos y condiciones, no proporciones ninguna
                Comunicación. Eres completamente responsable del contenido de
                tus Comunicaciones (lo que incluye específicamente, entre otros,
                las críticas publicadas en este Sitio web). Se te prohíbe
                publicar o transmitir hacia o desde este Sitio web: (i)
                cualquier material ilegal, amenazante, calumniante, difamatorio,
                obsceno, pornográfico u otro material o contenido que puedan
                violar los derechos de publicidad o privacidad o que puedan
                violar una ley; (ii) cualquier material o contenido comerciales
                (lo que incluye, en forma enunciativa y no limitativa, el pedido
                de fondos, las publicidades o la comercialización de cualquier
                producto o servicio); y (iii) cualquier material o contenido que
                infrinjan, malversen o violen cualquier derecho de autor, marca
                registrada, derecho de patentes u otro derecho de propiedad
                exclusiva de un tercero. Solo serás responsable de los daños que
                resulten de la violación a las restricciones precedentes, o de
                cualquier otro daño que resulte de tu publicación de contenidos
                en este Sitio web. Reconoces que HenryHome.com tiene el derecho
                de controlar (por ej., usar, publicar, eliminar) cualquier
                contenido que expongas sin previo aviso. En caso de que expongas
                más de una crítica de un mismo hotel, se elegirá usar solo la
                comunicación más reciente. En caso de que consideres de buena fe
                que los materiales que nosotros albergamos en el Sitio web
                infringen tus derechos de autor, tú (o tu agente) podrás
                enviarnos una notificación por escrito que incluya la siguiente
                información: Específicamente, al usar dicho servicio, declaras y
                garantizas que: • eres propietario o controlas de alguna otra
                forma todos los derechos de las Críticas del usuario que
                publicaste; • en la fecha de la publicación, eran precisas las
                Críticas del usuario publicadas; • las Críticas del usuario que
                enviaste no incumplen con ningún término o condición de uso,
                pauta o política de HenryHome.com (según correspondan); • no
                publicarás información, de manera intencional o descuidada, que
                pudiera causar lesiones u ofender a cualquier persona o negocio
                y, en particular: no publicarás ningún comentario, información o
                material que sea falso, malicioso, difamatorio, abusivo, obsceno
                o que razonablemente se pudiera tomar como tal; • no actuarás de
                ninguna forma que sirva para engañar o confundir y no
                participarás ni alentarás ninguna actividad fraudulenta o
                ilegal; • no publicarás ni distribuirás ninguna información o
                material que sea propiedad de un tercero sin el consentimiento
                expreso por escrito de dicha parte; 1. Una identificación clara
                del trabajo con derechos de autor que reclamas que se infringió.
                2. Una identificación clara del material que reclamas que está
                infringiendo el trabajo con derechos de autor e información que
                nos permita localizar ese material en el Sitio web, por ejemplo,
                un vínculo hacia el material que está en infracción. 3. Tu
                información de contacto, de manera que podamos responder a tu
                reclamación, preferentemente incluyendo tu dirección de correo
                electrónico y tu número telefónico. 4. Una declaración de que
                tienes "la convicción de buena fe de que el material que se
                reclama como en infracción de los derechos de autor no está
                autorizado por el propietario de los derechos de autor, por su
                agente o por la ley". 5. Una declaración de que "la información
                que contiene la notificación es precisa, y bajo penalización por
                perjurio, la parte que reclama está autorizada a actuar en
                nombre del propietario de un derecho exclusivo que supuestamente
                se infringió". 6. La notificación debe estar firmada por la
                persona autorizada a actuar en nombre del propietario de un
                derecho exclusivo que supuestamente se infringió. Los
                comentarios que se muestran en esta página web los realizan
                usuarios verificados que se hospedaron en un hotel reservado
                mediante HenryHome.com o sitios web de otras marcas del grupo
                Expedia. HenryHome.com no edita Críticas ni Críticas del usuario
                publicadas y hasta el grado máximo que permita la ley no será de
                ninguna manera responsable por dichas Críticas o Críticas del
                usuario ni su publicación, uso o distribución posteriores.
                Además, HenryHome.com no verifica, respalda ni aprueba los
                puntos de vista ni los comentarios expresados en ninguna de las
                Críticas o las Críticas del usuario que son los puntos de vista
                personales de los individuos que las publican. Cualquier
                decisión que tomes en base a las críticas o los comentarios que
                aparecen en el servicio va a ser bajo tu propio riesgo. Las
                notificaciones pertinentes a este Sitio web se deben enviar a:
                Hotels.com, L.P. c/o NRAI, 16055 Space Center Blvd., Suite 235,
                Houston, TX 77062; hotels-copyright@hotels.com; por teléfono al
                425-679-3753 o por fax al 425-679-7251 Se revisarán y se
                atenderán todas las notificaciones que cumplan con los
                requisitos mencionados anteriormente. Se sugiere que consultes
                con un asesor legal antes de completar una notificación o una
                contranotificación. También debes ser consciente de que podrás
                ser responsable de los daños ocasionados en caso de realizar una
                demanda falsa por infracción de los derechos de autor.
                HenryHome.com se reserva el derecho por cualquier causa y a su
                completa discreción de rehusarse a publicar o eliminar (sin
                previo aviso) cualquier Crítica o Crítica del usuario. Entre
                otras cosas, esto incluye situaciones donde HenryHome.com reciba
                la reclamación de un tercero y/o tenga razones para creer que ha
                existido un incumplimiento de estos términos y condiciones.
                Condiciones de uso de los códigos de descuento Los códigos de
                descuento ("cupones") se pueden aplicar a las reservaciones de
                hotel prepagas, excepto las reservaciones en los hoteles no
                participantes, cuya lista estará disponible junto con cada cupón
                específico. Los hoteles participantes están sujetos a cambio en
                cualquier momento. Los cupones de descuento en una moneda
                específica (por ejemplo, 10 EUR de descuento) no se pueden
                utilizar para reservaciones pagadas en una moneda diferente. Si
                el descuento se basa en un porcentaje (por ejemplo, 10% de
                descuento), en caso de reservar habitaciones múltiples (es
                decir, al reservar 2 o más habitaciones en la misma reservación)
                el descuento se aplica únicamente al precio de la primera
                habitación incluida en la solicitud de reservación. Consulta la
                comunicación de cupones correspondiente para obtener información
                sobre las restricciones específicas acerca del uso de cupones.
                Solo se puede utilizar un cupón por reservación. Se aplican los
                términos y condiciones de reservación habituales, y todas las
                reservaciones están sujetas a disponibilidad. Los cupones no se
                pueden vender ni transferir. Se aplican todos los impuestos,
                tasas y cargos a las reservaciones hechas con cupones. Estos
                cargos se deben pagar al momento de la reservación o
                directamente en el hotel y son tu responsabilidad. Los cupones
                solo tienen valor cuando se canjean según los términos y
                condiciones de la oferta. Los cupones no se pueden devolver por
                dinero en efectivo ni su equivalente. Los cupones de uso único
                se consideran utilizados por completo una vez que se hizo una
                reservación que califica; no se devolverán ni reemplazarán y no
                habrá ningún reembolso si se canjea un cupón parcialmente. Los
                cupones de uso múltiple se consideran utilizados por completo
                según las restricciones establecidas en los términos y
                condiciones de los cupones individuales. Si después del uso de
                un cupón se cambian las fechas de estadía del viaje, ese cupón
                no se aplicará al programa de viaje que se cambió. Los cupones
                no se pueden utilizar para reservaciones compradas con
                anterioridad. Las agencias de viajes afiliadas al programa de
                agencias de viaje de HenryHome.com no pueden utilizar cupones.
                HenryHome.com se reserva el derecho de modificar estas
                condiciones de uso o de retirar los cupones en cualquier
                momento. RESERVACIONES DE HOTEL PAGADAS CON ANTICIPACIÓN
                Reconoces que HenryHome.com negocia previamente ciertas tarifas
                de habitaciones con los proveedores de hoteles para hacer
                posible las reservaciones en tu nombre. La tarifa de la
                habitación que se muestra en el Sitio web es una combinación de
                la tarifa de las habitaciones negociadas previamente en tu
                nombre por parte de HenryHome.com y la comisión por la
                negociación que HenryHome.com retiene como compensación por sus
                servicios. Autorizas a HenryHome.com a realizar reservaciones
                por el precio total de la reservación, que incluye la tarifa de
                la habitación que se muestra en el Sitio web, más los cargos de
                recuperación fiscal y las comisiones por el servicio. Estás de
                acuerdo en que HenryHome.com te cobrará mediante tu tarjeta de
                crédito el precio total de la reservación. Una vez presentada la
                solicitud de reservación, autorizas a HenryHome.com a que
                gestione las reservaciones de hoteles en tu nombre, incluida la
                realización de acuerdos de pago con los proveedores de hoteles.
                Reconoces que HenryHome.com no cobra impuestos sobre la remesa a
                las autoridades fiscales pertinentes. Los cargos de recuperación
                fiscal sobre transacciones de hoteles pagadas con anticipación
                son una recuperación de los impuestos de las transacciones
                estimados (por ej., ventas y uso, ocupación, impuesto a la
                habitación, impuesto sobre consumos específicos, impuesto al
                valor agregado, etc.) que HenryHome.com paga al proveedor de
                hoteles en relación con tu reservación de hotel. El proveedor de
                hoteles le cobra a HenryHome.com los montos de los impuestos. El
                proveedor de hoteles remite los impuestos pertinentes a las
                jurisdicciones fiscales pertinentes. HenryHome.com no actúa como
                covendedor junto con el proveedor con el cual realiza la
                reservación de los arreglos del viaje de sus clientes. La
                aplicación de impuestos y la tarifa pertinente de los impuestos
                varían enormemente según la ubicación geográfica. Los importes
                reales de los impuestos que HenryHome.com paga a los proveedores
                de hoteles pueden variar según los montos de recuperación
                fiscal, dependiendo de las tarifas, la aplicación de impuestos,
                etcétera, vigentes al momento en que los clientes usen el hotel.
                Nosotros retenemos nuestras comisiones de servicios por actuar
                como intermediarios en tu reservación de viajes. Nuestra
                comisión de servicio varía según el importe y el tipo de
                reservación de hotel. Cargos por servicio Retenemos cargos por
                servicio a modo de compensación por gestionar la reservación de
                tu viaje. Los cargos por servicio varían según el importe y el
                tipo de reservación de hotel. DETALLES DE PAGAR AL INSTANTE EN
                LÍNEA O DESPUÉS EN EL HOTEL En algunos hoteles, se te puede
                presentar la opción de pagar en línea inmediatamente o pagar
                después en el mismo hotel. Si seleccionas la opción de pagar en
                línea inmediatamente, se te cobrará la cantidad en la moneda que
                selecciones en forma inmediata. La empresa que recibirá ese pago
                y cargará el importe a tu tarjeta de crédito será una de las
                siguientes: (1) Travel Partner Exchange u otro miembro de las
                Compañías de HenryHome.com que opera como HenryHome.com, la cual
                recibirá dicho pago en nombre del proveedor de servicios de
                viajes, o (2) directamente el proveedor de servicios de viajes.
                ‘‘TPX’’ significa Travel Partner Exchange S.L. con sede social
                en Paseo Milicias de Garachico 1, Edificio Hamilton, oficina 79
                38002 Santa Cruz de Tenerife, Islas Canarias, España. Si
                seleccionas pagar después en el mismo hotel, se te cobrará en la
                moneda local del hotel correspondiente al momento de tu estadía.
                Las tasas de impuestos y los tipos de cambio podrían cambiar
                entre el momento de la reservación y la estadía. Sin gastos de
                modificación o cancelación en HenryHome.com
              </Modal>
            </div>
          </li>
        </ul>
      </div>
      <div className="foot2Contact">
        <h1 className="title">
          Contactanos <span className="span"></span>
        </h1>
        <a
          href="https://github.com/PFGrupo5"
          target="_blank"
          rel="noopener noreferrer"
          className="foot2Github"
        >
          <span>Nuestro GitHub</span> {iconProvider("github")}
        </a>
      </div>
      {/*  <div className="foot2Copy">
        <p>
        <span className="spanCopy"></span>
        <CopyrightOutlined /> 2022 HenryHome, Inc
        <span className="spanCopy"></span>
        </p>
      </div> */}
    </div>
  );
}
