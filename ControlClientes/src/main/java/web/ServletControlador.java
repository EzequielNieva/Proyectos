package web;

import datos.ClienteDaoJDBC;
import dominio.Cliente;
import java.io.IOException;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/ServletControlador")
public class ServletControlador extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String accion = request.getParameter("accion");
        if (accion != null) {
            switch (accion) {
                case "editar":
                    this.editarCliente(request, response);
                    break;
                case "eliminar":
                    this.eliminarCliente(request,response);
                    break;
                default:
                    this.accionDefault(request, response);
            }
        } else {
            this.accionDefault(request, response);
        }
    }

    private void accionDefault(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Cliente> clientes = new ClienteDaoJDBC().listar();
        System.out.println("clientes = " + clientes);
        HttpSession sesion = request.getSession();
        sesion.setAttribute("clientes", clientes);
        sesion.setAttribute("totalClientes", clientes.size());
        sesion.setAttribute("saldoTotal", this.calcularSaldoTotal(clientes));
        //request.getRequestDispatcher("clientes.jsp").forward(request, response);
        response.sendRedirect("clientes.jsp");
    }

    private double calcularSaldoTotal(List<Cliente> clientes) {
        double saldoTotal = 0;
        for (Cliente cliente : clientes) {
            saldoTotal += cliente.getSaldo();
        }
        return saldoTotal;
    }
    
    private void editarCliente(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //recuperamos el idCliente
        int id_cliente = Integer.parseInt(request.getParameter("id_cliente"));
        Cliente cliente = new ClienteDaoJDBC().encontrar(new Cliente(id_cliente));
        request.setAttribute("cliente", cliente);
        String jspEditar = "/WEB-INF/paginas/cliente/editarCliente.jsp";
        request.getRequestDispatcher(jspEditar).forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String accion = request.getParameter("accion");
        if (accion != null) {
            switch (accion) {
                case "insertar":
                    this.insertarCliente(request, response);
                    break;
                case "modificar":
                    this.modificarCliente(request,response);
                    break;
                default:
                    this.accionDefault(request, response);
            }
        } else {
            this.accionDefault(request, response);
        }
    }

    private void insertarCliente(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //recuperamos los valores del formulario agregarCliente
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String email = request.getParameter("email");
        String telefono = request.getParameter("telefono");
        double saldo = 0;
        String saldoString = request.getParameter("saldo");
        if (saldoString != null && !"".equals(saldoString)) {
            saldo = Double.parseDouble(saldoString);
        }
        //Creamos el objeto de cliente (modelo)
        Cliente cliente = new Cliente(nombre, apellido, email, telefono, saldo);
        //Insertamos en la base de datos
        int registroModificados = new ClienteDaoJDBC().insertar(cliente);
        System.out.println("registroModificados = " + registroModificados);

        //Redirigimos hacia la accion por default
        this.accionDefault(request, response);
    }
    
     private void modificarCliente(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //recuperamos los valores del formulario editarCliente
        int id_cliente = Integer.parseInt(request.getParameter("id_cliente"));
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String email = request.getParameter("email");
        String telefono = request.getParameter("telefono");
        double saldo = 0;
        String saldoString = request.getParameter("saldo");
        if (saldoString != null && !"".equals(saldoString)) {
            saldo = Double.parseDouble(saldoString);
        }
        //Creamos el objeto de cliente (modelo)
        Cliente cliente = new Cliente(id_cliente, nombre, apellido, email, telefono, saldo);
        //Modificar el objeto base de datos
        int registroModificados = new ClienteDaoJDBC().actualizar(cliente);
        System.out.println("registroModificados = " + registroModificados);

        //Redirigimos hacia la accion por default
        this.accionDefault(request, response);
    }

      private void eliminarCliente(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //recuperamos los valores del formulario editarCliente
        int id_cliente = Integer.parseInt(request.getParameter("id_cliente"));
        
        //Creamos el objeto de cliente (modelo)
        Cliente cliente = new Cliente(id_cliente);
        
        //Eliminar el objeto base de datos
        int registroModificados = new ClienteDaoJDBC().eliminar(cliente);
        System.out.println("registroModificados = " + registroModificados);

        //Redirigimos hacia la accion por default
        this.accionDefault(request, response);
    }
}
