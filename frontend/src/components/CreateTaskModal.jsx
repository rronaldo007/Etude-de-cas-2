import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { creerTache } from '../api/taches'
import ColorPicker from './ColorPicker'

export default function CreateTaskModal({ show, onClose, onCreated }) {
  const [nom, setNom] = useState('')
  const [couleur, setCouleur] = useState('3498DB')
  const [erreur, setErreur] = useState(null)

  async function envoyer(e) {
    e.preventDefault()
    try {
      await creerTache({ nom, couleur })
      setNom('')
      setCouleur('3498DB')
      setErreur(null)
      onCreated()
    } catch (err) {
      setErreur(err.message)
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Form onSubmit={envoyer}>
        <Modal.Header closeButton>
          <Modal.Title>Créer une tâche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {erreur && <p className="text-danger">{erreur}</p>}
          <Form.Group className="mb-3">
            <Form.Label>Nom de la tâche *</Form.Label>
            <Form.Control
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Ex. : Moule A12"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Couleur de la tâche</Form.Label>
            <ColorPicker value={couleur} onChange={setCouleur} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Colonne de destination</Form.Label>
            <Form.Control value="À Faire (assignée automatiquement)" disabled />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onClose}>
            Annuler
          </Button>
          <Button type="submit" variant="primary">
            + Créer la tâche
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
