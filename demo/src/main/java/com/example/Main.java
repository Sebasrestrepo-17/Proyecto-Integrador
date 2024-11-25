package com.example;
/* import com.example.Entidad.Clientes; */
import com.example.Entidad.InmobiliariaSegura;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {

 public static void main(String[] args) {

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
}
    
       /*  public static void main(String[] args){

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("Inmobiliaria");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();

        Clientes cliente = new Clientes();
        cliente.setNombre("Camilo Gonzales");
        cliente.setOcupacion("Ejecutivo en Colanta");
        cliente.setCorreo("camigonza123@gmail.com");
        cliente.setTelefono("3007579135");

        em.persist(cliente);
        em.getTransaction().commit();
        em.close();
        emf.close();
        System.out.println("Cliente guardado correctamente");

    }

}
    */
