import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier',
  standalone: true,
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  imports: [CommonModule],
})
export class SupplierComponent {
  suppliers = [
    {
      supplier_id: 1,
      name: 'Proveedor A',
      phone: '123-456-789',
      email: 'a@proveedor.com',
      rubro: 'Tecnología', // Rubro específico
    },
    {
      supplier_id: 2,
      name: 'Proveedor B',
      phone: '987-654-321',
      email: 'b@proveedor.com',
      rubro: 'Alimentos', // Otro rubro
    },
  ];

  addSupplier() {
    const newSupplier = {
      supplier_id: this.suppliers.length + 1,
      name: `Proveedor ${String.fromCharCode(65 + this.suppliers.length)}`,
      phone: '111-222-333',
      email: `nuevo${this.suppliers.length}@proveedor.com`,
      rubro: 'General', // Valor predeterminado para el rubro
    };
    this.suppliers.push(newSupplier);
    alert(`Proveedor agregado: ${newSupplier.name}`);
  }

  editSupplier(supplier: {
    supplier_id: number;
    name: string;
    phone: string;
    email: string;
    rubro: string;
  }) {
    alert(`Editar proveedor: ${supplier.name}`);
    // Aquí puedes agregar lógica para abrir un modal o formulario de edición
  }

  deleteSupplier(supplierId: number) {
    this.suppliers = this.suppliers.filter(
      (supplier) => supplier.supplier_id !== supplierId
    );
  }
}
