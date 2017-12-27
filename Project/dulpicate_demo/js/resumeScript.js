		  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
      
       
        fields: {
            school_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your school name'
                    }
                }
            },
             
            
            slocation: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your location'
                    },
                    Location: {
                        message: 'Please supply a valid location'
                    }
                }
            },
            syear: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your year of passing'
                    },
                    year: {                      
                        message: 'Please supply a vaild year'
                    }
                }
            },
            spercent: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please supply your percentage'
                    },
                    percent: {
                        message: 'Please supply a valid percentage'
                    }
                }
            },
		}
			
			 })
        
});
			 $(document).ready(function() {
    $('#contact_form1').bootstrapValidator({
      
       
        fields: {
			
            institute_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your institute name'
                    }
                }
            },
             
            
            hlocation: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your location'
                    },
                    Location: {
                        message: 'Please supply a valid location'
                    }
                }
            },
            hyear: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your year of passing'
                    },
                    year: {                      
                        message: 'Please supply a vaild year'
                    }
                }
            },
            hpercent: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please supply your percentage'
                    },
                    percent: {
                        message: 'Please supply a valid percentage'
                    }
                }
            },
            strm: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a stream'
                    }
                }
            },
		  }
			
			   })
        
});
 $(document).ready(function() {
    $('#contact_form2').bootstrapValidator({
      
       
        fields: {
            ucollege_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your college name'
                    }
                }
            },
             
            
            ulocation: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your location'
                    },
                    Location: {
                        message: 'Please supply a valid location'
                    }
                }
            },
            uyear: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your year of passing'
                    },
                    year: {                      
                        message: 'Please supply a vaild year'
                    }
                }
            },
            upercent: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please supply your percentage'
                    },
                    percent: {
                        message: 'Please supply a valid percentage'
                    }
                }
            },
			 udegree: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a degree'
                    }
                }
            },
			 uspecification: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a specification'
                    }
                }
            },
			}
			
			   })
        
});
 $(document).ready(function() {
    $('#contact_form3').bootstrapValidator({
      
       
        fields: {
			pcollege_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your college name'
                    }
                }
            },
             
            
            plocation: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your location'
                    },
                    Location: {
                        message: 'Please supply a valid location'
                    }
                }
            },
            pyear: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your year of passing'
                    },
                    year: {                      
                        message: 'Please supply a vaild year'
                    }
                }
            },
            ppercent: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please supply your percentage'
                    },
                    percent: {
                        message: 'Please supply a valid percentage'
                    }
                }
            },
			 pdegree: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a degree'
                    }
                }
            },
			 pspecification: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a specification'
                    }
                }
            },
			}
			
			   })
        
});
 $(document).ready(function() {
    $('#contact_form4').bootstrapValidator({
      
       
        fields: {
           certname: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your college name'
                    }
                }
            },
			}
			
			   })
        
});
 $(document).ready(function() {
    $('#contact_form5').bootstrapValidator({
      
       
        fields: {
			techskills: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please choose your technical skills'
                    }
                }
            },
            }
        })
        
});

