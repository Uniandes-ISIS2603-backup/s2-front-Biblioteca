/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class  Prestamo {
    /**
     * Se refiera a la fecha en la que se presta el libro
     */
    fechaDeSalida:String;
   
    /**
     * Se refiera a la fecha en la que se debe entregar el libro
     */
    fechaDeEntrega: String;
    
    /**
     * Se refiere a si el libro fue devuelto o no
     */ 
    retornado: boolean;
     
    /**
    * Se refiere al identificador de cada prestamo
    */
    id: number;
}

