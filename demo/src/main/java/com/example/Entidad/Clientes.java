package com.example.Entidad;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;


 /* @Entity
 @Table(name = "propiedad")
 public class InmobiliariaSegura {
    
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

     @Column(name = "tipopropiedad")
     private String tipoPropiedad;

     @Column(name = "direccion")
     private String direccion;

     @Column(name = "precio")
     private String precio;

      // Getters y Setters
     public Long getId() {
         return id;
     }

     public void setId(Long id) {
         this.id = id;
     }

     public String getTipoPropiedad() {
         return tipoPropiedad; 
     }

     public void setTipoPropiedad(String tipoPropiedad) {
         this.tipoPropiedad = tipoPropiedad;
     }

     public String getDireccion() {
         return direccion;
     }

     public void setDireccion(String direccion) {
         this.direccion = direccion;
     }
    
     public String getPrecio() {
         return precio;
     }

     public void setPrecio(String precio){
         this.precio = precio;
     }
 } */

 @Entity
    @Table(name = "cliente")
public class Clientes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "ocupacion")
    private String ocupacion;

    @Column(name = "correo")
    private String correo;

    @Column(name = "telefono")
    private String telefono;
    

     //Getters y Setters

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getOcupacion() {
        return ocupacion;
    }

    public void setOcupacion(String ocupacion) {
        this.ocupacion = ocupacion;
    }

    public String getCorreo() {
        return correo;
    }   

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

   




} 

