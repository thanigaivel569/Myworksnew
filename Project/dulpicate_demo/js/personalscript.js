  $(document).ready(function() {
   $('#contact_form').bootstrapValidator({
     
      
       fields: {
           first_name: {
               validators: {
                       stringLength: {
                       min: 3,
                   },
                       notEmpty: {
                       message: 'Please supply your full name'
                   }
               }
           },
		   
		   father_name: {
               validators: {
                       stringLength: {
                       min: 3,
                   },
                       notEmpty: {
                       message: 'Please supply your father name'
                   }
               }
           },
		   
		    mother_name: {
               validators: {
                       stringLength: {
                       min: 3,
                   },
                       notEmpty: {
                       message: 'Please supply your mother name'
                   }
               }
           },
		   
		   d_OB: {
               validators: {
                       stringLength: {
                       min: 3,
                   },
                       notEmpty: {
                       message: 'Please choose the date'
                   }
               }
           },
            
           
           E_mail: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your email address'
                   },
                   emailAddress: {
                       message: 'Please supply a valid email address'
                   }
               }
           },
           phone_number: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your phone number'
                   },
                   phone: {
                       country: 'Us',
                       message: 'Please supply a vaild phone number '
                   }
               }
           },
		   
		     m_status: {
               validators: {
                       stringLength: {
                       min: 3,
                   },
                       notEmpty: {
                       message: 'Please supply your marital status'
                   }
               }
           },
		   
           address_name: {
               validators: {
                    stringLength: {
                       min: 8,
                   },
                   notEmpty: {
                       message: 'Please supply your  Door No &street Name'
                   }
               }
           },
		   
           city_name: {
               validators: {
                    stringLength: {
                       min: 4,
                   },
                   notEmpty: {
                       message: 'Please supply your city'
                   }
               }
           },
           state_name: {
               validators: {
                   notEmpty: {
                       message: 'Please select your state'
                   }
               }
           },
           zip_code: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your zip code'
                   },
                   zipCode: {
                       country: 'us',
                       message: 'Please supply a vaild zip code'
                   }
               }
           },
           
           }
       })
       
});

