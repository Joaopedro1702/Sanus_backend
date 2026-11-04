-- Execute uma vez no banco Sanus antes de habilitar o checkout online.
CREATE TABLE IF NOT EXISTS Tbl_Pedido_Online (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referencia CHAR(36) NOT NULL UNIQUE,
    id_Cliente INT NOT NULL,
    itens JSON NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    status VARCHAR(24) NOT NULL DEFAULT 'pending',
    forma_pagamento VARCHAR(40) NULL,
    mp_preference_id VARCHAR(100) NULL,
    mp_payment_id VARCHAR(100) NULL UNIQUE,
    criado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_pedido_online_cliente
        FOREIGN KEY (id_Cliente) REFERENCES Tbl_Cliente(id)
);
