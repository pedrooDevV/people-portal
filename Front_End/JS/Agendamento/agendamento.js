document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consulta-form");
  const campoCPF = document.getElementById("cpf-paciente");
  const campoTelefone = document.getElementById("telefone");
  const campoNome = document.getElementById("nome-paciente");
  const modal = document.getElementById('modal-alerta');

  
  const cpfPaciente = localStorage.getItem('cpf');
  if (campoCPF && cpfPaciente) {
    campoCPF.value = cpfPaciente;
  }

  if (campoCPF) {
    campoCPF.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }

  if (campoTelefone) {
    campoTelefone.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }

  if (campoNome) {
    campoNome.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cpf = document.getElementById("cpf-paciente").value;
    const data = document.getElementById("data").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const especialidade = document.getElementById("especialidade").value;
    const horario = document.getElementById("horario").value;

    if ( !cpf || !data || !telefone || !email || !especialidade || !horario) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dados = {
      cpfPaciente: cpf,
      data: data,
      telefone: telefone,
      email: email,
      especificacaoMedico: especialidade,
      hora: horario + ":00"
    };

    fetch('http://localhost:8080/consulta/agendar-consulta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then(async response => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.erro || 'Erro ao agendar consulta');
        }
        return response.text();
      })
      .then(data => {
        modal.classList.remove('hidden');
        limparFormulario();
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  });

  function limparFormulario() {
    form.reset();
    if (campoCPF && cpfPaciente) {
      campoCPF.value = cpfPaciente;
    }
  }

    window.fecharModal = function () {
    modal.classList.add('hidden');
    limparFormulario();
  }
});


const cpfInput = document.getElementById('cpf-paciente');

  cpfInput.addEventListener('input', function () {
    let value = cpfInput.value;
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    cpfInput.value = value;
  });

  