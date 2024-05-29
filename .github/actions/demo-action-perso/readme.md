markdown
# My Custom Action

Cette action GitHub dit bonjour à l'utilisateur.

## Inputs

### `my-input`

**Required** Une entrée personnalisée. Par défaut `"world"`.

## Outputs

### `my-output`

La sortie de l'action, qui contient un message de bienvenue.

## Example usage

```yaml
uses: sthomas29/demo-action-perso@v1
with:
  my-input: 'GitHub'
