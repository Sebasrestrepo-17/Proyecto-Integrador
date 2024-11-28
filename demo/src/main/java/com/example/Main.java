package com.example;
 import com.example.Entidad.Clientes; 
/* import com.example.Entidad.InmobiliariaSegura; */
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {

/*  public static void main(String[] args) {

     EntityManagerFactory emf = Persistence.createEntityManagerFactory("Inmobiliaria");
     EntityManager em = emf.createEntityManager();
     em.getTransaction().begin();


    // Crear y guardar una inmobiliaria
     InmobiliariaSegura inmobiliaria = new InmobiliariaSegura();
     inmobiliaria.setDireccion("Avenida 21  Apt 1024 Bello");
     inmobiliaria.setTipoPropiedad("Departamento");
     inmobiliaria.setPrecio("2.000.000.000");

       




     em.persist(inmobiliaria);
     em.getTransaction().commit();
     em.close();
     emf.close();
     System.out.println("Inmobiliaria guardada correctamente");
        

 }
} */
    
         public static void main(String[] args){

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Inmobiliaria");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();

        Clientes cliente = new Clientes();
        cliente.setNombre("Duvian Alvarez");
        cliente.setOcupacion("CEO Microsoft");
        cliente.setCorreo("Duvian5674@gmail.com");
        cliente.setTelefono("3207679435");

        em.persist(cliente);
        em.getTransaction().commit();
        em.close();
        emf.close();
        System.out.println("Cliente guardado correctamente");

    }

}
    
