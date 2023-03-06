'use strict'

        const form = document.querySelector('.needs-validation')
        const phone = document.getElementById('floatingPhone')
        const UserName = document.getElementById('floatingUsername')
        const email=document.getElementById("floatingInputEmail")
        const address=document.getElementById("floatingaddress")
        

        
        //check email validation using regex
        email.addEventListener("input",function(){
            checkInputValidation(/[[a-zA-Z]{1}\w*\.*\w+]*@{1}[a-zA-Z]+\.{1}[a-zA-Z]*$/,this)
        })

        //check phone validation using regex
        phone.addEventListener("input",function(){
            checkInputValidation(/(01)\d{9,9}$/,this)
            
        })

        
        
        //check form validation if success put data in localstorage and go to login page

        form.addEventListener('submit',function( event ) {
            checkAllInputValidation()
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.setAttribute("method","POST")
            form.setAttribute("action","welcome.html")
            form.classList.add('was-validated')
        }, false)

        function checkAllInputValidation(){
            checkInputValidation(/[[a-zA-Z]{1}\w*\.*\w+]*@{1}[a-zA-Z]+\.{1}[a-zA-Z]*$/,email)
            checkInputValidation(/(01)\d{9,9}$/,phone)
            
        }

        //check inputs validation using regex
        function checkInputValidation(regex,element){
            const reg=new RegExp(regex)
            
            if(!reg.test(element.value)){
                element.setCustomValidity("notValid")
            }else{
                element.setCustomValidity("")
            }
        }

