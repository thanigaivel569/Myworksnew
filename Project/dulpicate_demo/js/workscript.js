		  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
      
       
        fields: {
            cdesign_name: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your designation name'
                    }
                }
            },
             
            
            cdjoin: {
                validators: {
                    notEmpty: {
                        message: 'Please supply a date of joining'
                    },
                    Location: {
                        message: 'Please supply a date of joining'
                    }
                }
            },
             cd_name: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a domain'
                    }
                }
            },
           
		}
			
			 })
        
});
			 $(document).ready(function() {
    $('#contact_form1').bootstrapValidator({
      
       
        fields: {
			
            comname: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your company name'
                    }
                }
            },
             
            
            pdesign_name: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your desination'
                    },
                    Location: {
                        message: 'Please supply a valid designation'
                    }
                }
            },
            pfrom: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a from date'
                    },
                    year: {                      
                        message: 'Please supply a vaild from date'
                    }
                }
            },
            pto: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please choose a from date'
                    },
                    percent: {
                        message: 'Please supply a vaild from date'
                    }
                }
            },
            pd_name: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a domain'
                    }
                }
            },
			pdetail: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your project deatils'
                    },
                    Location: {
                        message: 'Please supply a valid project detail'
                    }
                }
            },
		  }
			
			   })
        
});
 $(document).ready(function() {
    $('#contact_form2').bootstrapValidator({
      
       
        fields: {
			
            comname1: {
                validators: {
                        stringLength: {
                        min: 3,
                    },
                        notEmpty: {
                        message: 'Please supply your company name'
                    }
                }
            },
             
            
            pdesign_name1: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your desination'
                    },
                    Location: {
                        message: 'Please supply a valid designation'
                    }
                }
            },
            pfrom1: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a from date'
                    },
                    year: {                      
                        message: 'Please supply a vaild from date'
                    }
                }
            },
            pto1: {
                validators: {
                     stringLength: {
                        min: 2,
						max:4,
						message: 'Please choose a from date'
                    },
                    percent: {
                        message: 'Please supply a vaild from date'
                    }
                }
            },
			pdetail1: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your project deatils'
                    },
                    Location: {
                        message: 'Please supply a valid project detail'
                    }
                }
            },
            pd_name1: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a domain'
                    }
                }
            },
		  }
			
			   })
        
});
 
