// const Fname = document.getElementById("fname");
// const Lname = document.getElementById("lname");
// const TaxID = document.getElementById("TaxId")
// let userData = {
//     fname: false,
//     lname: false,
// }

let data = {}

handleBlur = (id) => {
    const fields = document.getElementById(id)
    const fieldsName = fields.name
    console.log(fieldsName)
    const fieldsValue = fields.value.trim()
    if (id === 'TaxId' || id === 'ConfirmTaxId') {
        if (fieldsValue === '') {
            setErrorFor(fields, `${fieldsName} cannt be blank`)
        } else if (isNaN(fieldsValue)) {
            console.log("not number")
            setErrorFor(fields, `${fieldsName}  can only be in number `)
        }
        else if (fieldsValue.length > 9) {
            setErrorFor(fields, `${fieldsName} length should be smaller than 9 `)
        }
        else {
            setSuccessFor(fields)
            data[`${id}`] = true
        }
    }
    else if (id === 'mName') {
        if (fieldsValue === '') { }
        else {
            setSuccessFor(fields)
        }
    }
    else {
        if (fieldsValue === '') {
            setErrorFor(fields, `${fieldsName}  cannt be blank`)
        } else if (fieldsValue.length > 15) {
            setErrorFor(fields, `${fieldsName} length should be smaller than 15 `)
        }
        else {
            setSuccessFor(fields)

            data[`${id}`] = true
        }
    }
    // console.log(data)
    if (data.First && data.Last && data.TaxId && data.ConfirmTaxId && data.DOB && data.MMN) {
        document.getElementById("btn").disabled = false;
        btn.classList.add("btnClass")
    }
}

setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control-error';
    small.innerText = message
    input.classList.add("borderRed")
}
setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    input.classList.add("borderGreen")
}



// const errorElement = document.getElementById("error")
// fistNameHandle = () => {
//     // let messages = []
//     // if (Fname.value == '' || Fname.value == null) {
//     // messages.push('Name is required')
//     //     Fname.classList.add("borderRed");

//     // }
//     // if (messages.length > 0) {
//     //     errorElement.innerText = messages.join(',')
//     // }
//     // else {
//     //     Fname.classList.add("borderGreen")
//     // document.getElementById("btn").disabled = false;
//     // userData.push(Fname.value);
//     // console.log("user Data: " + userData)
//     //     userData.fname = true
//     // }
//     // if (Lname.value == '' || Lname.value == null) {
//     // messages.push('Last Name is required')
//     //     Lname.classList.add("borderRed");
//     // }

//     // else {
//     //     Lname.classList.add("borderGreen")
//     // userData.push(Lname.value);
//     // console.log("user Data: " + userData)
//     //     userData.lname = true
//     // }


//     const FnameValue = Fname.value.trim()
//     if (FnameValue === '') {
//         setErrorFor(Fname, 'username cannt be blank')
//     } else if (FnameValue.length > 15) {
//         setErrorFor(Fname, 'First Name length should be smaller than 15 ')
//     }
//     else {
//         setSuccessFor(Fname)
//         userData.fname = true
//     }

// }
// lastNameHandle = () => {
//     const LnameValue = Lname.value.trim()
//     if (LnameValue === '') {
//         setErrorFor(Lname, 'last name cannt be blank')
//     } else {
//         setSuccessFor(Lname)
//         userData.lname = true
//     }
// }
// taxIDHandle = () => {
//     const TaxIDValue = TaxID.value.trim()
//     if (TaxIDValue === '') {
//         setErrorFor(TaxID, 'Tax Id cannt be blank')
//     } else if (isNaN(TaxIDValue)) {
//         setErrorFor(TaxID, 'Tax id can only be in number')
//     }
//     else {
//         setSuccessFor(TaxID)
//         userData.TaxId = true
//         if (userData.fname && userData.lname && userData.TaxId) {
//             document.getElementById("btn").disabled = false;
//         }
//     }

// }