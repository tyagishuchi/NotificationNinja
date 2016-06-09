function add_to_cart(clicked_element, product_id){
//    if(clicked_element!=null)
//          if(clicked_element.text() == 'Added to cart'){
//          return;}
//         else{
//              clicked_element.text("Added to Cart");
//          }
        var current = clicked_element;

        var data = {action: 'add_to_cart', product_id: product_id};
        var emp_code = $('#emp_code').val();
       var request =  $.ajax({type:'post',
                data:data,
                url: location.protocol+'//'+location.host+'/employee/'+emp_code+'/shop/marketplace/cart/'});

        request.done(function(response,textStatus,jqXHR){
//            console.log('products added to cart ');

        if(response['status']!=200){
            alert(response['error_msg']);
        }
            else{
            if(clicked_element!=null){
                alert("Added to cart");
                clicked_element.find('.icon-cart1').switchClass('.icon-cart1', 'icon-cart1-orange');

//            current.text('Added to cart');
//            current.on('click',function(){
////                alert("Already added to cart");
//                return false;
//            });
            }

        }

        });

        request.fail(function(jqXHR,textStatus,errorThrown){
            alert('error');
            console.error(
                "The following error occured: "+
                    textStatus, errorThrown
            );
        });

}

function change_wishlist(clicked_element, data){
        var current = null;
        if(clicked_element!=null)
          current = clicked_element;
        var emp_code = $('#emp_code').val();
       var request =  $.ajax({type:'post',
                data:data,
                url: location.protocol+'//'+location.host+'/employee/'+emp_code+'/shop/marketplace/wishlist/'
       });

        request.done(function(response,textStatus,jqXHR){
            console.log('products added to wishlist ');

        if(response['status']!=200){
            alert(response['error_msg']);
        }
            else{
                if(clicked_element!=null){
//            current.text('Added to wishlist');
                    alert(response.alert_msg);
//                    alert("Added to wishlist");
//              $(clicked_element).find('.icon-add-to-wishlist').switchClass('.icon-add-to-wishlist', '.icon-add-to-wishlist-orange');

//                        current.on('click',function(){
//                            current.find('.icon-add-to-wishist').switchClass('.icon-add-to-wishlist', '.icon-add-to-wishlist-orange');
//                return false;
//            });
                }
        }
        });
        request.fail(function(jqXHR,textStatus,errorThrown){
            alert('error');
            console.error(
                "The following error occured: "+
                    textStatus, errorThrown
            );
        });
}


function like_item(item_id, type, callback, employee_id){
var ajax_object = {};
    var emp_code = '';
    if(typeof employee_id !='undefined')
    emp_code = employee_id;
    else
    emp_code = get_employee_code();
    ajax_object.url = '/employee/'+emp_code+'/social-info/news-feed/';
    if(typeof type=='undefined')
    type='like';
    ajax_object.data = {item_id: item_id, type: 'like_item', like_action:type};
    ajax_object.type='post';
    if(typeof callback == 'undefined')
    ajax_object.done_callback = function(response){
        alert(response.alert_msg);
    };
    else{
        ajax_object.done_callback = callback;
    }
    do_ajax(ajax_object);
}



