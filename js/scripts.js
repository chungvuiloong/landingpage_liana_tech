
          // Get the modal
          const modal = document.getElementById("myModal");
          const modal_content = document.getElementsByClassName("modal-content");
          const email_filter =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let message_email_input = document.querySelector("#wrong_email_input");

          // Get the button that opens the modal
          const btn = document.getElementById("subscribe_button");

          // Get the <span> element that closes the modal
          const span = document.getElementsByClassName("close")[0];

        // Check email for @ and .

        let email_input_value = document.querySelector("#email_input").value;
        let email_input = document.querySelector("#email_input");

        email_verification = () => {
            let email_input_value = document.querySelector("#email_input").value;
            let email_input = document.querySelector("#email_input");

            if (email_input_value.match(email_filter)) {
                wrong_email_input.innerHTML = ""
                email_input.setAttribute("class", "form-subscribe_valid");
            }
        };

        function sweet () {
          let email_input = document.querySelector("#email_input");
          if (email_input.value.match(email_filter)) {

            Swal.fire({
              icon: 'success',
              title: 'Thank you for registering to our newsletter',
              showConfirmButton: false,
              timer: 1500
            })
            email_input.value = "";
              email_input.setAttribute("class", "form-subscribe");
          }
        };