// This is for loading the chosen javascript game from the general html


      function loadScript(scriptName) {
        const existingScripts = document.getElementsByTagName("script");
        for (let i = 0; i < existingScripts.length; i++) {
          if (
            existingScripts[i].getAttribute("src") !== null &&
            existingScripts[i].getAttribute("src") === scriptName
          ) {
            return;
          }
        }

        const scriptElement = document.createElement("script");
        scriptElement.src = scriptName;
        scriptElement.async = true;

        document.body.appendChild(scriptElement);
      }
