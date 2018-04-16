/**
 * CustomHTTP Library with ES6 Fetch/Promise/Arrow Functions
 * Library for Making HTTP Requests using ES6 Syntax
 * @version 1.0.0
 * @author Selvakumar Murugesan
 * @license : MIT
 */

 class EasyHTTP {
    //Make HTTP GET Request using Fetch    
        // get(url) {
        //     fetch(url) 
        //       .then(res => res.json())
        //       .then(data => console.log(data))
        //       .catch(err => console.log(err));
        //     }      
        // }
 //Make HTTP GET Request using Promise/Fetch 
  get(url) {
      return new Promise((resolve,reject) => {
          fetch(url) 
            .then(res => res.json())
            .then(data=> resolve(data))
            .then(err=>reject(data));
          });               
  }
//Make HTTP POST Request using Promise/Fetch 
  post(url,data) {
    return new Promise((resolve,reject) => {
        fetch(url,{
          method:'POST',
          headers : {
            'Content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data=> resolve(data))
          .then(err=>reject(err));
        });       
    }

  //Make HTTP PUT Request using Promise/Fetch 
  put(url,data) {
    return new Promise((resolve,reject) => {
        fetch(url,{
          method:'PUT',
          headers : {
            'Content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data=> resolve(data))
          .then(err=>reject(err));
        });       
    } 

  //Make HTTP PUT Request using Promise/Fetch 
  delete(url) {
    return new Promise((resolve,reject) => {
        fetch(url,{
          method:'DELETE',
          headers : {
            'Content-type':'application/json'
          }          
        })
          .then(res => res.json())
          .then(data => resolve('Resource Deleted'))
          .then(err=>reject(err));
        });       
    } 
    
  }
    
     