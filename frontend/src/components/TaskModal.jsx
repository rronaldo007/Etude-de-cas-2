import { useState } from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { modifierTache, supprimerTache } from '../api/taches'

function pourInputDate(echeance) {
  if (!echeance) return ''
  return new Date(echeance).toISOString().slice(0, 10)
}

export default function TaskModal({ tache, colonnes, onClose, onSaved, onDeleted }) {
  const [form, setForm] = useState({
    nom: tache.nom,
    colonneId: tache.colonneId,
    priorite: tache.priorite || 'Moyenne',
    couleur: tache.couleur,
    reference: tache.reference || '',
    quantite: tache.quantite || '',
    assigne: tache.assigne || '',
    echeance: pourInputDate(tache.echeance),
    description: tache.description || '',
  })
  const [erreur, setErreur] = useState(null)

  function set(champ, valeur) {
    setForm({ ...form, [champ]: valeur })
  }

  async function enregistrer(e) {
    e.preventDefault()
    try {
      await modifierTache(tache.id, {
        nom: form.nom,
        colonneId: Number(form.colonneId),
        priorite: form.priorite,
        couleur: form.couleur,
        reference: form.reference || undefined,
        quantite: form.quantite ? Number(form.quantite) : undefined,
        assigne: form.assigne || undefined,
        echeance: form.echeance || undefined,
        description: form.description || undefined,
      })
      onSaved()
    } catch (err) {
      setErreur(err.message)
    }
  }

  async function supprimer() {
    try {
      await supprimerTache(tache.id)
      onDeleted()
    } catch (err) {
      setErreur(err.message)
    }
  }

  return (
    <Modal show onHide={onClose} centered>
      <Form onSubmit={enregistrer}>
        <Modal.Header closeButton>
          <Modal.Title>Détail de la tâche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {erreur && <p className="text-danger">{erreur}</p>}
          <Form.Group className="mb-3">
            <Form.Label>Nom de la tâche *</Form.Label>
            <Form.Control value={form.nom} onChange={(e) => set('nom', e.target.value)} required />
          </Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Label>Colonne / Statut</Form.Label>
              <Form.Select value={form.colonneId} onChange={(e) => set('colonneId', e.target.value)}>
                {colonnes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.intitule}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Priorité</Form.Label>
              <Form.Select value={form.priorite} onChange={(e) => set('priorite', e.target.value)}>
                <option>Haute</option>
                <option>Moyenne</option>
                <option>Basse</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Couleur (hex RGB, sans #) *</Form.Label>
            <div className="d-flex align-items-center gap-2">
              <span
                className="kanban-swatch"
                style={{ width: 28, height: 28, backgroundColor: `#${form.couleur}` }}
              />
              <Form.Control value={form.couleur} onChange={(e) => set('couleur', e.target.value)} required />
            </div>
          </Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Label>Réf. pièce</Form.Label>
              <Form.Control value={form.reference} onChange={(e) => set('reference', e.target.value)} />
            </Col>
            <Col>
              <Form.Label>Quantité</Form.Label>
              <Form.Control
                type="number"
                value={form.quantite}
                onChange={(e) => set('quantite', e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Assigné à</Form.Label>
              <Form.Control value={form.assigne} onChange={(e) => set('assigne', e.target.value)} />
            </Col>
            <Col>
              <Form.Label>Échéance</Form.Label>
              <Form.Control
                type="date"
                value={form.echeance}
                onChange={(e) => set('echeance', e.target.value)}
              />
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="outline-danger" onClick={supprimer}>
            Supprimer
          </Button>
          <div className="d-flex gap-2">
            <Button variant="light" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" variant="primary">
              Enregistrer
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
