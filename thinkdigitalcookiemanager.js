document.addEventListener('DOMContentLoaded', function() {
    // HTML-Struktur hinzufügen
    var panelHtml = `
    <div id="cookieConsentPanel">
    <h2>Diese Seite verwendet Cookies</h2>
    <div id="firstParagraph">
    <p>
      Wir setzen standardmäßig nur solche Cookies ein, die für das ordnungsgemäße Funktionieren unserer Webseite unerlässlich sind. Durch Klicken auf „Alle akzeptieren“ stimmen Sie der Verwendung von zielgerichteten Cookies zu, die für Analysezwecke eingesetzt werden und Ihnen relevante Inhalte präsentieren. Darüber hinaus nutzen wir weitere Cookies für Marketing- und Optimierungsziele, um Ihnen ein optimales Online-Erlebnis zu bieten. Hierbei verarbeiten wir gemeinsam mit ausgewählten Partnern technische personenbezogene Daten. Details zu unseren Partnern und umfassende Informationen zu den eingesetzten Cookies finden Sie in unserer Datenschutzerklärung. Ihre Präferenzen bezüglich Cookies können Sie jederzeit unter „Einstellungen“ anpassen.

      Bitte beachten Sie zudem, dass wir auch Cookies von Unternehmen aus den USA verwenden, die nicht dem Datenschutzabkommen zwischen der EU und den USA unterliegen. Durch Ihre Zustimmung zur Verwendung von Cookies können Ihre Daten an diese US-Unternehmen weitergegeben werden, bei denen ein nach EU-Datenschutzrecht adäquater Schutz Ihrer Daten nicht gewährleistet ist. Ihre datenschutzrechtlichen Rechte können dabei stark eingeschränkt sein, und unter Umständen haben auch US-Behörden Zugriff auf Ihre Daten.
    </p>
    <!-- Cookie-Auswahleinstellungen, versteckt bis "Einstellungen" geklickt wird -->
    <div id="cookieSettingsPanel" style="display: none">
      <table>
        <tr>
          <td>
            <label>
              <input type="checkbox" id="selectAll" /> Alle auswählen
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input
                type="checkbox"
                class="cookieOption"
                value="zielorientierte"
              />
              Zielorientierte Cookies
            </label>
          </td>
          <td>
            <button
              id="zielorientierteDetailsButton"
              aria-label="Mehr Informationen"
            >
              <i class="fas fa-info-circle"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div id="zielorientierteDetails" style="display: none">
              Erforderlich für das Tracking und die Optimierung der Website. Durch das Server-seitige Tracking werden keine personenbezogenen Daten an Dritte weitergegeben.
              
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" class="cookieOption" value="externe" />
              Externe Inhalte
            </label>
          </td>
          <td>
            <button id="externeDetailsButton" aria-label="Mehr Informationen">
              <i class="fas fa-info-circle"></i>
            </button>
            
          </td>
        </tr>
        <tr>
          <td>
            <div id="externeDetails" style="display: none">
              Notwendig für das Laden von Videos, Infografiken, PDF-Katalogen, Social-Media-Beiträgen und Podcasts direkt von den jeweiligen Anbietern. Dabei tauscht Ihr Browser personenbezogene technische Daten mit diesen Netzwerken aus. Daten können unter anderem an folgende Anbieter weitergegeben werden: Youtube, Google, 23. Grad, Cambuildr, Datawrapper, Flourish, Infogram, Instagram, Issuu, Juicer.io, Letscast.fm, Mailworx, Pinpoll, Podigee.io, Power BI, Twitter, Walls.io, Slido und Typeform, einschließlich solcher aus den USA, die sich nicht dem EU-USA Datenschutzabkommen angeschlossen haben.
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" class="cookieOption" value="marketing" />
              Marketing Cookies
            </label>
          </td>
          <td>
            <button
              id="marketingDetailsButton"
              aria-label="Mehr Informationen"
            >
              <i class="fas fa-info-circle"></i>
            </button>
            
          </td>
        </tr>
        <tr>
          <td>
            <div id="marketingDetails" style="display: none">
              Marketing-Cookies werden verwendet, um das Surfverhalten der Nutzer zu verfolgen und personalisierte Werbung auf Basis dieser Daten zu schalten.
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>

    <br />

    <div id="buttonArea">
      <table align="center">
        <tr>
          <td>
            <button id="acceptAll">Alle akzeptieren</button>
          </td>
          <td>
            <button id="settings">Einstellungen</button>
          </td>
          <td>
            <button id="declineAll">Alle ablehnen</button>
          </td>
        </tr>
      </table>
    </div>
  </div>    
    `;
    document.body.insertAdjacentHTML('beforeend', panelHtml);

    // CSS hinzufügen
    var css = `
    #cookieConsentPanel {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 100%;
        background-color: #ffffff;
        border: 1px solid #000;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        z-index: 10000; /* Hoch genug, um über anderen Elementen zu stehen */
        max-width: 500px; /* oder die gewünschte Breite */
        max-height: 400px; /* Setzt die maximale Höhe des Panels */
      }
    
      #cookieConsentPanel h2 {
        margin: 0 0 10px 0;
        font-size: 18px;
      }
    
      /* Hinzugefügte Stile für Buttons */
      #cookieConsentPanel button {
        left: 50%;
        background-color: #007bff; /* Blauer Hintergrund */
        color: #ffffff; /* Weiße Schrift */
        border: none; /* Keine Rahmenlinie */
        padding: 10px 20px; /* Innenabstand */
        border-radius: 5px; /* Abgerundete Ecken */
        cursor: pointer; /* Mauszeiger als Finger */
        outline: none; /* Entfernt den Fokus-Rahmen */
        margin-bottom: 10px;
      }
    
      /* Hover-Effekt für Buttons */
      #cookieConsentPanel button:hover {
        background-color: #0056b3; /* Dunklerer Blauton beim Überfahren */
      }
    
      #cookieConsentPanel button:last-child {
        margin-bottom: 0;
      }
    
      #cookieSettingsPanel {
        margin-bottom: 20px;
      }
    
      #cookieSettingsPanel label,
      #cookieSettingsPanel button,
      #marketingDetailsButton {
        background-color: transparent;
        border: none;
        color: black; /* Für Font Awesome Icon */
        cursor: pointer;
        padding: 0;
      }
    
      /* Stil für das SVG-Icon */
      #marketingDetailsButton img {
        height: 20px; /* Oder die gewünschte Größe */
        width: 20px; /* Oder die gewünschte Größe */
      }
    
      #firstParagraph {
        max-height: 200px; /* Setzt die maximale Höhe des Panels */
        overflow-y: auto;
      }
    `;
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);

    document
        .getElementById("marketingDetailsButton")
        .addEventListener("click", function () {
          var marketingDetails = document.getElementById("marketingDetails");
          var isDisplayed = marketingDetails.style.display === "block";
          marketingDetails.style.display = isDisplayed ? "none" : "block"; // Wechselt die Anzeige
        });

      document
        .getElementById("externeDetailsButton")
        .addEventListener("click", function () {
          var marketingDetails = document.getElementById("externeDetails");
          var isDisplayed = marketingDetails.style.display === "block";
          marketingDetails.style.display = isDisplayed ? "none" : "block"; // Wechselt die Anzeige
        });

      document
        .getElementById("zielorientierteDetailsButton")
        .addEventListener("click", function () {
          var marketingDetails = document.getElementById(
            "zielorientierteDetails"
          );
          var isDisplayed = marketingDetails.style.display === "block";
          marketingDetails.style.display = isDisplayed ? "none" : "block"; // Wechselt die Anzeige
        });
      document
        .getElementById("selectAll")
        .addEventListener("change", function () {
          var checkboxes = document.querySelectorAll(".cookieOption");
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
          });
        });

      document.querySelectorAll(".cookieOption").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          var allChecked = Array.from(
            document.querySelectorAll(".cookieOption")
          ).every((c) => c.checked);
          document.getElementById("selectAll").checked = allChecked;
        });
      });

      function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      document
        .getElementById("settings")
        .addEventListener("click", function () {
          // Zeige oder verstecke das Panel mit den Cookie-Auswahl-Optionen
          var settingsPanel = document.getElementById("cookieSettingsPanel");
          var buttonArea = document.getElementById("buttonArea");
          if (settingsPanel.style.display === "none") {
            settingsPanel.style.display = "block";
            this.textContent = "Einstellungen speichern";
          } else {
            // Hier sollten die gewählten Cookie-Optionen gespeichert werden
            var selectedOptions = {};
            document
              .querySelectorAll(".cookieOption")
              .forEach(function (checkbox) {
                selectedOptions[checkbox.value] = checkbox.checked;
              });
            // Speichere die ausgewählten Optionen in einem Cookie oder über eine Serveranfrage
            console.log(selectedOptions); // Ersetze dies durch die tatsächliche Speicherlogik

            saveCookieSettings();

            settingsPanel.style.display = "none";
            this.textContent = "Einstellungen";
            document.getElementById("cookieConsentPanel").style.display =
              "none";
          }
        });

      // Event-Listener für den "Alle akzeptieren"-Button
      document
        .getElementById("acceptAll")
        .addEventListener("click", function () {
          // Logik zum Setzen des Cookies mit allen akzeptierten Optionen
          document.getElementById("selectAll").checked = true;
          var selectedOptions = {};
          document
            .querySelectorAll(".cookieOption")
            .forEach(function (checkbox) {
              checkbox.checked = true;
              selectedOptions[checkbox.value] = checkbox.checked;
            });

          console.log(selectedOptions);

          saveCookieSettings();

          document.getElementById("cookieConsentPanel").style.display = "none";
        });

      // Event-Listener für den "Alle ablehnen"-Button
      document
        .getElementById("declineAll")
        .addEventListener("click", function () {
          // Logik zum Setzen des Cookies mit allen abgelehnten Optionen
          document.getElementById("selectAll").checked = false;
          var selectedOptions = {};
          document
            .querySelectorAll(".cookieOption")
            .forEach(function (checkbox) {
              checkbox.checked = false;
              selectedOptions[checkbox.value] = checkbox.checked;
            });

          console.log(selectedOptions); // Ersetze dies durch die tatsächliche Speicherlogik

          saveCookieSettings();

          document.getElementById("cookieConsentPanel").style.display = "none";
        });

      function checkCookieConsent() {
        // Überprüft, ob ein Cookie mit dem Namen 'user_consent' bereits gesetzt ist
        console.log(getCookie("user_preferences"));
        if (getCookie("user_preferences")) {
          // Der Cookie existiert, daher muss das Panel nicht angezeigt werden
          document.getElementById("cookieConsentPanel").style.display = "none";
        } else {
          // Der Cookie existiert nicht, das Panel wird angezeigt
          document.getElementById("cookieConsentPanel").style.display = "block";
        }
      }

      // Überprüfung der Cookie-Zustimmung, wenn das Dokument geladen wird
      document.addEventListener("DOMContentLoaded", function () {
        checkCookieConsent();
      });

      // Funktion zum Setzen von Cookies
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
        }
        console.log(name + "=" + (value || "") + expires + "; path=/");
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      // Funktion zum Sammeln der ausgewählten Optionen und Speichern im Cookie
      function saveCookieSettings() {
        var selectedOptions = {
          zielorientierte: document.querySelector(
            '.cookieOption[value="zielorientierte"]'
          ).checked,
          externe: document.querySelector('.cookieOption[value="externe"]')
            .checked,
          marketing: document.querySelector('.cookieOption[value="marketing"]')
            .checked,
        };

        // Umwandlung des Objekts in einen JSON-String
        var cookieValue = JSON.stringify(selectedOptions);

        // Setzen des Cookies mit dem JSON-String als Wert
        setCookie("user_preferences", cookieValue, 365); // Gültig für 365 Tage
      }
});
